import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className='header' >
      <Link to='/'>DashBoard</Link> &nbsp;
      <Link to='/about'>About</Link> &nbsp;
      <Link to='/detail'>Detail</Link>
    </div>
  )
}

export default Header;