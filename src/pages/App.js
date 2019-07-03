import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Header from  '../components/layout/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">
            <Header></Header>

            <Route exact path="/" render={ props => (
              <React.Fragment>    
                <h2>Todo List</h2>    
              </React.Fragment>
            ) } />

            <Route path="/about" component={ About } />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;