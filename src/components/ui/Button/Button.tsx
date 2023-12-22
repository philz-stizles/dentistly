import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classes from './Button.module.scss';
import { IconType } from 'react-icons';
import { Size, Variant } from '../../../types';

const SIZE: { [key: string]: string } = {
  sm: classes.sm,
  md: classes.md,
  lg: classes.lg,
  xl: classes.xl,
};

const VARIANT: { [key: string]: string } = {
  primary: classes.primary,
  secondary: classes.secondary,
  outlined: classes.outlined,
  white: classes.white,
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
