import { ArticleForm } from 'components/ArticleForm';
import { CurrentUserContext } from 'contexts/currentUser';
import useFetch from 'hooks/useFetch';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const [currentUserState] = useContext(CurrentUserContext);

  const apiUrl = `/articles/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [
    { response: updateArticleResponse, error: updateArticleError },
    doUpdateArticle,
  ] = useFetch(apiUrl);
  const [initialValues, setInitialValues] = useState(null);

  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);

  const handleSubmit = (article) => {
    doUpdateArticle({
      method: 'put',
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }
    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList,
    });
  }, [fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) {
      return;
    }

    setIsSuccessfulSubmit(true);
  }, [updateArticleResponse]);

  if (currentUserState.isLoggedIn === false) {
    return <Redirect to={'/'} />;
  }

  if (isSuccessfulSubmit) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        errors={(updateArticleError && updateArticleError.errors) || {}}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
