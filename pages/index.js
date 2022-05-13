import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home = () => (
  <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className={styles.container}>
<Link href="/signup">Sign Up</Link>
    </div>
  </>
);

export default Home;