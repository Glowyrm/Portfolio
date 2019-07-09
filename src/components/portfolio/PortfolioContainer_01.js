import React from 'react'
import src_sfi from '../../../public/portfolioSFI.png'
import src_ellafund from '../../../public/portfolioellafund.jpg'
import src_tsampi from '../../../public/portfoliotsampi.png'
import src_cnt from '../../../public/portfoliocnt.png'

export default function PortfolioContainer_01() {
    const ProjectText = {
        SFI: `My responsibility on this project was to engineer a bespoke CMS, and relevant UI, that allowed the company to keep their current content creation workflow. The code also had to integrate within their existing website which was created using Polymer Web Components. 
        \nThis complex challenge required proficiency with OAuth, Firebase, and Polymer Web Components, as well as, a solid knowledge of async Javascript in order to map out the website's multi-directional event system.`,
        ellafund: `I was hired to build a Web Extension allowing users to inject marketing scripts while browsing to generate advertisement revenue for their charity of choice.
        \nI worked with the project's designer to implement the mockups he created in InDesign. The code was developed using async javascript and heavy research in to the Web Extensins API.`,
        tsampi: `I was invited to be a collaborator on the Tsampi Project which was started by my long-time colleague, Tim Watts. The goal of The Tsampi project is to create a federated server protocol using a permissioned blockchain.
        \nMy contribution was creating a server executable script using NodeJS that implemented a cryptographic proof-of-work algorithm.`,
        cnt: `I was hired for work on the CoatandTails e-commerce site to customise purchase options that the backend wouldn't accomodate, and to allow better integration with their marketing campaign.
        \nI solved the purchase options task by using the Liquid framework's filters and iteration to generate the neccessary templates. In order to facilitate tracking and storage of the marketing url, I utilized vanilla JS for the front-end, and PHP & SQL for the back-end. `
    }
    return (
        <section className="page-section bg-primary">

            <h2 className="text-white mt-0 text-center mb-4">Portfolio</h2>

            <div className="container">
                <div className="row">

                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_sfi}></img>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                    <h4 className="card-title">Suplhur Fuel Injection</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.SFI}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_ellafund}></img>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                    <h4 className="card-title">Ellafund</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.ellafund}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_tsampi}></img>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                <h4 className="card-title">Tsampi</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.tsampi}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_cnt}></img>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                <h4 className="card-title">Coat and Tails</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.cnt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2" >
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-12 my-auto mx-auto">
                                <div id="img4"></div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                <h4 className="card-title">Testing</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.cnt}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
