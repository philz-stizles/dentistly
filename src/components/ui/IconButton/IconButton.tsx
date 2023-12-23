import { ButtonHTMLAttributes } from 'react';
import classes from './IconButton.module.scss';
import { IconType } from 'react-icons';
import { Size, Variant } from '../../../types';

const SIZE: { [key: string]: number } = {
  sm: 18,
  md: 20,
  lg: 32,
  xl: 42,
};

const VARIANT: { [key: string]: string } = {
  primary: classes.primary,
  secondary: classes.secondary,
  outlined: classes.outlined,
  white: classes.white,
  flat: '',
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
  size?: Size;
  variant?: Variant;
};

const Button = ({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: Props) => {
  let classNames = classes['icon-button'];
  classNames += ` ${VARIANT[variant]}`;
  classNames += ` ${SIZE[size]}`;
  classNames += `${className ? ` ${className}` : ''}`;

  return (
    <button className={classNames} {...rest}>
      <Icon size={SIZE[size]} />
    </button>
  );
};

export default Button;
