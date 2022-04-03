import "./GalleryCard.css";

type Props = {
  imgUrl: string;
  title: string;
};

const GalleryCard: React.FC<Props> = ({ imgUrl, title }) => {
  return (
    <div className="gallery-card">
      <img className="gallery-card-img" src={imgUrl} alt=""></img>
      <div className="gallery-card-title-container">
        <span className="gallery-card-title">{title}</span>
      </div>
    </div>
  );
};

export default GalleryCard;
