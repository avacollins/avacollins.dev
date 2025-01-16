import React from "react";

export const BackgroundImage = () => {

    const style = {
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/work/expedia/expediaVAC.png',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'contain'
    }
    return (
        <div style={style}></div>
    )
}