import TopBarButton from './TopBarButton';
import SearchBar from './SearchBar';
import './TopBar.css';
import TopBarItem from './TopBarItem';
import { Login } from './Login';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">ZARA$</div>
      <div className="top-bar-right">
        <TopBarItem size="huge">
          <SearchBar></SearchBar>
        </TopBarItem>
        {/* <TopBarItem size="small"> */}
        <Login></Login>
        {/* <TopBarButton text="LOG IN"></TopBarButton> */}
        {/* </TopBarItem> */}
        <TopBarItem size="small">
          <TopBarButton text="HELP"></TopBarButton>
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;
