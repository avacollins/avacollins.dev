import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  var blue = [styles.button, styles.buttonblue].join(" ");
  var black = [styles.button, styles.buttonblack].join(" ");
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.selfie}>
          <div className={styles.selfiebg}></div>
        </div>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" fill />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.abouttitle}>
          <div className={styles.aboutsvg}></div>
        </div>
        <div className={styles.abouttext}>
          <p>
          Software engineer with more than seven years 
          of full-stack and over a decade of frontend experience. 
          Passionate about
          rapid devlopment, iterative scaling, 
          and continuous deployment. Proficient in 
          project management, user experience, accessibility, 
          developer operations, documentation, team and community building.
          </p>
        </div>
        <div className={styles.buttongroup}>
          <input type="button" className={blue} value="Resume" />
          <input type="button" className={black} value="Portfolio" />
        </div>
      </section>
    </main>
  );
}
