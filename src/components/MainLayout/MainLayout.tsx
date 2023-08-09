import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={styles.wrapper}>
      <header className="header">
        <Header />
      </header>
      <main className={`${styles.main} ${styles[theme]}`}>
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
