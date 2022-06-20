import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Wrapper from './Wrapper';

const Layout = () => {

  return (
    <Wrapper className='app' >
      <Header />
      <div className='main-content'>
        <Outlet />
      </div>
    </Wrapper>
  )
}

export default Layout;