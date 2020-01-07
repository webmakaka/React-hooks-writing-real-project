import React, { useEffect, Fragment } from 'react';
import { stringify } from 'query-string';
import useFetch from 'hooks/useFetch';
import Feed from 'components/Feed';
import FeedToggler from 'components/FeedToggler';
import Pagination from 'components/Pagination';
import PopularTags from 'components/PopularTags';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import { getPaginator, LIMIT } from 'utils';

export const TagFeed = ({ location, match, match: { url } }) => {
  const tagName = match.params.slug;

  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit: LIMIT,
    offset,
    tag: tagName
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tagName} />
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
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};
