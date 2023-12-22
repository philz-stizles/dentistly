import { HTMLAttributes } from 'react';
import classes from './Avatar.module.scss';
import { Size } from '../../../types';

const SIZE: { [key: string]: string } = {
  sm: classes.sm,
  md: classes.md,
  lg: classes.lg,
  xl: classes.xl,
};

type Props = HTMLAttributes<HTMLDivElement> & {
  imageUrl: string;
  size?: Size;
};

const Avatar = ({ imageUrl, size = 'sm', className }: Props) => {
  let classNames = classes.avatar;
  classNames += ` ${SIZE[size]}`;
  classNames += className ? ` ${className}` : '';

  return (
    <div className={classNames}>
      <img src={imageUrl} />
    </div>
  );
};

export default Avatar;
