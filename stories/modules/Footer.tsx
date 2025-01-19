import React from "react";
import Image from "next/image";
import "./footer.css"

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
                    src="/ouroboros.png"
                    alt="An image of a serpent eating it's own tail, also called the Ouroboros."
                    style={{ objectFit: "contain" }}
                    fill
                />
            </div>
        </footer>
    )
}