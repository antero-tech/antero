import OurWorkPageHero from './components/OurWorkPageHero';
import WorkCard from './components/WorkCard';
import './styles.scss';
import { v4 as uuidv4 } from 'uuid';

interface OurWorkPageProps {
  workData: {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
  }[];
}

const OurWorkPage: React.FC<OurWorkPageProps> = ({ workData }) => {
  const workCards = workData.map((work) => (
    <WorkCard
      key={uuidv4()}
      title={work.title}
      description={work.description}
      imgSrc={work.imgSrc}
      imgAlt={work.imgAlt}
    />
  ));
  return (
    <main id='our-work-page' className='pages'>
      <OurWorkPageHero />
      <section id='our-work-container'>
        <div className='contents'>
          <h1>Our Work</h1>
          <div className='cards'>{workCards}</div>
        </div>
      </section>
    </main>
  );
};

export default OurWorkPage;
