import OurWorkPageHero from './components/OurWorkPageHero';
import WorkCard from './components/workCard';
import './styles.scss';

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
      key={work.title}
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
        <h1>Our Work</h1>
        <div className='cards'>{workCards}</div>
      </section>
    </main>
  );
};

export default OurWorkPage;
