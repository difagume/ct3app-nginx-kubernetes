import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.css";

export default function About() {

  return (
    <>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            About <span className={styles.pinkSpan}>page</span>
          </h1>
          <div className={styles.cardRow}>
            <Link
              className={styles.card}
              href="/"
            >
              <h3 className={styles.cardTitle}>Home →</h3>
              <div className={styles.cardText}>
                Go home
              </div>
            </Link>
          </div>
         </div>
      </main>
    </>
  );
}

