interface CardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  classPrefix: string;
}

const Card: React.FC<CardProps> = ({ title, imgSrc, imgAlt, classPrefix }) => {
  return (
    <div className={`${classPrefix}-cards`}>
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
