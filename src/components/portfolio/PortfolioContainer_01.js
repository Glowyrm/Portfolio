import React from 'react'
import src_sfi from '../../../public/portfolio_SFI.png'
import src_ellafund from '../../../public/portfolio_EllaFund.png'
import src_tsampi from '../../../public/portfolio_tsampi.png'
import src_cnt from '../../../public/portfolio_cnt.png'

export default function PortfolioContainer_01() {
    const ProjectText = {
        SFI: `My responsibility on this project was to engineer a bespoke CMS, and relevant UI, that allowed the company to keep their current content creation workflow, and integrated within their existing website which was created using Polymer Web Components. 
        \nThis project required working with Javascript, OAuth, Firebase, and Polymer Web Components. This was a fun challenge that took a lot of work to map out the website event system, and required a solid knowledge of async Javascript`,
        ellafund: `I was hired to build a Web Extension allowing users to inject marketing scripts while browsing to generate addvertisement revenue for their charity of choice. (JS, and Web Extensions API).
        \nI worked with the project's designer to implement the mockups he created in InDesign. I built all of the code which required a lot of async javascript and some heavy research in to the Web Extensins API `,
        tsampi: `I was invited to be a collaborator on the Tsampi Project which was started by my long time friend , and co-developer Tim Watts. The Tsampi project is a federated permissioned blockchain with the goal of creating federated server protocol
        \nMy contribution was creating a server executable script using NodeJS that implemented a cryptographic proof-of-work algorithm.`,
        cnt: `I was hired for work on the CoatandTails e-commerce site to customise purchase options that the backend wouldn't accomodate, and to allow better integration with their marketing campaign.
        \nI solved the purchase options task by using the Liquid framework's filters and iteration to generate the neccessary templates. I had to make a way for the cart to track the marketing url and store that in that site's database by using vanilla JS for the front-end, and PHP & SQL for the back-end. `
    }
    return (
        <section className="page-section bg-primary">

            <h2 className="text-white mt-0 text-center mb-4">Portfolio</h2>

            <div class="container">
                <div class="row">

                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div class="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_sfi}></img>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div className="card-body">
                                    <h4 className="card-title">Suplhur Fuel Injection</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.SFI}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div class="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_ellafund}></img>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div className="card-body">
                                    <h4 className="card-title">Ellafund</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.ellafund}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div class="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_tsampi}></img>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div className="card-body">
                                <h4 className="card-title">Tsampi</h4>
                                    <p className="card-text" style={{whiteSpace:"pre-wrap"}}>{ProjectText.tsampi}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <div className="row no-gutters">
                            <div class="col-lg-4 col-md-12 my-auto mx-auto">
                                <img className="card-img" src={src_cnt}></img>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div className="card-body">
                                <h4 className="card-title">Coat and Tails</h4>
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
