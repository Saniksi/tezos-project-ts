import { TitleProps } from '../types/TitleProps';

import styles from './Title.module.scss';

const Title = (props: TitleProps) => {
  const { text = '' } = props;

  return <h2 className={styles.title}>{text}</h2>;
};

export { Title };
