import { Footer } from '../../../../components/shared';
import { Heading } from '../../../../components/ui';
import classes from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={classes['call-to-action']}>
      <Heading
        className={classes.heading}
        size="md"
        title="Revolutionizing Dental Care With Technology"
      />
      <Footer />
    </section>
  );
};

export default CallToAction;
