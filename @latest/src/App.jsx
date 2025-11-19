import React from 'react';
import './index.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/footer';

import Hero from './components/sections/hero';
import Features from './components/sections/features';
import Menu from './components/sections/menu';
import Testimonials from './components/sections/testimonials';
import About from './components/sections/about';

import Button from './components/common/button';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Features />
      <Testimonials />
      <About />
      <Footer />
      <Button />
    </>
  );
}

export default App;