/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UserListPage from 'containers/UserListPage/Loadable';
// import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - By James Christian"
        defaultTitle="Locusnine Interview Application"
      >
        <meta name="description" content="Locusnine application" />
      </Helmet>
      <Header />
      <div className="container">
        <div className="columns">
          <SideBar />
          <div className="column is-9">
            <Switch>
              <Route exact path="/" component={UserListPage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
      {/* <GlobalStyle /> */}
    </>
  );
}
