import Card from '../../sharedComponents/Card';
import OurWorkPageHero from './components/OurWorkPageHero';
import './OurWorkPageStyles.css';

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
    <div id='our-work-page'>
      <OurWorkPageHero />
      <div id='our-work-hero'>Our Work Hero goes here</div>
      <div className='card-container'>{workCards}</div>
    </div>
  );
};

export default OurWorkPage;
