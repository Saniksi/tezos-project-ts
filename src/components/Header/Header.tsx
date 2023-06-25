import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Button } from '../Button';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Menu />
          <Button text="Login" />
        </div>
      </div>
    </header>
  );
};

export { Header };
