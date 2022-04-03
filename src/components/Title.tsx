import "./Title.css";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className={`title`}>
      <h1 className="title-header">{text}</h1>
    </div>
  );
};

export default Title;
