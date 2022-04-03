import GalleryCard from "../components/GalleryCard";
import Title from "../components/Title";
import { importAll } from "../utils/utils";
import "./Gallery.css";

const galleryItems = importAll(
  //@ts-ignore
  require.context("../assets/img", false, /\.(png)$/)
);
const bodies: string[] = Object.values(galleryItems);
console.log(galleryItems);

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-title">
        <Title text="human bodies"></Title>
      </div>
      <div className="gallery-items-container">
        <div className="gallery-items">
          {bodies.map((imgPath, i) => {
            return (
              <GalleryCard imgUrl={imgPath} title={`Body ${i}`}></GalleryCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
