import React from 'react';
import { ArticleForm } from 'components/ArticleForm';

export const CreateArticle = () => {
  const errors = {};
  const initialValues = {};
  const handleSubmit = data => {
    console.log('handleSubmit', data);
  };

  return (
    <div>
      <ArticleForm
        errors={errors}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
