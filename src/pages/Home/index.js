import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_DASHBOARD } from 'routers/path';
import Wrapper from './Wrapper';

function Home() {
  return (
    <Wrapper>
      <Link to={PATH_DASHBOARD.ipa}>IPA</Link>
    </Wrapper>
  )
}

export default Home;
