import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import ViewList from '@material-ui/icons/ViewList';
import Timeline from '@material-ui/icons/Timeline';
import Settings from '@material-ui/icons/Settings';

function Menu(props) {
    return (
      <div className="menu">
        <Link to="/"><div className="menu__nappi"><ViewList htmlColor="#fff"/></div></Link>
        <Link to="/stats"><div className="menu__nappi"><Timeline htmlColor="#fff"  /></div></Link>
        <Link to="/settings"><div className="menu__nappi"><Settings htmlColor="#fff" /></div></Link>
      </div>
    )
  }

  export default Menu;