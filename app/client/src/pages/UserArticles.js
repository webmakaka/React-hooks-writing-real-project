import ErrorMessage from 'components/ErrorMessage';
import Feed from 'components/Feed';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import useFetch from 'hooks/useFetch';
import { stringify } from 'query-string';
import React, { Fragment, useEffect } from 'react';
import { getPaginator, LIMIT } from 'utils';

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
