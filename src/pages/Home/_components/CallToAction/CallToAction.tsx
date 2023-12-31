import { PiPlus, PiToothDuotone, PiToothLight } from 'react-icons/pi';
import { IoMdFlower } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Footer } from '../../../../components/shared';
import { Avatar, Button, Heading, IconButton } from '../../../../components/ui';
import classes from './CallToAction.module.scss';
import { IoPlaySharp } from 'react-icons/io5';

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes['call-to-action']}
    >
      <motion.div className={classes.heading}>
        <div className={classes.revolutionizing}>
          <Heading size="lg" title="Revolutionizing" />
          <div>
            <ul>
              <li>
                <IconButton variant="secondary" icon={PiToothDuotone} />
              </li>
              <li>
                <IconButton variant="secondary" icon={PiToothDuotone} />
              </li>
              <li>
                <IconButton variant="secondary" icon={PiToothDuotone} />
              </li>
            </ul>
            <p>Modern Solutions, Timeless Smiles</p>
          </div>
        </div>
        <div className={classes['dental-care']}>
          <div className={classes.dental}>
            <Button size="lg" variant="secondary" label="ASSISTANCE" />
            <IconButton size="lg" icon={PiToothLight} />
          </div>
          <Heading size="lg" title="Dental" />
          <div className={classes.care}>
            <Avatar
              className={classes.avatar}
              size="xl"
              imageUrl="https://i.pravatar.cc/100?img=45"
            />
            <div className={classes.shape}>
              <IoMdFlower size={48} />
            </div>
          </div>
          <Heading size="lg" title="Care" />
        </div>
        <div className={classes['with-technology']}>
          <Heading size="lg" title="With Technology" />
          <div className={classes.people}>
            <ul>
              <li>
                <Avatar size="sm" imageUrl="https://i.pravatar.cc/150?img=51" />
              </li>
              <li>
                <Avatar size="sm" imageUrl="https://i.pravatar.cc/150?img=52" />
              </li>
              <li>
                <Avatar size="sm" imageUrl="https://i.pravatar.cc/150?img=53" />
              </li>
              <li>
                <Avatar size="sm" imageUrl="https://i.pravatar.cc/150?img=54" />
              </li>
            </ul>
            <IconButton size="sm" variant="secondary" icon={PiPlus} />
          </div>
        </div>
        <div className={classes['get-started']}>Get Started</div>
        <div className={classes.video}>
          <img src="/images/fauxels-md.jpg" />
          <IconButton
            className={classes['video-icon']}
            variant="secondary"
            size='sm'
            icon={IoPlaySharp}
          />
        </div>
      </motion.div>

      <Footer />
    </motion.section>
  );
};

export default CallToAction;
