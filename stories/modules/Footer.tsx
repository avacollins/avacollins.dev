import React from "react";
import Image from "next/image";
import "./footer.css"
import { BASE_URL } from '../constants'

export interface FooterProps {
    /** tagline - Line of text above footer image*/
    tagline?: string;
}

export const Footer = ({ tagline }: FooterProps) => {
    const footertext = tagline ? (
        <h3>
            {tagline}
        </h3>
    ) : (<span />)
    return (
        <footer className="footer">
            {footertext}
            <div className="ouroboros">
                <Image
                    src={`${BASE_URL}/ouroboros.png`}
                    alt="An image of a serpent eating it's own tail, also called the Ouroboros."
                    style={{ objectFit: "contain" }}
                    fill
                />
            </div>
        </footer>
    )
}