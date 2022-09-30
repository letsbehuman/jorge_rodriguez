import Head from 'next/head';
import React, { Fragment } from 'react';
import SocialBar from '../components/socialBar';
import Footer from '../components/footer';
import Landing from '../components/Landing';
import Navbar from '../components/navbar';
import Collaboration from '../components/Collaboration';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jorge Rodriguez | Front-End Developer</title>
      </Head>
      <Navbar />
      <Landing />
      <Collaboration />
      <Projects />
      <About />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
