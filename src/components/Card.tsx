interface CardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const Card: React.FC<CardProps> = ({ title, imgSrc, imgAlt }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
