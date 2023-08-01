import { FC, useState, useEffect, useRef } from 'react';
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

  return (
    <div id='our-work'>
      <div className='card-container'>
        <h2>Our Work</h2>
        {workCards}
      </div>
      <span>
        <Link to='/our-work' className={'see-more'}>
          more work
        </Link>
      </span>
    </div>
  );
};

export default OurWork;
