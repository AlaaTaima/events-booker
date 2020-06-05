import React from 'react';

import logoGSG from './1-logo-GSG.svg';
import headerPic from './Group_114573.svg';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="header_logo">
      <img className="header_logo-img" src={logoGSG} alt="GSG Logo" />
      <div className="header_logo-title">
        <span className="header_logo-subtitle">Events </span>Booker
      </div>
    </div>
    <div>
      <img className="header_pic " src={headerPic} alt="man with a laptop" />
      <h3 className="header_title">
        Welcome to <span className="header_subTitle">GSG event app</span>
      </h3>
      <h4 className="sub_header">
        See the available events at GSG and book your favorite
      </h4>
    </div>
  </div>
);

export default Header;
