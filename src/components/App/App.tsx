import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

import './App.css';
import '../../scss/container.scss';
import '../../scss/reset.scss';
import '../../scss/block-border.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { App };
