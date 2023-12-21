import { Advantage } from '../../../types';
import { Button, IconButton } from '../../ui';
import classes from './AdvantageCard.module.scss';

type Props = {
  index: number;
  advantage: Advantage;
  className?: string;
};

const AdvantageCard = ({
  index,
  advantage: { title, imageUrl, icon },
  className,
}: Props) => {
  let classNames = classes['advantage-card'];
  classNames += className ? ` ${className}` : '';

  return (
    <li
      className={classNames}
      style={{
        transform: `rotate(${-6 * index}deg)`,
        zIndex: `${1000 - index}`,
      }}
    >
      <img src={imageUrl} alt={title} />

      <div className={classes.label}>
        <IconButton variant="white" icon={icon} />
        <Button variant="white" label={title} />
      </div>
    </li>
  );
};

export default AdvantageCard;
