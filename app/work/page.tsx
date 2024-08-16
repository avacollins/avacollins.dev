import styles from "./page.module.css";

const WorkPage = () => {
    const halfcard = [styles.card, styles.threequartercard].join(" ");
    return (  
        <main className={styles.main}>
           <div className={styles.workgrid}>
            <div className={styles.workitem}>
                <div className={styles.worktitle}>
                <h1>WORK</h1>
                </div>
                <div className={halfcard}>
                    <h2>Expedia</h2>
                </div>
            </div>
            <div className={styles.workitem}>
                <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
            <div className={styles.workitem}>
            <div className={styles.card}>
                    <h2>Porch</h2>
                </div>
            </div>
           </div>
        </main>
    );
}
 
export default WorkPage;
