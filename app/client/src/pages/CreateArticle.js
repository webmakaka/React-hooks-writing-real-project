import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { CurrentUserContext } from 'contexts/currentUser';

import { ArticleForm } from 'components/ArticleForm';

export const CreateArticle = () => {
  const apiUrl = '/articles';
  const [currentUserState] = useContext(CurrentUserContext);
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const handleSubmit = article => {
    console.log('handleSubmit', article);
    doFetch({
      method: 'post',
      data: {
        article
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    if (currentUserState.isLoggedIn === false) {
      return <Redirect to={'/'} />;
    }

    setIsSuccessfullSubmit(true);
    if (isSuccessfullSubmit) {
      return <Redirect to={`/articles/${response.article.slug}`} />;
    }
  }, [response]);

  return (
    <div>
      <ArticleForm
        errors={(error && error.errors) || {}}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
