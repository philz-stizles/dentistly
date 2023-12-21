import { GoArrowUpRight } from 'react-icons/go';
import { IoHeartOutline } from 'react-icons/io5';
import { IconButton } from '../../ui';
import classes from './ServiceCard.module.scss';
import { Service } from '../../../types';

type Props = {
  service: Service;
};

const ServiceCard = ({ service: { title, imageUrl } }: Props) => {
  return (
    <article className={classes['service-card']}>
      <img src={imageUrl} alt={title} />
      <ul className={classes.actions}>
        <li>
          <IconButton variant="white" icon={IoHeartOutline} />
        </li>
        <li>
          <IconButton variant="white" icon={GoArrowUpRight} />
        </li>
      </ul>
      <p className={classes.title}>{title}</p>
    </article>
  );
};

export default ServiceCard;
