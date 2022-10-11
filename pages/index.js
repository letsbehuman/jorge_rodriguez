import Head from 'next/head';
import React, { Fragment } from 'react';
import Footer from '../components/footer';
import Landing from '../components/landing';
import Navbar from '../components/navbar';
import Collaboration from '../components/collaboration';
import About from '../components/about';
import Contact from '../components/contact';
import Projects from '../components/projects';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{'Jorge Rodríguez | Front-End Developer'}</title>
      </Head>
      <Navbar />
      <Landing />
      <Collaboration />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
}
