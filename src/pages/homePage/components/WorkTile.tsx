interface WorkTileProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const WorkTile: React.FC<WorkTileProps> = ({ title, imgSrc, imgAlt }) => {
  return (
    <div className={'work-tile'}>
      <h3>{title}</h3>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};
export default WorkTile;
