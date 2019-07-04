import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation_01() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container">

                <a className="navbar-brand js-scroll-trigger" href="#page-top">Brian Randall</a>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <div className="navbar-nav ml-auto my-2 my-lg-0">

                        <div className={"nav-item"}>
                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                        </div>
                        <div className={"nav-item"}>
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </div>
                        <div className={"nav-item"}>
                                <a className="nav-link js-scroll-trigger" href="https://github.com/Glowyrm">Portfolio</a>
                        </div>
                        {/* <Link 
                            className={"nav-item"} 
                            to="/">
                                <div className="nav-link js-scroll-trigger">Portfolio</div>
                        </Link> */}
                    </div>
                </div>

            </div>
        </nav>
    )
}
