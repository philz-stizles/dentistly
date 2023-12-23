import { PiToothDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { Button, Heading, IconButton } from '../../../../components/ui';
import { Footer } from '../../../../components/shared';
import classes from './Services.module.scss';
import { Service } from '../../../../types';
import { ServiceCard } from '../../../../components/cards';

type Props = {
  services: Service[];
};

const MotionHeading = motion(Heading);
const MotionFooter = motion(Footer);

const Services = ({ services }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes.services}
    >
      <div className={classes.container}>
        <div className={classes.left}>
          <motion.ul
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={classes.icons}
          >
            <li>
              <IconButton variant="secondary" icon={PiToothDuotone} />
            </li>
            <li>
              <IconButton variant="secondary" icon={PiToothDuotone} />
            </li>
            <li>
              <IconButton variant="secondary" icon={PiToothDuotone} />
            </li>
          </motion.ul>

          <MotionHeading
            transition={{ delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={classes.heading}
            title="Explore Our Service, Make Your Smile Shine"
          />

          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={classes.actions}
          >
            <Button label="Get the App" />
            <Button variant="outlined" label="Meet the Team" />
          </motion.div>
          <MotionFooter
            transition={{ delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
        </div>
        <div>
          <ul className={classes['service-list']}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
