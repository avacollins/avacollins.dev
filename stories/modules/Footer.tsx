import React from "react";
import Image from "next/image";
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <h3>
                “Trying to define yourself is like trying to bite your own teeth.”-
                Alan Watts
            </h3>
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