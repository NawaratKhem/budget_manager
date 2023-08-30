import "./CSS/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {CatModal} from "./Components/CatModal";

function App() {
  return (
    <>
      <div className="App">
        <div className="header h-25">
          <Header />
        </div>

        <div className="body mx-5">
          <Body />
        </div>

        <div className="footer"></div>
      </div>
      <CatModal/>
    </>
  );
}

export default App;
