import { useEffect } from 'react';
import { CharacterList } from '../../components/CharacterList';
import { useCharacters } from '../../hooks/useCharacters';
import { useAppDispatch } from '../../app/hooks';
import { actions } from '../../app/features/characterListSlice';
import { Pagination } from '../../components/Pagination';
import { Filter } from '../../components/Filter';
import { useSearchParams } from 'react-router-dom';
import { filterNameList } from '../../utils/filterNameList';
import { useGrouprSearchParams } from '../../hooks/useGroupSearchParams';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const filters = useGrouprSearchParams(filterNameList);
  const currentPage = Number(searchParams.get('page')) || 1;
  const { data, loading, error } = useCharacters(currentPage, filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(actions.set({
        characterList: data.characters.results,
        loading,
        error: error?.message || '',
        ...data.characters.info,
      }));
    }
  });

  if (error) {
    return (
      <main className='home-page'>
        <ErrorMessage error={error} />
      </main>
    );
  }

  if (loading) {
    return (
      <main className='home-page'>
        <Loader />
      </main>
    );
  }

  return (
    <main className='home-page'>
      <Filter />

      {(!error) && (
        <CharacterList />
      )}

      <Pagination />
    </main>
  );
};
