import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className={styles.container}>

    </div>
  </Layout>
);

export default Home;