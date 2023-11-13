export const generatePages = (currentPage: number, pagesCount: number) => {
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if ((i < currentPage - 1 && i !== 1 && currentPage !== pagesCount)
      || (i < currentPage - 2 && i !== 1)) {
      continue;
    }

    if ((i > currentPage + 1 && i !== pagesCount && currentPage !== 1)
      || (i > currentPage + 2 && i !== pagesCount)) {
      continue;
    }

    if ((i > currentPage + 2) || (i > currentPage + 3)) {
      pages.push(NaN);
    }

    pages.push(i);

    if ((i < currentPage - 2) || (i < currentPage - 3)) {
      pages.push(NaN);
    }
  }

  return pages;
};
