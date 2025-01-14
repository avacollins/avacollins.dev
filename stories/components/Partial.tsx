import React from "react";

import '../modules/grid.css'

export interface PartialProps {
    /** Add responsive class */
    isResponsive?: boolean;
}

export const Partial = ({ isResponsive }: PartialProps) => {
    const style = isResponsive ? ['partial', 'responsive'].join(' ') : 'partial'
    return (
        <div className={style}></div>
    )
}
