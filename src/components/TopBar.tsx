import TopBarButton from "./TopBarButton";
import SearchBar from "./SearchBar";
import "./TopBar.css";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">ZARA$</div>
      <div className="top-bar-right">
        <TopBarItem size="huge">
          <SearchBar></SearchBar>
        </TopBarItem>
        <TopBarItem size="small">
          <TopBarButton text="LOG IN"></TopBarButton>
        </TopBarItem>
        <TopBarItem size="small">
          <TopBarButton text="HELP"></TopBarButton>
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;
