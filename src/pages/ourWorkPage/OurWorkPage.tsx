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
      classPrefix='our-work-page'
    />
  ));
  return (
    <main id='our-work-page' className='pages'>
      <OurWorkPageHero />
      <div id='our-work-page-cards-container'>{workCards}</div>
    </main>
  );
};

export default OurWorkPage;
