import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './App';
import Film from './Movies';
import Character from './Characters'
import Planet from './Planets'
import Starship from './Starships'

export default class Routing extends Component<any, any> {
  render() {
    return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/film/:id" component={Film} />
            <Route exact path="/character/:id" component={Character} />
            <Route exact path="/planet/:id" component={Planet} />
            <Route exact path="/starship/:id" component={Starship} />
          </Switch>
    </Router>
    )
  }
}
