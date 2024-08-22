"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
  const blue = [styles.button, styles.buttonblue].join(" ");
  const black = [styles.button, styles.buttonblack].join(" ");
  const router = useRouter();

  function navResume() {
    router.push("/resume");
  }

  function connect() {
    window.location.href = "https://www.linkedin.com/in/avacollins-dev/";
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
              Innovative Web Engineer with a long history of creating
              interactive experiences for retail, education and games. Skilled
              in frontend architecture, rapid prototyping to MVP, accessibility,
              user experience, developer operations, documentation and user
              support.
            </p>
          </div>
          <div className={styles.buttongroup}>
            <input
              type="button"
              className={blue}
              value="Resume"
              onClick={navResume}
            />
            <input
              type="button"
              className={black}
              value="Connect"
              onClick={connect}
            />
          </div>
        </section>
      </main>

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
