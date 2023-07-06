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
  return (
    <div className={'work-card'}>
      <div className='card-img'>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className='card-text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
