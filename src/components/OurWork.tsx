import Card from './Card';

interface OurWorkProps {
  workData: {
    title: string;
    imgSrc: string;
    imgAlt: string;
  }[];
}

const OurWork: React.FC<OurWorkProps> = ({ workData }) => {
  const workCards = workData
    .slice(0, 2)
    .map((work) => (
      <Card
        key={work.title}
        title={work.title}
        imgSrc={work.imgSrc}
        imgAlt={work.imgAlt}
      />
    ));
  return (
    <div id='our-work'>
      <h2>Sample of our work...</h2>
      <div className='card-container'>{workCards}</div>
      {/* TO DO: turn this into a link */}
      <button>See more</button>
    </div>
  );
};

export default OurWork;
