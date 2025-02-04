import React from "react";

export interface BackgroundProps {
    /** url - background image url */
    url: string;
}
export const BackgroundImage = ({ url }: BackgroundProps) => {
    const style = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
        marginBottom: '1rem'
    }
    return (
        <div style={style}></div>
    )
}