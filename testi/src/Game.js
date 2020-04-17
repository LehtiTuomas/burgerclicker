import React from 'react';
import Stats from './Stats.js';
import Burger from './Burger.js';
import Booster from './Booster.js';

class Game extends React.Component {

  constructor(props) {
        super(props);
        
        this.mouseClicked = this.mouseClicked.bind(this);
  }
     
  mouseClicked(){
      const clicks = this.props.clicks +1;
      this.props.setClicks(clicks);
         
  }  


render() {
    return (
      <>
       <div className="header">
         <h1>Burger Clicker</h1>
       </div>
       <div className="content content--justified">
            <Stats count={this.props.clicks} />
            <Burger onClick={this.mouseClicked}/>
            <Booster boost={1} />
       </div>
       </>
    );    
  }

}

export default Game;