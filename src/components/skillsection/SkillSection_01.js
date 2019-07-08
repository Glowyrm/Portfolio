import React from 'react'

const SkillSection_01 = () => {

    const onClickSection = (e) => {
        e.preventDefault();
        console.log(e.target.getBoundingClientRect().height);
    }

    return (
        <React.Fragment>
            <section onClick={onClickSection} className="page-section bg-primary" id="skills">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center mb-4">
                            <h2 className="text-white mt-0">Skills and Expertise</h2>
                            <hr className="divider light my-4"/>
                            <p className="text-white-75 mb-4">Yeah, I can do that.</p>
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
        </React.Fragment>
    )
}

export default SkillSection_01
