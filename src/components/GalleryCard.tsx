import './GalleryCard.css';
import { BodyLikes } from './BodyLikes';

type Props = {
  imgUrl: string;
  title: string;
  price: number;
};

const GalleryCard: React.FC<Props> = ({ imgUrl, title, price }) => {
  return (
    <div className="gallery-card">
      <BodyLikes></BodyLikes>
      <img className="gallery-card-img" src={imgUrl} alt=""></img>
      <div className="gallery-card-text-container">
        <span className="gallery-card-title">{title}</span>
      </div>
      <div className="gallery-card-text-container">
        <span className="gallery-card-price">Price: ${price}</span>
      </div>
    </div>
  );
};

export default GalleryCard;
