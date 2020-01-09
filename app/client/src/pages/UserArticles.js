import React, { useEffect, Fragment } from 'react';
import { stringify } from 'query-string';

import useFetch from 'hooks/useFetch';
import { getPaginator, LIMIT } from 'utils';

import Feed from 'components/Feed';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import Pagination from 'components/Pagination';

const getApiUrl = ({ username, offset, isFavorites }) => {
  const params = isFavorites
    ? { LIMIT, offset, favorited: username }
    : { LIMIT, offset, author: username };

  return `/articles?${stringify(params)}`;
};

export const UserArticles = ({ username, location, isFavorites, url }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const apiUrl = getApiUrl({ username, offset, isFavorites });
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, isFavorites]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}

      {!isLoading && response && (
        <Fragment>
          <Feed articles={response.articles} />
          <Pagination
            total={response.articlesCount}
            limit={LIMIT}
            url={url}
            currentPage={currentPage}
          />
        </Fragment>
      )}
    </div>
  );
};
