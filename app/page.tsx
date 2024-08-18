"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { playlist, worklist } from "./constants";

import styles from "./page.module.css";

export default function Home() {
  const blue = [styles.button, styles.buttonblue].join(" ");
  const black = [styles.button, styles.buttonblack].join(" ");
  const router = useRouter();

  function openWork() {
    router.push("/work");
  }

  type Item = {
    title?: string;
    name: string;
    description: string;
    image: string;
    link: string | URL;
  };

  const firstcard = [styles.card, styles.firstcard].join(" ");

  const FirstItem = ({ title, name, description, image, link }: Item) => {
    return (
      <div className={styles.item}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <Link href={link}>
          <div className={firstcard}>
            <div className={styles.logo}>
              <Image
                src={image}
                alt={description}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <h2>{name}</h2>
          </div>
        </Link>
      </div>
    );
  };

  const Item = ({ name, description, image, link }: Item) => {
    return (
      <div className={styles.item}>
        <Link href={link}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image
                src={image}
                alt={description}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <h2>{name}</h2>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <React.Fragment>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div
            className={styles.selfie}
            role="img"
            aria-label="Porttrait of a woman with medium length hair slightly smiling, painted in water color style with bright colors."
          >
            <div className={styles.selfiebg}></div>
          </div>
          <div className={styles.hero}>
            <Image src="/logo.svg" alt="ava collins dot dev" fill />
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.abouttitle}>
            <div className={styles.aboutsvg}>
              <h1 className="sr-only">About</h1>
            </div>
          </div>
          <div className={styles.abouttext}>
            <p>
              Innovative Software Engineer with over a decade of experience
              creating applications for retail, education and games. Skilled in
              frontend architecture, rapid development, iterative scaling,
              continuous delivery, accessibility, user experience, developer
              operations, documentation and community building.
            </p>
          </div>
          <div className={styles.buttongroup}>
            <input
              type="button"
              className={blue}
              value="Resume"
              onClick={openWork}
            />
            <input type="button" className={black} value="Email" />
          </div>
        </section>
      </main>
      <section className={styles.work}>
        <div className={styles.grid}>
          <FirstItem
            title={worklist[0].title}
            name={worklist[0].name}
            description={worklist[0].description}
            image={worklist[0].image}
            link={worklist[0].link}
          />
          {worklist.slice(1).map((work) => (
            <Item
              name={work.name}
              description={work.description}
              image={work.image}
              link={work.link}
              key={work.title}
            />
          ))}
        </div>
      </section>

      <section className={styles.play}>
        <div className={styles.grid}>
          <FirstItem
            title={playlist[0].title}
            name={playlist[0].name}
            description={playlist[0].description}
            image={playlist[0].image}
            link={playlist[0].link}
          />
          {playlist.slice(1).map((play) => (
            <Item
              name={play.name}
              description={play.description}
              image={play.image}
              link={play.link}
              key={play.title}
            />
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <h3>
          “Trying to define yourself is like trying to bite your own teeth.”-
          Alan Watts
        </h3>
        <div className={styles.ouroboros}>
          <Image
            src="/ouroboros.png"
            alt="An image of a serpent eating it's own tail, also called the Ouroboros."
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
      </footer>
    </React.Fragment>
  );
}
