import React from 'react'

const ContactSection_01 = () => {
    return (
        <React.Fragment>
            <section className="page-sectionFull" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Let's Get In Touch!</h2>
                            <hr className="divider my-4"/>
                            <p className="text-muted mb-5">Ready to team up on your next project? Email me, and let's start the conversation</p>
                        </div>
                    </div>
                    <div className="mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a className="d-block" href="mailto:glowyrm.prime@gmail.com">glowyrm.prime@gmail.com</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactSection_01
