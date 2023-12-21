import {
  PiFacebookLogo,
  PiInstagramLogoLight,
  PiYoutubeLogoLight,
} from 'react-icons/pi';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Your Smile, Our Passion</p>
      <div className={classes.right}>
        <ul className={classes.social}>
          <li>
            <PiInstagramLogoLight size={18} />
          </li>
          <li>
            <PiYoutubeLogoLight size={18} />
          </li>
          <li>
            <PiFacebookLogo size={18} />
          </li>
        </ul>
        <p>Best Startup of 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
