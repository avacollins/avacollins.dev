import React from "react"
import { Selfie } from "../components/Selfie"
import { Logo } from "../components/Logo"
import { Button } from "../components/Button"

import "./hero.css"

export interface HeroProps {
    /** Navigate to Resume click handler */
    resume: () => void;
    /** Navigate to Connect click handler */
    connect: () => void;
}

export const Hero = ({ resume, connect }: HeroProps) => (
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
                <p>Experienced Software Engineer with a strong background in frontend development, conversational AI, and mobile applications. Adept at modernizing legacy systems, architecting scalable applications, and enhancing user experiences across industries like e-commerce, education, and gaming.</p>
                <br />
                <p>Long history of adapting to new challenges, leading cross-functional teams, and driving innovation in fast-paced environments. Now seeking a role where I can make a lasting impact.</p>
                <ul>
                    <li><p><strong>Conversational AI & Chatbots:</strong> Developed custom intents and slot-based language models for Virtual Agent Chat at Expedia Group, improving automated customer interactions.</p></li>
                    <li><p><strong>Frontend & Full-Stack Development:</strong> Expertise in React, TypeScript, GraphQL, and Node.js, modernizing business applications and building component libraries.</p></li>
                    <li><p><strong>Mobile Development:</strong> Designed and implemented React Native applications with CI/CD pipelines, enabling rapid feature deployment and over-the-air updates.</p></li>
                    <li><p><strong>Scalability & Performance:</strong> Led cloud-based architecture initiatives using AWS, Docker, and Kubernetes, optimizing security and system observability.</p></li>
                    <li><p><strong>Mentorship & Leadership:</strong> Educated stakeholders on modern technologies, mentored developers, and provided technical guidance for seamless adoption of new systems.</p></li>
                </ul>
            </div>
            <div className="buttongroup">
                <Button label="GitHub" onClick={resume} primary />
                <Button label="LinkedIn" onClick={connect} />
            </div>
        </section>
    </React.Fragment>
)    
