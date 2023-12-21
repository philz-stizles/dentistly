import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classes from './Button.module.scss';
import { IconType } from 'react-icons';
import { Size, Variant } from '../../../types';

const SIZE: { [key: string]: string } = {
  sm: '',
  md: '',
  lg: ''
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: IconType;
  position?: 'left' | 'right';
  size?: Size;
  variant?: Variant;
};

const Button = ({
  children,
  icon: Icon,
  position = 'left',
  size = 'md',
  variant = 'primary',
  label,
  ...rest
}: PropsWithChildren<Props>) => {
  const VARIANT: { [key: string]: string } = {
    primary: classes.primary,
    outlined: classes.outlined,
    white: classes.white,
  };

  const classNames = `${classes.button} ${VARIANT[variant]} ${SIZE[size]}`;

  return (
    <button className={classNames} {...rest}>
      {position === 'left' && Icon && <Icon />}
      {label || children}
      {position === 'right' && Icon && <Icon />}
    </button>
  );
};

export default Button;
