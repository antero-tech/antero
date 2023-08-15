import { FC } from 'react';
import AboutDetail from './AboutDetail';
import scalable from '../../../assets/scalable-solutions.jpg';
import user from '../../../assets/about-the-user.jpg';
import service from '../../../assets/service-priotity.jpg';

const aboutUsDetails = [
  {
    heading: 'Scalable Solutions',    
    copy1:
      'Say goodbye to limitations and hello to limitless possibilities. Our scalable solutions grow and adapt with your business. Whether you need a simple landing page or a complex e-commerce platform',
    subheading2: "Prepare for growth..",
    copy2:
      'Our flexible architecture ensures seamless scalability to handle increasing traffic, expanding content, and evolving user demands. We will future-proof your online presence and empower you to meet your business goals. Experience the freedom to dream big!',
    imgSrc: scalable,
    imgAlt: 'Scalable',
  },
  {
    heading: "It's About the User",
    copy1:
      'At Antero, we are passionate about crafting unforgettable user experiences (UX) that leave a lasting impact. Our team of expert designers meticulously analyze user behaviors, needs, and expectations to design an incredible UX that captivates and engages your audience. We prioritize user-centric design principles, ensuring intuitive navigation, seamless interactions, and visually stunning interfaces.',
    subheading2: 'Stand Out in the Crowd..',
    copy2:
      'By incorporating the latest UX trends and best practices, we create a harmonious blend of aesthetics and functionality that keeps users coming back for more. With our meticulous attention to detail and dedication to creating exceptional UX, we empower your brand to stand out in a crowded digital landscape. Trust us to design an unforgettable user experience that leaves a lasting impression on your visitors.',
    imgSrc: user,
    imgAlt: 'User Experience',
  },
  {
    heading: 'Service is Our Top Priority',
    copy1:
      'We believe that effective communication and meeting deadlines are crucial elements of successful application development. We prioritize open and transparent communication with you throughout the entire process, ensuring that your vision is understood and incorporated into every aspect of the development journey.',
    subheading2: "Delivered On Time..",
    copy2:
      'Our dedicated team works closely with yours, providing regular updates, gathering feedback, and addressing any concerns promptly. With our strong commitment to timely delivery, we meticulously plan and manage our development process to meet agreed-upon deadlines. Trust us to not only deliver exceptional applications but also maintain clear communication channels to keep you informed and involved every step of the way.',
    imgSrc: service,
    imgAlt: 'Service',
  },
];

const AboutUs: FC = () => {
  const aboutDetails = aboutUsDetails.map((detail, index) => (
    <AboutDetail
      key={detail.heading}
      alignDirection={index % 2 === 0 ? 'left' : 'right'}
      heading={detail.heading}
      subheading1={detail.subheading1}
      copy1={detail.copy1}
      subheading2={detail.subheading2}
      copy2={detail.copy2}
      imgSrc={detail.imgSrc}
      imgAlt={detail.imgAlt}
    />
  ));

  return (
    <section id='about-us'>
      <h2>
        What we do
        <p>
          We are a web design and application development team dedicated to
          creating impactful user experiences, and delivering exactly what you
          need.
        </p>
      </h2>
      <div id='details-container'>{aboutDetails}</div>
    </section>
  );
};

export default AboutUs;
