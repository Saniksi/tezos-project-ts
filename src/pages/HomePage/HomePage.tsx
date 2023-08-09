import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './HomePage.module.scss';

export function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h2 className={`${styles.title} ${styles[theme]}`}>HomePage</h2>
    </>
  );
}
