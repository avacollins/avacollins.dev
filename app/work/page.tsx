import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import { playlist, worklist } from "../constants";

type Item = {
  title?: string;
  name: string;
  description: string;
  image: string;
  link: string | undefined;
};

const firstcard = [styles.card, styles.firstcard].join(" ");

const FirstItem = ({ title, name, description, image }: Item) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
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
    </div>
  );
};

const Item = ({ name, description, image }: Item) => {
  return (
    <div className={styles.item}>
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
    </div>
  );
};

const WorkPage = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default WorkPage;
