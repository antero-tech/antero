import { FC } from 'react';
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
      <Link to='/our-work' className={'see-more'}>
        see more work -{'>'}
      </Link>
    </div>
  );
};

export default OurWork;
