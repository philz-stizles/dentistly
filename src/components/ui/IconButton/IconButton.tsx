import { ButtonHTMLAttributes } from 'react';
import classes from './IconButton.module.scss';
import { IconType } from 'react-icons';
import { Size, Variant } from '../../../types';

const SIZE: { [key: string]: string } = {
  sm: '',
  md: '',
  lg: '',
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
  size?: Size;
  variant?: Variant;
};

const Button = ({
  icon: Icon,
  variant = 'primary',
  size = 'sm',
  ...rest
}: Props) => {
  const VARIANT: { [key: string]: string } = {
    primary: classes.primary,
    secondary: classes.secondary,
    outlined: classes.outlined,
    white: classes.white,
    flat: '',
  };

  const classNames = `${classes['icon-button']} ${VARIANT[variant]} ${SIZE[size]}`;

  const iconSize = size === 'sm' ? 20 : 32;

  return (
    <button className={classNames} {...rest}>
      <Icon size={iconSize} />
    </button>
  );
};

export default Button;
