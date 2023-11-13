import { ApolloError } from '@apollo/client';

interface Props {
  error: ApolloError;
};

export const ErrorMessage: React.FC<Props> = ({ error }) => (
  <article className='error'>
    <h2 className='error__title'>Error</h2>

    <p className='error__message'>{error.message}</p>
  </article>
);
