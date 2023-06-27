import Card from './Card';
const workData = [
  {
    title: 'example1',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'summer',
  },
  {
    title: 'example2',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'summer',
  },
  {
    title: 'example3',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'summer',
  },
  {
    title: 'example4',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'summer',
  },
];

const OurWork: React.FC = () => {
  const workCards = workData.map((work) => (
    <Card
      key={work.title}
      title={work.title}
      imgSrc={work.imgSrc}
      imgAlt={work.imgAlt}
    />
  ));
  return (
    <div id='our-work'>
      <h2>our work here</h2>
      <div className='card-container'>{workCards}</div>
    </div>
  );
};

export default OurWork;
