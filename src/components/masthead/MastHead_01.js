import React from 'react'

const MastHead_01 = () => {
    return (
        <div className="mastheadContainer">
            <header className={"masthead"}>
                <div className={"container h-100"}>
                    <div className={"row h-100 align-items-center justify-content-center text-center"}>
                        <div className={"col-lg-10 align-self-end"}>
                            <h1 className={"font-weight-bold text-white-75"}>Hello, I'm <span className={""}>Brian Randall</span>, and</h1>
                            <h1 className={"font-weight-bold text-white-75"}>I am a Front-End Developer.</h1>
                            <hr className={"divider my-4"}/>
                        </div>
                        <div className={"col-lg-8 align-self-baseline"}>
                            <p className={"text-white-75 font-weight-light mb-5"}>Check out my work product.</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MastHead_01
