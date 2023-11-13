import { Link } from 'react-router-dom';
import { CharacterItem } from '../CharacterItem';
import { useAppSelector } from '../../app/hooks';

export const CharacterList: React.FC = () => {
  const { characterList } = useAppSelector(state => state.characterList);

  return (
    <section className='character-list'>
      {characterList.map((character) => {
        const { id } = character;

        return (
          <Link
            to={`/${id}`}
            key={id}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <CharacterItem
              character={character}
            />
          </Link>
        );
      })}
    </section>
  );
};
