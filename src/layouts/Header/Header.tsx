import type { FC } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Logo from '@/components/Logo/Logo';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className={clsx(styles['header__inner'], styles['container'])}>
        <Logo loading="eager" />
      </div>
    </header>
  );
};

export default Header;
