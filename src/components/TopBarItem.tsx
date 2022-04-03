import "./TopBarItem.css";

type ComponentSize = "small" | "medium" | "huge";
type Props = {
  size?: ComponentSize;
};
const TopBarItem: React.FC<Props> = ({ children, size = "medium" }) => {
  return <div className={`top-bar-item ${size}`}>{children}</div>;
};

export default TopBarItem;
