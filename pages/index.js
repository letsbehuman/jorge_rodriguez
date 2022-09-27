import Head from 'next/head';
import { Fragment } from 'react';
import HomePage from '../components/home/index';
import SocialBar from '../components/socialBar';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import React from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Jorge Rodriguez | Front-End Developer</title>
      </Head>

      <Navbar />
      {/* <SocialBar /> */}
      <HomePage />

      <Footer />
    </Fragment>
  );
}
