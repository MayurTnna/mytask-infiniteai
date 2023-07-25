import "./App.css";
import Careers from "./pages/Careers";
import Header from "./common/Header";
import MainSection from "./pages/MainSection";
import RouterPath from "./routes/RouterPath";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Header />
        <RouterPath />
      </BrowserRouter>
    </div>
  );
}

export default App;
