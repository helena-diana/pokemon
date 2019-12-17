import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import Pokemon from './Pokemon';
import Owned from './Owned';
import Detail from './Detail';

export const NotFoundPage = () => (<p>Not Found</p>);

export const LinkMenu = ({ label, to, activeOnlyWhenExact, children }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link aria-label="link" className={match ? "active" : ""} to={to}>{children}</Link>
  );
}

export default () => {
  return (
    <Router>
      <div>
        <header>
        <LinkMenu activeOnlyWhenExact={true} to="/">Pokemon</LinkMenu>
        <LinkMenu to="/owned">Owned</LinkMenu>
      </header>
      <article>
        <Switch>
          <Route exact path="/" component={Pokemon} />
          <Route path="/owned" component={Owned} />
          <Route path="/pokemon/:id" component={Detail} />
          <Route component={NotFoundPage} />
        </Switch>
      </article>
      </div>
    </Router>
  );
}