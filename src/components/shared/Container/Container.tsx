import { PropsWithChildren } from 'react';
import classes from './Container.module.css';

type Props = {
  className?: string;
};

const Container = ({ children, className }: PropsWithChildren<Props>) => {
  const classNames = `${classes.container}${className ? ` ${className}` : ''}}`;
  return <div className={classNames}>{children}</div>;
};

export default Container;
