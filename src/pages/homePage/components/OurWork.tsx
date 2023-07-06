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

const OurWork: React.FC<OurWorkProps> = ({ workData }) => {
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
      <div id='our-work-wrapper'>
        <h2>Sample of our work...</h2>
        <div className='card-container'>{workCards}</div>
        <Link to='/our-work' className='see-more'>See More</Link>
      </div>
      
    </div>
  );
};

export default OurWork;
