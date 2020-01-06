import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const PaginationItem = ({ page, currentPage, url }) => {
  const liClasses = classNames({
    'page-item': true,
    active: currentPage === page
  });

  return (
    <li className={liClasses}>
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

export default PaginationItem;
