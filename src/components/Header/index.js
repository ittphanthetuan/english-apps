import React from 'react';
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material'
import Icon from '@mui/material/Icon';

const Header = () => {

  return (
    <div className='header' >
      <IconButton color="primary" size="large"><Icon>home</Icon></IconButton>
      
      {/* <Link to='/'>DashBoard</Link> &nbsp;
      <Link to='/about'>About</Link> &nbsp;
      <Link to='/detail'>Detail</Link> */}
    </div>
  )
}

export default Header;