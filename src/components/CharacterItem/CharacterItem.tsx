import classNames from 'classnames';
import { CharacterItemType } from '../../types/CharacterItemType';

interface Props {
  character: CharacterItemType;
}

export const CharacterItem: React.FC<Props> = ({ character }) => {
  const { name, image, status, species, location, origin } = character;

  return (
    <article className='character-item'>
      <img
        className='character-item__img'
        src={image}
        alt={name}
      />

      <section className='character-item__detail'>
        <div className='character-item__section-1'>
          <h2 className='character-item__name'>{name}</h2>
          <p className={classNames('character-item__status', {
            'character-item__status--alive': status === 'Alive',
            'character-item__status--dead': status === 'Dead',
          })}>
            {status} - {species}
          </p>
        </div>

        <div className='character-item__section-2'>
          <p className='character-item__title'>Last known location:</p>
          <p className='character-item__text'>{location.name}</p>
        </div>

        <div className='character-item__section-3'>
          <p className='character-item__title'>First seen in:</p>
          <p className='character-item__text'>{origin.name}</p>
        </div>
      </section>
    </article>
  );
};
