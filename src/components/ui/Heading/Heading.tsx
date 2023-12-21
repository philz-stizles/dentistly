import { Size } from '../../../types';
import classes from './Heading.module.scss';

const SIZE: { [key: string]: string } = {
  sm: classes.sm,
  md: classes.md,
  lg: classes.lg,
  xl: classes.xl,
};

type Props = {
  className?: string;
  title: string;
  size?: Size;
};

const Heading = ({ className, title, size = 'sm' }: Props) => {
  let classNames = classes.heading;
  classNames += ` ${SIZE[size]}`;
  classNames += className ? ` ${className}` : '';

  return (
    <div className={classNames}>
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
