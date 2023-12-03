import React from "react";
import './ParallaxTiltStyle.css';
import './vanilla-tilt';

const project = ()=>{
    return(
        <div className="hero">
        <div className="outer" data-tilt data-tilt-glare data-tilt-max-glare="0.8" data-tilt-scale="1.1">
            <div className="inner">
                <h1>
                    Arnav Kulshrestha
                </h1>
                <hr/>
                <p>
                    Full Stack developer
                </p>
            </div>
        </div>
    </div>
    );
}

export default project;