// Ref (Using React Router Programmatically)" https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router"

import React, { useEffect, useState, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom';

const Navigation_01 = withRouter(({history, location: {pathname}, myWinHeight}) => {

    const CollapsibleMenu = useRef(null);

    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        window.scrollTo(0, scrollPosition);
    }, [pathname])

    const LinkInfo = {
        defaultLink: {
            id: "defaultLink",
            name: "Home",
            route: "/home",
            position: 0
        },
        skillsLink: {
            id: "skillsLink",
            name: "Skills",
            route: "/home",
            position: (myWinHeight * .8)
        },
        contactLink: {
            id: "contactLink",
            name: "Contact",
            route: "/home",
            position: (myWinHeight * .8 + 705.4000244140625)
        },
        portfolioLink: {
            id: "portfolioLink",
            name: "Portfolio",
            route: "/portfolio",
            position: 0
        }
        
    }

    const animButtonPop = [
        {
            transform: "scale(0.7)"
        },
        {
            transform: "scale(1.15)"
        },
        {
            transform: "scale(1)"
        }
    ]

    const onClickLink = (e) => {
        let targetinfo = e.target.id ? LinkInfo[e.target.id] : LinkInfo["defaultLink"]
        e.preventDefault();
        e.target.animate(
            animButtonPop,
            {duration: 500, easing: "ease-in-out", fill: "both"}
        )
        CollapsibleMenu.current.className = "collapse navbar-collapse";
        if ( pathname === targetinfo.route) {
            window.scrollTo(0, targetinfo.position);
        } else {
            history.push(targetinfo.route);
            console.log("Scrolling to: ", targetinfo.position);
            setScrollPosition(targetinfo.position);
        }
    }

    return (
        <div className="navContainer">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">

                    <div 
                        className="navbar-brand js-scroll-trigger" 
                        id={LinkInfo.defaultLink.id}
                        onClick={onClickLink}>Brian Randall</div>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div ref={CollapsibleMenu} className="collapse navbar-collapse" id="navbarResponsive">
                        <div className="navbar-nav ml-auto my-2 my-lg-0 float-right">
                            
                            <div className="nav-item">
                                <div 
                                    className="nav-link js-scroll-trigger" 
                                    id={LinkInfo.skillsLink.id}
                                    onClick={onClickLink}>
                                        {LinkInfo.skillsLink.name}</div>
                            </div>
                            <div className="nav-item">
                                <div 
                                    className="nav-link js-scroll-trigger" 
                                    id={LinkInfo.contactLink.id}
                                    onClick={onClickLink}>
                                        {LinkInfo.contactLink.name}</div>
                            </div>
                            <div className="nav-item">
                                <div 
                                    className="nav-link js-scroll-trigger" 
                                    id={LinkInfo.portfolioLink.id}
                                    onClick={onClickLink}>
                                        {LinkInfo.portfolioLink.name}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>

    )
})

export default Navigation_01
