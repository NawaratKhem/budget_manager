import "./CSS/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import PageNotFound from "./Pages/PageNotFound";
import ExpensePage from "./Pages/ExpensePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header h-25">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<div className="body mx-md-5"><Body /></div>} />
          <Route path="/expense/:id" element={<div className="body mx-md-5"><ExpensePage /></div>} />
          <Route path="/not-found" element={<div className="body mx-md-5"><PageNotFound /></div>} />
        </Routes>

        {/* Non-route content */}
        {/* <div className="footer"></div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
