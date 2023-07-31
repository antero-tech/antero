import { FC } from 'react';
interface DetailProps {
  heading: string;
  subheading1: string;
  copy1: string;
  subheading2: string;
  copy2: string;
  imgSrc: string;
  imgAlt: string;
  alignDirection: string;
}

const AboutDetail: FC<DetailProps> = ({
  heading,
  subheading1,
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
      <img src={imgSrc} alt={imgAlt} />
      <div className='detail-copy'>
        <h3>{heading}</h3>
        <h5>{subheading1}</h5>
        <p>{copy1}</p>
        <h5>{subheading2}</h5>
        <p>{copy2}</p>
      </div>
    </div>
  );
};

export default AboutDetail;
