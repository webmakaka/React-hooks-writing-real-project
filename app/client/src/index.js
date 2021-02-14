import CurrentUserChecker from 'components/CurrentUserChecker';
import { TopBar } from 'components/TopBar';
import { CurrentUserProvider } from 'contexts/currentUser';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
