import { useState } from "react";
import overlayBody from "./assets/overlay.png";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Vip from "./pages/Vip";
import About from "./pages/About";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <img src={overlayBody} alt="" className="overlayBd" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
