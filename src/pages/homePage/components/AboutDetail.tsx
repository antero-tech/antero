import { FC } from 'react';
interface DetailProps {
  heading: string;
  copy1: string;
  subheading2: string;
  copy2: string;
  imgSrc: string;
  imgAlt: string;
  alignDirection: string;
}

const AboutDetail: FC<DetailProps> = ({
  heading,
  copy1,
  subheading2,
  copy2,
  imgSrc,
  imgAlt,
  alignDirection,
}) => {
  return (
    <div
      className={alignDirection === 'right' ? 'detail reverse-flex' : 'detail'}
    >
      <div className='copy-img'>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className='copy'>
        <h3>{heading}</h3>
      
        <p>{copy1}</p>
        <h5 className='phone'>{subheading2}</h5>
        <p className='phone'>{copy2}</p>
      </div>
    </div>
  );
};

export default AboutDetail;
