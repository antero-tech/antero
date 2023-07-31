import { FC, useState, useEffect } from 'react';
import WorkCard from '../../ourWorkPage/components/WorkCard';
import { Link } from '@tanstack/router';

interface OurWorkProps {
  workData: {
    title: string;
    imgSrc: string;
    imgAlt: string;
    description: string;
  }[];
}

const OurWork: FC<OurWorkProps> = ({ workData }) => {
  const workCards = workData
    .slice(0, 2)
    .map((work) => (
      <WorkCard
        key={work.title}
        title={work.title}
        imgSrc={work.imgSrc}
        imgAlt={work.imgAlt}
        description={work.description}
      />
    ));
  // const [dasheClass, setDasheClass] = useState();
  // const [isHovered, setIsHovered] = useState(false);
  // const hoverStyle = {
  //   textDecoration: 'underline',
  //   '::after': {
  //     content: 'hello',
  //     position: 'absolute',
  //   },
  // };

  return (
    <div id='our-work'>
      <div className='card-container'>
        <h2>Our Work</h2>
        {workCards}
      </div>
      <span>
        <Link
          to='/our-work'
          // className={isHovered ? 'test-hover see-more' : 'see-more'}
          className='see-more'
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          want to see more?
        </Link>
      </span>
    </div>
  );
};

export default OurWork;
