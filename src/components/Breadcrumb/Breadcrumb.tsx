import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { BreadcrumbProps } from '../types/BreadcrumbProps';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = (props: BreadcrumbProps) => {
  const { text = '' } = props;
  const theme = useContext(ThemeContext);

  return <div className={`${styles.breadcrumb} ${styles[theme]}`}>{text}</div>;
};

export { Breadcrumb };
