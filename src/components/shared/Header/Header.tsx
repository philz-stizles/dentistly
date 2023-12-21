import { HiMenuAlt3 } from 'react-icons/hi';
import { Button, IconButton, Logo } from '../../ui';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.menu}>
        <Button variant="outlined" label="Menu" />
        <IconButton variant="outlined" icon={HiMenuAlt3} />
      </div>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.auth}>
        <Button variant="outlined" label="Log In" />
        <Button label="Sign Up" />
      </div>
    </header>
  );
};

export default Header;
