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

const Advantages = ({ advantages }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes.advantages}
    >
      <div className={classes.container}>
        <Footer />
      </div>
      <Heading size="xl" className={classes.heading} title="Our Advantages" />
      <ul className={classes['advantage-list']}>
        {advantages.map((advantage, i) => (
          <AdvantageCard
            index={i}
            className={classes['advantage-card']}
            key={advantage.id}
            advantage={advantage}
          />
        ))}
      </ul>
      <button className={classes.scroll}>
        <GoArrowDown size={24} />
      </button>
    </motion.section>
  );
};

export default Advantages;
