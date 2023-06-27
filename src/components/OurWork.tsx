import Card from './Card';

const OurWork: React.FC = () => {
  return (
    <div id='our-work'>
      <h2>our work here</h2>
      <div className='container'>
        <Card
          title='example1'
          imgSrc='https://picsum.photos/200/300'
          imgAlt='summer'
        />
        <Card
          title='example1'
          imgSrc='https://picsum.photos/200/300'
          imgAlt='summer'
        />
        <Card
          title='example1'
          imgSrc='https://picsum.photos/200/300'
          imgAlt='summer'
        />
        <Card
          title='example1'
          imgSrc='https://picsum.photos/200/300'
          imgAlt='summer'
        />
      </div>
    </div>
  );
};

export default OurWork;
