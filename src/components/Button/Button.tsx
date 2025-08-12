import type { ElementType, FC } from 'react';
import styles from './Button.module.scss';

export interface propsButton {
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<propsButton> = ({ href, children, onClick }) => {
  const Component: ElementType = href !== undefined ? 'a' : 'button';

  return (
    <Component className={styles.button} href={href} onClick={onClick}>
      {' '}
      {children}
    </Component>
  );
};

export default Button;
