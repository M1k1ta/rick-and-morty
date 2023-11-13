import classNames from 'classnames';
import menu from '../../img/menu.svg';
import alert from '../../img/alert.svg';
import save from '../../img/save.svg';
import { useState } from 'react';
import { HistoryModal } from '../HistoryModal';

export const Menu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);

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

      <button
        className={classNames(
          'menu__button',
          'menu__button--small',
          'menu__button-2', {
            'menu__button-2--active': isMenu,
          }
        )}
        type='button'
        disabled
      >
        <img src={save} alt='character save' />
      </button>

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
