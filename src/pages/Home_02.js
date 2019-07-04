import React from 'react'

export default function Home_02() {
    return (
        <React.Fragment>

            {/* MASTHEAD Section */}
            <header className={"masthead"}>
                <div className={"container h-100"}>
                    <div className={"row h-100 align-items-center justify-content-center text-center"}>
                        <div className={"col-lg-10 align-self-end"}>
                            <h1 className={"font-weight-bold text-white-75"}>Hello, I'm <span className={""}>Brian Randall</span>.</h1>
                            <h1 className={"font-weight-bold text-white-75"}>I'm a Front-End Web Developer.</h1>
                            <hr clclassNameass={"divider my-4"}/>
                        </div>
                        <div className={"col-lg-8 align-self-baseline"}>
                            <p className={"text-white-75 font-weight-light mb-5"}>Check out my personal and professional portfolio, and contact me to kick start your project</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* SKILLS Section */}
            <section className="page-section bg-primary" id="skills">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center mb-4">
                            <h2 className="text-white mt-0">Skills and Expertise</h2>
                            <hr className="divider light my-4"/>
                            <p className="text-white-75 mb-4">Yeah, I can do that!</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <h5 className="text-white mb-4">Languages</h5>
                                    <p>Javascript</p>
                                    <p>Python</p>
                                    <p>SQL</p>
                                    <p>C++</p>
                                </div>
                                <div className="col-3">
                                    <h5 className="text-white mb-4">Front-End</h5>
                                    <p>ReactJS</p>
                                    <p>Redux</p>
                                    <p>RXJS</p>
                                    <p>Web Components</p>
                                    <p>Webpack</p>
                                    <p>Gulp</p>
                                </div>
                                <div className="col-3">
                                    <h5 className="text-white mb-4">Back-End</h5>
                                    <p>NodeJS</p>
                                    <p>Django</p>
                                    <p>PHP</p>
                                    <p>HandlebarsJS</p>
                                    <p>Liquid (Shopify)</p>
                                </div>
                                <div className="col-3">
                                    <h5 className="text-white mb-4">Design</h5>
                                    <p>CSS</p>
                                    <p>SASS</p>
                                    <p>Bootstrap</p>
                                    <p>CSS Animations</p>
                                    <p>WAAPI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT Section */}
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="mt-0">Let's Get In Touch!</h2>
                            <hr class="divider my-4"/>
                            <p class="text-muted mb-5">Ready to team up on your next project? Email me, and let's start the conversation</p>
                        </div>
                    </div>
                    <div class="mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="mailto:glowyrm.prime@gmail.com">glowyrm.prime@gmail.com</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
