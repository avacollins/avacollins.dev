"use client";
import React from "react";
import { Article } from "@/stories/modules/Article";
import { BackgroundImage } from "@/stories/components/BackgroundImage";
import { worklist, WorklistProp } from "../constants";
import { YouTubeEmbed } from "@/stories/components/YouTubeEmbed";

export default function Work() {
    const articles = worklist.map((w: WorklistProp, i: number) => {
        let alignment = i % 2 === 0 ? 'left' : 'right';
        let id = w.name.toLowerCase();

        let details = w.details.map((d, j) => {
            let uniq = `${id}-${i}${j}`
            let Content = d.media.map((m, i) => {
                if (m.type === 'image') {
                    return (<BackgroundImage url={m.url} key={m.url} />)
                } else {
                    return (<YouTubeEmbed url={m.url} title={m.title ? m.title : ''} key={m.url} />)
                }

            })
            return (<Article title={d.title} align={alignment} name={uniq} key={uniq}
                text={d.text}>
                {Content}
            </Article >)
        })

        return (
            <section id={id} key={id}>
                {details}
            </section>
        )
    })
    return (
        <main className="main" style={{ flexDirection: 'column' }}>
            {articles}
        </main >
    )
}