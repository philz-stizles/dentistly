import { PiToothLight } from 'react-icons/pi';
import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <h2 className={classes.logo}>
      <span className={classes.icon}>
        <PiToothLight />
      </span>
      <span className={classes.brand}>DENTYTECH</span>
    </h2>
  );
};

export default Logo;
