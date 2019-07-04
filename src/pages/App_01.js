import React, { Component } from 'react'

import Home_02 from './Home_02'
import Navigation_01 from '../components/layout/Navigation_01'

export default class App_01 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation_01/>
                <Home_02/>
            </React.Fragment>
        )
    }
}
