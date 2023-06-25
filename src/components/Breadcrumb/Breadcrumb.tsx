import { BreadcrumbProps } from '../types/BreadcrumbProps';
import styles from './Breadcrumb.module.scss';


const Breadcrumb = (props: BreadcrumbProps) => {
  const { text = '' } = props;

  return <div className={styles.breadcrumb}>{text}</div>;
};

export { Breadcrumb };
