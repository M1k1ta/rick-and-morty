import { useParams } from 'react-router-dom';
import { Character } from '../../components/Character';
import { useCharacter } from '../../hooks/useCharacter';

export const DetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(Number(id));

  return (
    <main className='detail-page'>
      {(!loading && !error) && <Character character={data.character} />}
    </main>
  );
};
