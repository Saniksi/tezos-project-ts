import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { Breadcrumb } from '../Breadcrumb';
import { Title } from '../Title';
import { Table } from '../Table';

import styles from './Main.module.scss';

const Main = () => {
  const theme = useContext(ThemeContext);
  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className="container">
        <div className={styles.breadcrumbs}>
          <Breadcrumb text="Home" />
          <span
            className={`icons-social-arrow ${styles['icons-social-arrow']}`}
          ></span>
          <Breadcrumb text="Blocks" />
        </div>
        <Title text="Blocks" />
        <Table />
      </div>
    </main>
  );
};

export { Main };
