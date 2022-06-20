/* eslint-disable react/display-name */
import React, { Suspense, lazy } from 'react';
import { PATH_DASHBOARD } from './path'
import Layout from 'components/Layout';
import { useRoutes } from 'react-router-dom';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <Suspense fallback={<div>content...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import('pages/Home')));
const IPA = Loadable(lazy(() => import('pages/IPA')));

function Routers() {
  return useRoutes([
    { 
      path: PATH_DASHBOARD.root,
      element: <Layout />,
      children: [
        { element: <Home />, index: true },
        { path: PATH_DASHBOARD.ipa, element: <IPA /> },
      ]
    }
  ])
}

export default Routers;
