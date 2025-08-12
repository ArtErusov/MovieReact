import type { FC } from 'react';
import styles from './Logo.module.scss';
import clsx from 'clsx';

const title: string = 'Home';

export interface propsLogo {
  loading?: 'eager' | 'lazy';
  className?: string;
}

const Logo: FC<propsLogo> = ({ loading = 'lazy', className }) => {
  return (
    <a className={clsx(styles['logo'], className)} href="/" title={title} aria-label={title}>
      <img
        className={styles['logo__image']}
        src="/Logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      ></img>
    </a>
  );
};

export default Logo;
