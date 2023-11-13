import { TextField } from '@mui/material';
import classNames from 'classnames';
import { useState } from 'react';
import { ListKey } from '../../types/ListKey';
import { FieldListType } from '../../types/FieldListType';

interface Props {
  title: string;
  list: ListKey[];
  value: FieldListType;
  onChange: (key: ListKey, value: string) => void;
}

export const FieldList: React.FC<Props> = (
  { title, list, value, onChange }
) => {
  const [isVisibleList, setIsVisibleList] = useState(false);

  return (
    <article
      className='field-list'
    >
      <div
        className='field-list__toggle'
        onClick={() => setIsVisibleList((currentValue) => !currentValue)}
      >
        <h2 className='field-list__title'>{title}</h2>
        <i className={classNames('material-icons field-list__arrow', {
          'field-list__arrow--active': isVisibleList,
        })}>
          chevron_left
        </i>
      </div>

      <div className={classNames('field-list__box', {
        'field-list__box--active': isVisibleList,
      })}>
        <div className={classNames('field-list__inputs', {
          'field-list__inputs--active': isVisibleList,
        })}>
          {list.map((name) => (
            <TextField
              key={name}
              name={name}
              label={name[0].toUpperCase() + name.slice(1)}
              variant='outlined'
              value={value[name]}
              onChange={(event) => (
                onChange(name, event.target.value)
              )}
              InputProps={{
                style: {
                  background: '#F5F5F5',
                },
              }}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
