import { GoArrowDown } from 'react-icons/go';
import { motion } from 'framer-motion';
import { Footer } from '../../../../components/shared';
import { Heading } from '../../../../components/ui';
import { Advantage } from '../../../../types';
import classes from './Advantages.module.scss';
import { AdvantageCard } from '../../../../components/cards';

type Props = {
  advantages: Advantage[];
};

const MotionHeading = motion(Heading);
const MotionFooter = motion(Footer);

const Advantages = ({ advantages }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes.advantages}
    >
      <div className={classes.container}>
        <MotionFooter
          transition={{ delay: 0.5, duration: 0.5 }}
          initial={{ opacity: 0, y: '50%' }}
          whileInView={{ opacity: 1, y: '-50%' }}
        />
      </div>
      <MotionHeading
        transition={{ delay: 0.5, duration: 0.5 }}
        initial={{ opacity: 0, y: '50%' }}
        whileInView={{ opacity: 1, y: '-50%' }}
        size="xl"
        className={classes.heading}
        title="Our Advantages"
      />
      <motion.ul
        transition={{ delay: 0.5, duration: 0.5 }}
        initial={{ opacity: 0, y: '50%', x: '-50%' }}
        whileInView={{ opacity: 1, y: '-50%', x: '-50%' }}
        className={classes['advantage-list']}
      >
        {advantages.map((advantage, i) => (
          <AdvantageCard
            index={i}
            className={classes['advantage-card']}
            key={advantage.id}
            advantage={advantage}
          />
        ))}
      </motion.ul>
      <button className={classes.scroll}>
        <GoArrowDown size={28} />
      </button>
    </motion.section>
  );
};

export default Advantages;
