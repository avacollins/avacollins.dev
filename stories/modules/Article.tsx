import React, { ReactNode } from "react";

import "./article.css"

export interface ArticleProps {
    /** alignment - left/right */
    align?: 'left' | 'right';
    /** title - Article title */
    title: string;
    /** text - Article text paragraphs */
    text: string[];
    /** image - children that contain images, carousels, videos to accompany the text */
    children: ReactNode;
}

export const Article = ({ align = 'left', title, text, children }: ArticleProps) => {
    const style = align === 'left' ? 'article' : ['article', align].join(' ')
    return (
        <article className={style}>
            <div className="text">
                <h2>{title}</h2>
                {text.map((t) => (<p>{t}</p>))}
            </div>
            <div className="images">
                {children}
            </div>
        </article>)
}