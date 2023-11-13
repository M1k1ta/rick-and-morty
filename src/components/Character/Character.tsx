import classNames from 'classnames';
import { CharacterType } from '../../types/CharacterType';

interface Props {
  character: CharacterType;
}

export const Character: React.FC<Props> = ({ character }) => {
  const { name, image, status, species, location, origin } = character;

  return (
    <article className='character'>
      <img
        className='character__img'
        src={image}
        alt={name}
      />

      <section className='character__detail'>
        <div className='character__section-1'>
          <h2 className='character__name'>{name}</h2>
          <p className={classNames('character__status', {
            'character__status--alive': status === 'Alive',
            'character__status--dead': status === 'Dead',
          })}>
            {status} - {species}
          </p>
        </div>

        <div className='character__section-2'>
          <p className='character__title'>Last known location:</p>
          <p className='character__text'>{location.name}</p>
        </div>

        <div className='character__section-3'>
          <p className='character__title'>First seen in:</p>
          <p className='character__text'>{origin.name}</p>
        </div>

        <div className='character__section-4'>
          <p className='character__title'>Other info</p>
          <p className='character__text'>
            The Mosaic Rooms are a leading non-profit arts organisation
            and bookshop dedicated to supporting and promoting contemporary
            culture from the Arab world and beyond in London.

            <br />
            <br />

            Established in 2009, as a project of the A.M.
            Qattan Foundation, it dedicates its work to championing creative
            and critical voices that are often underrepresented.
          </p>
        </div>
      </section>
    </article>
  );
};
