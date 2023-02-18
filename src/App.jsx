import React, { Component } from 'react'
import styles from './styles';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Client, CTA, Footer } from './Components';

const App = () => (
  <div className='nav w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-slate-800 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal /> 
        <Testimonials /> 
        <Client /> 
        <CTA /> 
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App