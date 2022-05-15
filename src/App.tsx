import TopBar from "./components/TopBar";
import "./App.css";
import Gallery from "./pages/Gallery";
import Body from "./pages/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Routes>
        <Route path="/human-bodies" element={<Gallery></Gallery>} />
        <Route path="/body/:id" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
