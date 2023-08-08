import { FC } from 'react';
import WorkCard from '../../ourWorkPage/components/WorkCard';
import WorkTile from './WorkTile';
import { Link } from '@tanstack/router';
import { v4 as uuidv4 } from 'uuid';

interface OurWorkProps {
  workData: {
    title: string;
    imgSrc: string;
    imgAlt: string;
    description: string;
  }[];
}

const OurWork: FC<OurWorkProps> = ({ workData }) => {
  const workCards = [];
  for (let i = 0; i < 2; i++) {
    workCards.push(
      <WorkCard
        key={uuidv4()}
        title={workData[i].title}
        imgSrc={workData[i].imgSrc}
        imgAlt={workData[i].imgAlt}
        description={workData[i].description}
      />
    );
  }
  const workTiles = [];
  for (let i = 0; i < 4; i++) {
    workTiles.push(
      <Link to='/our-work'>
        <WorkTile
          key={uuidv4()}
          title={workData[i].title}
          imgSrc={workData[i].imgSrc}
          imgAlt={workData[i].imgAlt}
        />
      </Link>
    );
  }

  return (
    <div id='our-work'>
      <div className='card-container-mobile'>
        <h2>Our Work</h2>
        {workTiles}
      </div>

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
