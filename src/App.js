import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Chef from './components/Chef/Chef';
import Book from './components/Book/Book';
import Menu from './components/Menu/Menu';
import Events from './components/EventsComp/Events';
import Blog from './components/Blog/Blog';

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
      <section id="contact"></section>
    </Fragment>
  );
}

export default App;
