import Card from '../../sharedComponents/Card';
import OurWorkPageHero from './components/OurWorkPageHero';
import './styles.css';

interface OurWorkPageProps {
  workData: {
    title: string;
    imgSrc: string;
    imgAlt: string;
  }[];
}

const OurWorkPage: React.FC<OurWorkPageProps> = ({ workData }) => {
  const workCards = workData.map((work) => (
    <Card
      key={work.title}
      title={work.title}
      imgSrc={work.imgSrc}
      imgAlt={work.imgAlt}
    />
  ));
  return (
    <main id='our-work-page' className='pages'>
      <OurWorkPageHero />
      <div className='card-container'>{workCards}</div>
    </main>
  );
};

export default OurWorkPage;
