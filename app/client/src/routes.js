import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalFeed } from 'pages/GlobalFeed.js';
import { Article } from 'pages/Article.js';

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
