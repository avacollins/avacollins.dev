import { title } from "process";
import styles from "./page.module.css";
import { link } from "fs";
import Image from "next/image";

const worklist = [
  {
    title: "Expedia",
    description:
      "Expedia is a travel company that provides travel services and products to customers.",
    image: "expedia.png",
    link: "/work/expedia",
  },
  {
    title: "Porch",
    description:
      "Porch is a home services platform that connects homeowners with quality home improvement professionals.",
    image: "porch.png",
    link: "/work/porch",
  },
  {
    title: "Sansar",
    description:
      "Sansar is a social virtual reality platform that allows users to create, share, and monetize their own VR experiences.",
    image: "sansar.png",
    link,
  },
  {
    title: "Apollo",
    description:
      "Apollo Education Group, Inc. is an American corporation that owns several for-profit educational institutions.",
    image: "apollo.png",
    link: "/work/apollo",
  },
  {
    title: "Amazon",
    description:
      "Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    image: "amazon.png",
    link: "/work/amazon",
  },
  {
    title: "Nordstrom",
    description: "Nordstrom is an American luxury department store chain.",
    image: "nordstrom.png",
    link,
  },
  {
    title: "Disney",
    description:
      "The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass media and entertainment conglomerate.",
    image: "disney.png",
    link: "/work/disney",
  },
  {
    title: "Real Networks",
    description:
      "RealNetworks is a provider of Internet streaming media delivery software and services based in Seattle, Washington, United States.",
    image: "realnetworks.png",
    link: "/work/realnetworks",
  },
];

const halfcard = [styles.card, styles.threequartercard].join(" ");

const FirstWorkItem = ({ title, description, image, link }) => {
  return (
    <div className={styles.workitem}>
      <div className={styles.worktitle}>
        <h1>WORK</h1>
      </div>
      <div className={halfcard}>
        <div className={styles.logo}>
          <Image
            src={`/work/${image}`}
            alt={description}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const WorkItem = ({ title, description, image, link }) => {
  return (
    <div className={styles.workitem}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image
            src={`/work/${image}`}
            alt={description}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const WorkPage = () => {
  return (
    <section className={styles.work}>
      <div className={styles.workgrid}>
        <FirstWorkItem
          title={worklist[0].title}
          description={worklist[0].description}
          image={worklist[0].image}
          link={worklist[0].link}
        />
        {worklist.slice(1).map((work) => (
          <WorkItem
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
            key={work.title}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkPage;
