import { Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import { FieldList } from '../FieldList';
import { FieldListType } from '../../types/FieldListType';
import { ListKey } from '../../types/ListKey';
import { useSearchParams } from 'react-router-dom';
import { filterNameList } from '../../utils/filterNameList';
import { useGrouprSearchParams } from '../../hooks/useGroupSearchParams';

export const Filter = () => {
  const [_, setSearchParams] = useSearchParams();
  const defaultFilters = useGrouprSearchParams(filterNameList);
  const [isFilter, setIsFilter] = useState(false);
  const [filters, setFilters] = useState<FieldListType>(defaultFilters);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const filter: FieldListType = {};

    for (const key in filters) {
      const currentValue = filters[key as ListKey];

      if (currentValue) {
        filter[key as ListKey] = currentValue;
      }
    }

    setSearchParams({...filter});
    setFilters({});
    setIsFilter(false);
  };

  const toggleFilter = () => {
    setIsFilter((isFilter) => !isFilter);
  };

  return (
    <article className='filter'>
      {isFilter && (
        <div
          className='filter__background'
          onClick={toggleFilter}
        >
        </div>
      )}
      <div className='filter__box'>
        <Button
          sx={{
            paddingTop: '11px',
            paddingBottom: '11px',
          }}
          variant='contained'
          color='inherit'
          size='large'
          type='button'
          onClick={toggleFilter}
        >
          {(!isFilter) ? 'Filter' : 'Remove Filter'}
        </Button>

        {(isFilter) && (
          <form
            onSubmit={handleSubmit}
            className='filter__form'
          >

            <FieldList
              title='Filters'
              list={filterNameList}
              value={filters}
              onChange={(key, value) => setFilters((currentValue) => ({
                ...currentValue,
                [key]: value,
              }))}
            />

            <Button
              sx={{
                paddingTop: '11px',
                paddingBottom: '11px',
              }}
              variant='contained'
              color='inherit'
              size='large'
              type='submit'
            >
              Find
            </Button>
          </form>
        )}
      </div>
    </article>
  );
};
