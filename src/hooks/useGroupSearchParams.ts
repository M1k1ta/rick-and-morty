import { useSearchParams } from 'react-router-dom';
import { ListKey } from '../types/ListKey';
import { FieldListType } from '../types/FieldListType';

export const useGrouprSearchParams = (listKey: ListKey[]) => {
  const [searchParams] = useSearchParams();

  const group: FieldListType = {};
  for (const value of listKey) {
    const currentValue = searchParams.get(value);
    if (currentValue) {
      group[value as ListKey] = currentValue;
    }
  }

  return group;
};
