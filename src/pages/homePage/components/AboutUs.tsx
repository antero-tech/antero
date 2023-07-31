import { FC } from 'react';
import AboutDetail from './AboutDetail';

const aboutUsDetails = [
  {
    title: 'Scalable Solutions',
    id: 'scale',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'technology',
    copy: 'Say goodbye to limitations and hello to limitless possibilities. Our scalable solutions grow and adapt with your business. Whether you need a simple landing page or a complex e-commerce platform, our flexible architecture ensures seamless scalability to handle increasing traffic, expanding content, and evolving user demands. We will future-proof your online presence and empower you to meet your business goals. Experience the freedom to dream big!',
  },
  {
    title: "It's About the User",
    id: 'about-user',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'technology',
    copy: 'At Netron Solutions, we are passionate about crafting unforgettable user experiences (UX) that leave a lasting impact. Our team of expert designers meticulously analyze user behaviors, needs, and expectations to design an incredible UX that captivates and engages your audience. We prioritize user-centric design principles, ensuring intuitive navigation, seamless interactions, and visually stunning interfaces. By incorporating the latest UX trends and best practices, we create a harmonious blend of aesthetics and functionality that keeps users coming back for more. With our meticulous attention to detail and dedication to creating exceptional UX, we empower your brand to stand out in a crowded digital landscape. Trust us to design an unforgettable user experience that leaves a lasting impression on your visitors.',
  },
  {
    title: 'Service is Our Top Priority',
    id: 'service',
    imgSrc: 'https://picsum.photos/200/300',
    imgAlt: 'technology',
    copy: 'We believe that effective communication and meeting deadlines are crucial elements of successful application development. We prioritize open and transparent communication with our clients throughout the entire process, ensuring that their vision is understood and incorporated into every aspect of the development journey. Our dedicated team works closely with clients, providing regular updates, gathering feedback, and addressing any concerns promptly. With our strong commitment to timely delivery, we meticulously plan and manage our development process to meet agreed-upon deadlines. Trust us to not only deliver exceptional applications but also maintain clear communication channels to keep you informed and involved every step of the way.',
  },
];

const AboutUs: FC = () => {
  const aboutDetails = aboutUsDetails.map((detail) => (
    <AboutDetail
      key={detail.title}
      id={detail.id}
      title={detail.title}
      imgSrc={detail.imgSrc}
      imgAlt={detail.imgAlt}
      copy={detail.copy}
    />
  ));

  return (
    <div id='about-us'>
      <h2>
        We are a web design and application development team dedicated to
        creating impactful user experiences, and delivering exactly what you
        need.
      </h2>
      <div id='details-container'>{aboutDetails}</div>
    </div>
  );
};

export default AboutUs;
