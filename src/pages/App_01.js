import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home_02 from './Home_02'
import About from './About'
import Navigation_01 from '../components/layout/Navigation_01'

export default class App_01 extends Component {
    render() {
        return (
            <Router>
                <Navigation_01/>

                <Route exact path="/" component={ Home_02 } />
                <Route path="/about" component={ About } />

            </Router>
        )
    }
}
