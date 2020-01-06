import React from 'react';
import { range } from 'utils';
import PaginationItem from 'components/PaginationItem';

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;
