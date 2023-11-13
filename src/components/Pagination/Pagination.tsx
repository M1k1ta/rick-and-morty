import { useAppSelector } from '../../app/hooks';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/getSearchWith';
import { generatePages } from '../../utils/generatePages';
import classNames from 'classnames';

export const Pagination: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { pages } = useAppSelector(state => state.characterList);

  const prevPage = (currentPage > 1) ? currentPage - 1 : currentPage; 
  const nextPage = (currentPage < pages) ? currentPage + 1 : currentPage;

  return (
    <article className='pagination'>
      <Link
        className={classNames('pagination__arrow-link', {
          'pagination__arrow-link--disabled': currentPage === 1,
        })}
        to={{
          search: getSearchWith(
            searchParams, { page: prevPage.toString() },
          ),
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className='material-icons'>chevron_left</i>
      </Link>

      <div
        className='pagination__list'
      >
        {generatePages(currentPage, pages).map((page) => (
          (page)
            ? (
              <Link
                key={page}
                className={classNames('pagination__link', {
                  'pagination__link--active': currentPage === page,
                })}
                to={{
                  search: getSearchWith(
                    searchParams, { page: page.toString() },
                  ),
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {page}
              </Link>
            ) : (
              <div key={page} className='pagination__dots'>...</div>
            )
        ))}
      </div>

      
      <Link
        className={classNames('pagination__arrow-link', {
          'pagination__arrow-link--disabled': currentPage === pages,
        })}
        to={{
          search: getSearchWith(
            searchParams, { page: nextPage.toString() },
          ),
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className='material-icons'>chevron_right</i>
      </Link>
    </article>
  );
};
