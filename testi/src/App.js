import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';


import Menu from './Menu.js';
import Game from './Game.js';
import Coupons from './Coupons.js';
import Profile from './Profile.js';

import './App.css';


class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.setClicks = this.setClicks.bind(this);
  }

setClicks(clicks) {
  this.setState({
    clicks: clicks
  });
}

  render() {
    return (
     <Router>
      <div className="clicker">
        <Route path= "/" exact render={props => (
          <Game clicks={this.state.clicks} setClicks={this.setClicks}/>
        )} />
        <Route path= "/coupons" component={Coupons} />
        <Route path= "/profile" component={Profile} />
        <Menu claimableCoupons={5} />
      </div>
     </Router> 
    );    
  }
} 

export default Clicker;