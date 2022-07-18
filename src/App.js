import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      <div className={sidebar ? "App small" : "App"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
