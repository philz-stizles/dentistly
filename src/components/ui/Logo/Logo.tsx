// import { useState } from 'react';
import { PiToothLight } from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Logo.module.scss';

const Logo = () => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.h2 className={classes.logo}>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        // transition={{ duration: 0.5 }}
        className={classes.icon}
      >
        <PiToothLight />
      </motion.span>
      <AnimatePresence>
        <motion.span
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ display: 'none' }}
          animate={{ display: 'block' }}
        >
          DENTYTECH
        </motion.span>
      </AnimatePresence>
    </motion.h2>
  );
};

export default Logo;
