// Ref: (Passing Props to Route Component): https://github.com/ReactTraining/react-router/issues/4105#issuecomment-291834881
// Ref: (Forwarding Refs to Child Components): https://codesandbox.io/s/rwj7z7o7oo

import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'

import Home_02 from './Home_02'
import Navigation_01 from '../components/layout/Navigation_01'
import PortfolioContainer_01 from '../components/Portfolio/PortfolioContainer_01'

export default function App_01() {
    const [winHeight, setWinHeight] = useState();

    useEffect(() => {   
        console.log("Window Height is: ", window.innerHeight);  
        setWinHeight(window.innerHeight);
    }, [])

    return (
        <Router history={browserHistory}>
            <Navigation_01 myHistory={history} myWinHeight={winHeight}/>
            <Route exact path="/home" render={() => 
                <Home_02/>
            }/>
            <Route path="/portfolio" component={PortfolioContainer_01}/>
        </Router>
    )
}
