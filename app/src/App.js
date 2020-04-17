import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './containers/GroupList';
import GroupEdit from './containers/GroupEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;