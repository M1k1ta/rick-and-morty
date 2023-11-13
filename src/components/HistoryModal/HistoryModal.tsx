import { Button } from '@mui/material';
import classNames from 'classnames';
import { FieldListType } from '../../types/FieldListType';
import { useState } from 'react';

interface Props {
  isModal: boolean;
  onClose: () => void; 
}

export const HistoryModal: React.FC<Props> = ({ isModal, onClose }) => {
  const history: FieldListType[] = JSON.parse(
    localStorage.getItem('history') || '[]'
  );
  const [
    currentHistoryIndex,
    setCurrentHistoryIndex,
  ] = useState(history.length - 1);
  const currentHistory = history[currentHistoryIndex];

  return (
    <section
      className='history-modal'
    >
      <article
        className={classNames('history-modal__background', {
          'history-modal__background--active': isModal,
        })}
        onClick={onClose}
      >
      </article>
      <article className={classNames('history-modal__window', {
        'history-modal__window--active': isModal,
      })}>
        <div className='history-modal__header'>
          <h2 className='history-modal__title'>
            {(history.length) ? 'History' : 'History empty'}
          </h2>

          <div className='history-modal__pagination'>
            <button
              className='history-modal__button'
              type='button'
              onClick={() => setCurrentHistoryIndex(
                (currentHistory) => currentHistory - 1
              )}
              disabled={currentHistoryIndex <= 0}
            >
              <i className='material-icons'>chevron_left</i>
            </button>

            <button
              className='history-modal__button'
              type='button'
              onClick={() => setCurrentHistoryIndex(
                (currentHistory) => currentHistory + 1
              )}
              disabled={currentHistoryIndex >= history.length - 1}
            >
              <i className='material-icons'>chevron_right</i>
            </button>
          </div>
        </div>

        {currentHistory?.name && (
          <>
            <h3 className='history-modal__sub-title'>Name:</h3>
            <p className='history-modal__text'>
              {history[currentHistoryIndex].name}
            </p>
          </>
        )}

        {currentHistory?.status && (
          <>
            <h3 className='history-modal__sub-title'>Status:</h3>
            <p className='history-modal__text'>
              {history[currentHistoryIndex].status}
            </p>
          </>
        )}

        {currentHistory?.species && (
          <>
            <h3 className='history-modal__sub-title'>Species:</h3>
            <p className='history-modal__text'>
              {history[currentHistoryIndex].species}
            </p>
          </>
        )}

        {currentHistory?.type && (
          <>
            <h3 className='history-modal__sub-title'>Type:</h3>
            <p className='history-modal__text'>
              {history[currentHistoryIndex].type}
            </p>
          </>
        )}

        <div className='history-modal__close'>
          <Button
            size='large'
            sx={{ 'letterSpacing': 1.25 }}
            onClick={onClose}
          >
            close
          </Button>
        </div>
      </article>
    </section>
  );
};
