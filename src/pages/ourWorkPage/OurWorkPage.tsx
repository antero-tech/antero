import Card from '../../components/Card';

interface OurWorkProps {
  workData: {
    title: string;
    imgSrc: string;
    imgAlt: string;
  }[];
}

const OurWorkPage: React.FC<OurWorkProps> = ({ workData }) => {
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
      <div id='our-work-hero'>Our Work Hero goes here</div>
      <div className='card-container'>{workCards}</div>
    </div>
  );
};

export default OurWorkPage;
