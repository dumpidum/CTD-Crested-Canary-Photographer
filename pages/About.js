import React from "react";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Sidebar from "../components/sidebar/Sidebar";
import AboutFull from "./AboutFull";
import styles from '../styles/About.module.css';
export const siteTitle = "Photographer App";

const About = ({ home, children }) => {

    return (
        <>
            <Head>
                {/* <link rel='icon' href='/favicon.png' /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" integrity="sha512-Oy+sz5W86PK0ZIkawrG0iv7XwWhYecM3exvUtMKNJMekGFJtVAhibhRPTpmyTj8+lJCkmWfnpxKgT2OopquBHA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta
                    name='description'
                    content='Collaborative project by Code the Dream students to build a photographer web app using Next.js and Firebase authentication and Cloud Firestore'
                />
                <meta
                    name='authors'
                    content='Ignat Babenko, Kelvin Kirui, Fabian Aparicio, Andrew Shapiro'
                />
                <meta name='title' content={siteTitle} />
            </Head>
            <Header isHome={home} />
            <main>
                <div className={styles.parent}>
                    <Sidebar />
                    <AboutFull />
                </div>
            </main>
            <Footer />

        </>
    );
}

export default About;