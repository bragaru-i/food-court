import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Chef from './components/Chef/Chef';
import Book from './components/Book/Book';
import Menu from './components/Menu/Menu';
import Events from './components/EventsComp/Events';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Fragment>
      <header id="header">
        <Header />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="chef">
        <Chef />
      </section>
      <section id="book">
        <Book />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <a href="mailto: bragaruion@gmail.com">Copyright by bragaruion@gmail.com </a>
      </section>
    </Fragment>
  );
}

export default App;
