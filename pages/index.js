import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Login from "./login";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nucleo Calls</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">
        <a>Loginn</a>
      </Link>
    </div>
  );
}
