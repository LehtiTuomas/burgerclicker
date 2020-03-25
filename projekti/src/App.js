import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from'./testdata';

import Header from './Components/Header/Header.js';
import Items from './Components/Items/Items';
import Menu from './Components/Menu/Menu.js';
import Stats from './Components/Stats/Stats';
import Settings from './Components/Settings/Settings';
import AddItem from'./Components/AddItem/AddItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
  }

  render() {
    return (
     <Router>
        <div className="App">
          <Header />
          <Route path="/" exact render={() => <Items data={this.state.data}/>}/>
          <Route path="/stats" component={Stats}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/add" render={() => <AddItem />}/>
          <Menu />
        </div>
      </Router>
   );
  }
}


export default App;
