import { Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import { FieldList } from '../FieldList';
import { FieldListType } from '../../types/FieldListType';
import { ListKey } from '../../types/ListKey';
import { useSearchParams } from 'react-router-dom';
import { filterNameList } from '../../utils/filterNameList';
import { useGrouprSearchParams } from '../../hooks/useGroupSearchParams';
import classNames from 'classnames';

export const Filter = () => {
  const [_, setSearchParams] = useSearchParams();
  const defaultFilters = useGrouprSearchParams(filterNameList);
  const [isFilter, setIsFilter] = useState(false);
  const [filters, setFilters] = useState<FieldListType>(defaultFilters);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const filter: FieldListType = {};
    let counter = 0;

    for (const key in filters) {
      const currentValue = filters[key as ListKey];

      if (currentValue) {
        filter[key as ListKey] = currentValue;
        counter++;
      }
    }

    setSearchParams({...filter});

    if (counter > 0) {
      const history: FieldListType[] = JSON.parse(
        localStorage.getItem('history') || '[]'
      );
  
      localStorage.setItem(
        'history',
        JSON.stringify([...history, filter])
      );
    }

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
      <div className={classNames('filter__box', {
        'filter__box--active': isFilter,
      })}>
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
