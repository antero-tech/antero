import junoSurf from './our-work/juno-phone-mockup.png';

interface WorkData {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const workData: WorkData[] = [
  {
    title: 'Friendify',
    description:
      'Discover new music and find new friends based on what you are currenly listening to. Friendify connects audiophiles from all over the world!',
    imgSrc: 'https://picsum.photos/500/500',
    imgAlt: 'summer',
  },
  {
    title: 'kafkAlerts',
    description:
      'Connect to your Kafka clusters in seconds. Monitor broker metrics and receive alerts based on service level objectives.',
    imgSrc: 'https://picsum.photos/500/604',
    imgAlt: 'summer',
  },
  {
    title: 'SleepWell',
    description:
      'Monitor your sleep and improve your nighttime habits. Gain focus, energy, and performance with consistent high-quality sleep.',
    imgSrc: 'https://picsum.photos/500/601',
    imgAlt: 'summer',
  },
  {
    title: 'Juno Surf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, nec al',
    imgSrc: junoSurf,
    imgAlt: 'Juno Surf',
  },
];

export default workData;