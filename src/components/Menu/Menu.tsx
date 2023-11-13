import classNames from 'classnames';
import menu from '../../img/menu.svg';
import alert from '../../img/alert.svg';
import save from '../../img/save.svg';
import { CSVLink } from 'react-csv';
import { useState } from 'react';
import { HistoryModal } from '../HistoryModal';
import { useAppSelector } from '../../app/hooks';

export const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { characterList } = useAppSelector(state => state.characterList);

  return (
    <article className='menu'>
      <button
        className={classNames(
          'menu__button',
          'menu__button--small',
          'menu__button-1', {
            'menu__button-1--active': isMenu,
          }
        )}
        type='button'
        onClick={() => {
          setIsModal(true);
          setIsMenu(false);
        }}
      >
        <img src={alert} alt='character alert' />
      </button>

      <CSVLink
        className={classNames(
          'menu__button',
          'menu__button--small',
          'menu__button-2', {
            'menu__button-2--active': isMenu,
          }
        )}
        data={characterList}
      >
        <img src={save} alt='character save' />
      </CSVLink>

      <button
        className='menu__button menu__button-3'
        type='button'
        onClick={() => setIsMenu((currentValue) => !currentValue)}
      >
        {(!isMenu)
          ? (
            <img src={menu} alt='character menu' />
          ) : (
            <i className='material-icons'>close</i>
          )}
      </button>

      <HistoryModal
        isModal={isModal}
        onClose={() => setIsModal(false)}
      />
    </article>
  );
};
