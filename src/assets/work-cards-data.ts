import junoSurf from './square-work-images/juno-phone-mockup.png';
import kafkAlerts from './square-work-images/kafkAlerts-brokerview.png';
import friendify from './square-work-images/friendify.jpg';
import sleepWell from './square-work-images/sleepWell.png';
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
    imgSrc: friendify,
    imgAlt: 'Friendify',
  },
  {
    title: 'kafkAlerts',
    description:
      'Connect to your Kafka clusters in seconds. Monitor broker metrics and receive alerts based on service level objectives.',
    imgSrc: kafkAlerts,
    imgAlt: 'kafkAlerts',
  },
  {
    title: 'SleepWell',
    description:
      'Monitor your sleep and improve your nighttime habits. Gain focus, energy, and performance with consistent high-quality sleep.',
    imgSrc: sleepWell,
    imgAlt: 'sleepWell',
  },
  {
    title: 'Juno Surf',
    description:
      'Get real-time wind and wave conditions at your local beach. A South Florida surfing app with simple and beautiful metrics.',
    imgSrc: junoSurf,
    imgAlt: 'Juno Surf',
  },
];

export default workData;
