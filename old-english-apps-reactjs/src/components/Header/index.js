import React from 'react';
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material'
import Icon from '@mui/material/Icon';
import Wrapper from './Wrapper';

const Header = () => {

  return (
    <Wrapper className='header' >
      <IconButton color="primary" size="large" as={Link} to="/"><Icon>home</Icon></IconButton>
    </Wrapper>
  )
}

export default Header;