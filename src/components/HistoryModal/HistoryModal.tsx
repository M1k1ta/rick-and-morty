import { Button } from '@mui/material';
import classNames from 'classnames';

interface Props {
  isModal: boolean;
  onClose: () => void; 
}

export const HistoryModal: React.FC<Props> = ({ isModal, onClose }) => {
  return (
    <section
      className='history-modal'
      onClick={onClose}
    >
      <article className={classNames('history-modal__background', {
        'history-modal__background--active': isModal,
      })}>
      </article>
      <article className={classNames('history-modal__window', {
        'history-modal__window--active': isModal,
      })}>
        <h2 className='history-modal__title'>History</h2>
        <h3 className='history-modal__sub-title'>Character:</h3>
        <p className='history-modal__text'>value</p>
        <h3 className='history-modal__sub-title'>Location:</h3>
        <p className='history-modal__text'>value</p>
        <h3 className='history-modal__sub-title'>Episode:</h3>
        <p className='history-modal__text'>value</p>

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
