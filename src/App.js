import "./CSS/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { BudgetProvider } from "./Context/BudgetContext";
//import { AddCatModel } from "./Components/AddCatModel" <AddCatModel show/>

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <div className="header h-25">
          <Header />
        </div>

        <div className="body mx-5">
          <Body />
        </div>

        <div className="footer"></div>
      </div>
      
    </BudgetProvider>
  );
}

export default App;
