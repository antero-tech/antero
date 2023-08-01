interface AboutProps {
  title: string;
  id: string;
  imgSrc: string;
  imgAlt: string;
  copy: string;
}

const AboutDetail: React.FC<AboutProps> = ({ title, id, imgSrc, imgAlt, copy }) => {
  return (
    <div className='detail-wrapper'>
      
      <div className='detail-content' id={id}>
        <div className='detail-img'>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className='detail-copy'>
          <h3 id='detail-title'>{title}</h3>
          <p>{copy}</p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutDetail;