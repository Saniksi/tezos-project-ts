import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './Breadcrumb.module.scss';

const isLogin = true;

const Breadcrumb = () => {
  const { theme } = useContext(ThemeContext);

  const location = useLocation();
  const breadcrumbPaths = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  const breadcrumbClass = ({ isActive }: any) => {
    return isActive
      ? `${styles.breadcrumb} ${styles[theme]} ${styles.active}`
      : `${styles.breadcrumb} ${styles[theme]}`;
  };

  let currentLink = '';
  const breadcrumbsElements = breadcrumbPaths.map((crumb) => {
    currentLink += '/' + crumb;

    return (
      <div key={crumb}>
        <span
          className={`icons-social-arrow ${styles['icons-social-arrow']} ${styles[theme]}`}
        ></span>
        <NavLink className={breadcrumbClass} to={currentLink} end>
          {crumb}
        </NavLink>
      </div>
    );
  });

  return (
    <div className={styles.breadcrumbs}>
      {isLogin && (
        <NavLink className={breadcrumbClass} to="/" end>
          Home
        </NavLink>
      )}
      {breadcrumbsElements}
    </div>
  );
};

export { Breadcrumb };
