import "./TopBarButton.css";

type Props = {
  text: string;
};

const TopBarButton: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <div className="top-bar-button">{text}</div>
    </div>
  );
};

export default TopBarButton;
