import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio de Eben</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          <div>
            <h2>Hey there</h2>
            <h1>My name is Ebenezer</h1>
            <h2>And i like build stuffs</h2>
          </div>
          A soon-to-be computer science graduate, I am an aspiring (and broke)
          software developer from France with a particular interest in building
          things for the web. Currently in my final year, I am looking for
          internship opportunities, though I do freelance from time to time.
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <Image
              src="/about.png"
              alt=""
              width={250}
              height={200}
            />
            <h2>About &rarr;</h2>
          </a>
          <a href="" className={styles.card}>
            <Image
              src="/project.png"
              alt=""
              width={250}
              height={200}
            />
            <h2>Personal Project &rarr;</h2>
          </a>
          <a href="" className={styles.card}>
            <Image
              src="/skills.png"
              alt="skills"
              width={250}
              height={200}
            />
            <h2>Skills &rarr;</h2>
          </a>
          <a href="h" className={styles.card}>
            <Image
              src="/contact.png"
              alt=""
              width={250}
              height={200}
            />
            <h2>Contact &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
