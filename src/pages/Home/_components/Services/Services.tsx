import { PiToothDuotone } from 'react-icons/pi';
import { Button, Heading, IconButton } from '../../../../components/ui';
import { Footer } from '../../../../components/shared';
import classes from './Services.module.scss';
import { Service } from '../../../../types';
import { ServiceCard } from '../../../../components/cards';

type Props = {
  services: Service[];
};

const Services = ({ services }: Props) => {
  return (
    <section className={classes.services}>
      <div className={classes.container}>
        <div className={classes.left}>
          <ul className={classes.icons}>
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

          <Heading
            className={classes.heading}
            title="Explore Our Service, Make Your Smile Shine"
          />

          <div className={classes.actions}>
            <Button label="Get the App" />
            <Button variant="outlined" label="Meet the Team" />
          </div>
          <Footer />
        </div>
        <div>
          <ul className={classes['service-list']}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
