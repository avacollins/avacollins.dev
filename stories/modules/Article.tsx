import React from "react";

import "./article.css"

export interface Article {
    /** */
}

export const Article = () => {
    return (
        <article className="article">
            <div className="text">
                <h2>Title</h2>
                <p>The Conversational Experiences Platform manages the white
                    label Virtual Agent Chat AI integrations for all Expedia brands.
                    The VAC (Virtual Agent Chat) by default is able to manage
                    common customer requests as well as answer internal questions
                    for human agents during a support session. Capabilities could be
                    expanded and customized per brand utilizing internal tools and
                    configurations.

                    The majority of my time was spent using enterprise APM tools to
                    identify and trace requests through the entire ecosystem in
                    order to identify causes for performance anomalies uncovered
                    by telemetry logs of various services and network gateways. In
                    conclusion to any investigation I would create documentation
                    with metrics reports supporting remediation recommendations
                    to be handed off to various teams across multiple timezones to
                    implement a fix in their brand stack.</p>

            </div>
            <div className="images">
                <div className="imagecontainer"></div>
            </div>
        </article>)
}