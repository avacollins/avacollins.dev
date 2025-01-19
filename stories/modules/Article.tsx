import React, { ReactNode } from "react";

import "./article.css"

export interface ArticleProps {
    /** alignment - left/right */
    align?: string;
    /** title - Article title */
    title: string;
    /** text - Article text paragraphs */
    text: string[];
    /** image - children that contain images, carousels, videos to accompany the text */
    children: ReactNode;
    /** name - string id for page anchor */
    name: string;
}

export const Article = ({ align = 'left', title, text, children, name }: ArticleProps) => {
    const style = align === 'left' ? 'article' : ['article', align].join(' ')
    const content = text.map((t) => (<p key={t.substring(2, 10).replace(' ', '')}>{t}</p>))
    return (
        <article className={style} id={name}>
            <div className="text">
                <h2>{title}</h2>
                {content}
            </div>
            <div className="images">
                {children}
            </div>
        </article>)
}