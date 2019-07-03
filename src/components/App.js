import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader/Loader';
import Nav from './Nav/Nav';

const containerStyles = {
  maxWidth: 1400,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const AsyncHomePage = Loadable({
  loader: () =>
    import('../pages/Home/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncAboutPage = Loadable({
  loader: () =>
    import('../pages/About/About' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncPetsPage = Loadable({
  loader: () =>
    import('../pages/Pets/Pets' /* webpackChunkName: "pets-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncPetPage = Loadable({
  loader: () => import('../pages/Pet/Pet' /* webpackChunkName: "pet-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const App = () => {
  return (
    <div style={containerStyles}>
      <Nav />

      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/pets/:id" component={AsyncPetPage} />
        <Route path="/pets" component={AsyncPetsPage} />
        <Route path="/about" component={AsyncAboutPage} />
        <Route component={AsyncHomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
