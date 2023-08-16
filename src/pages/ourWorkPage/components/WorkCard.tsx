import { useState } from 'react';
interface WorkCardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={'work-card'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={'card-img'}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className={isHovered ? 'img-hovered' : ''}
          style={{ backgroundColor: 'grey' }}
        />
      </div>
      <div className='card-text'>
        <h3 className={isHovered ? 'h3-hovered' : ''}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
