'use client'

import Image from "next/image";
import styles from "./page.module.css"; 
import { useRouter } from 'next/navigation'

export default function Home() {
  const blue = [styles.button, styles.buttonblue].join(" ");
  const black = [styles.button, styles.buttonblack].join(" ");
  const router = useRouter();
  
  function openWork() {
    router.push('/work');
  }

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.selfie} 
              role="img" 
              aria-label="Porttrait of a woman with medium length hair slightly smiling, painted in water color style with bright colors.">
          <div className={styles.selfiebg}></div>
        </div>
        <div className={styles.logo}>
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
          Innovative Software Engineer with over a decade of experience creating applications for retail, education and games. Skilled in frontend architecture, rapid development, iterative scaling and continuous delivery. Invested in accessibility, user experience, developer operations, documentation and community building.
          </p>
        </div>
        <div className={styles.buttongroup}>
          <input type="button" className={blue} value="Resume" onClick={openWork} />
          <input type="button" className={black} value="Email" />
        </div>
      </section>
    </main>
  );
}
