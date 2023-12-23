import { GoArrowUpRight } from 'react-icons/go';
import { IoHeartOutline } from 'react-icons/io5';
import { IconButton } from '../../ui';
import classes from './ServiceCard.module.scss';
import { Service } from '../../../types';
import { Ref, forwardRef } from 'react';

type Props = {
  service: Service;
};

const ServiceCard = forwardRef(
  ({ service: { title, imageUrl } }: Props, ref: Ref<HTMLElement>) => {
    return (
      <article ref={ref} className={classes['service-card']}>
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
  }
);

export default ServiceCard;
