import { useParams } from "react-router";
import GalleryCard from "../components/GalleryCard";
import Title from "../components/Title";
import { importAll } from "../utils/utils";
import BodyPrev from "../components/BodyPrev";
import "./Body.css";

type Props = {
  id?: string;
};

const Body: React.FC<Props> = () => {
  let { id } = useParams();
  return (
    <section className="human-body-container">
      <div className="human-body-description">
        <div>
          <h2>Body {id}</h2>
          <div>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products. The Green to Wear 2.0
            standard aims to minimise the environmental impact of textile
            manufacturing.
            <br></br>
            <br></br>
            To that end, we have developed Inditex’s The List programme, which
            helps guarantee both that production processes are clean and that
            our garments are safe and healthy.
          </div>
        </div>
      </div>
      <div className="human-body-preview">
        <BodyPrev></BodyPrev>
      </div>
      <div className="human-body-buy">
        <h4> RUFFLED PRINTED DRESS</h4>
        <div>
          V-neck dress with long balloon sleeves. Elastic waist. Ruffled hem.
          Tied fastening at the back.
        </div>
        <br></br>
        <div>49.95 EUR</div>
      </div>
    </section>
  );
};

export default Body;
