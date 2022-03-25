import "./App.css";
import {  Routes , Route } from "react-router-dom";
import Mockman from "mockman-js";
import Navigation from "./components/navigation/Nav";
import Home from "./pages/homePage/homePage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
