import React from "react"
import { Selfie } from "../components/Selfie"
import { Logo } from "../components/Logo"
import { Button } from "../components/Button"

import "./hero.css"

export interface HeroProps {
    /** Text for the About section of the Hero */
    abouttext: string;
    /** Navigate to Resume click handler */
    resume: () => void;
    /** Navigate to Connect click handler */
    connect: () => void;
}

export const Hero = ({ abouttext, resume, connect }: HeroProps) => (
    <React.Fragment>
        <section className="intro">
            <Selfie />
            <div className="flair">
                <Logo />
            </div>
        </section>
        <section className="about">
            <div className="abouttitle">
                <div className="aboutsvg">
                    <h1 className="sr-only">About</h1>
                </div>
            </div>
            <div className="abouttext">
                <p>{abouttext}</p>
            </div>
            <div className="buttongroup">
                <Button label="Resume" onClick={resume} primary />
                <Button label="Connect" onClick={connect} />
            </div>
        </section>
    </React.Fragment>
)    
