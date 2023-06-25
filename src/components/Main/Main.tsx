import { Breadcrumb } from '../Breadcrumb';
import { Title } from '../Title';
import { Table } from '../Table';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
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
