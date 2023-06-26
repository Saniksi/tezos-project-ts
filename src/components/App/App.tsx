import React, { useContext, useState } from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { ThemeContext } from '../context/ThemeContext';

import './App.css';
import '../../scss/container.scss';
import '../../scss/reset.scss';
import '../../scss/block.scss';

function App() {
  const [theme, setTheme] = useState('light');
  console.log('theme==', theme);

  const handlerToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header handlerToggleTheme={handlerToggleTheme} />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export { App };
