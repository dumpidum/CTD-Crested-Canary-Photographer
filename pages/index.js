import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { siteTitle } from "../components/Layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const images = [
  '/images/1-_DSC9880.jpg',
  '/images/1-_DSC9924.jpg',
  '/images/2-_DSC9898.jpg',
  '/images/2-_DSC9936.jpg',
  '/images/3-_DSC9908.jpg',
  '/images/3-_DSC9948.jpg',
  '/images/4-_DSC0012.jpg'
];


const Home = () => (

  <>
    < Head >
      <title>{siteTitle}</title>
    </Head >
    <div className={styles.container}>
      <p>When it comes to a photo project, the decisions you make at the beginning of the process will affect the entirety of the project. As a premier photography studio, we work with your organization to uncover the best, most cost-effective solution for your photography needs and ensure that your project runs as smoothly as possible. The last thing we want is for you to needlessly spend extra money because of changes made in the final hour. Our experts can guide you through the photography process and deliver the visual assets you need for your audience.</p>
      <Zoom scale={0.4}>
        {
          images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
        }
      </Zoom>
    </div>
  </>

);

export default Home;