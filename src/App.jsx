import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const Home = React.lazy(() => import("./pages/Home"));
const Posts = React.lazy(() => import("./pages/Posts"));
const Vip = React.lazy(() => import("./pages/Vip"));
const About = React.lazy(() => import("./pages/About"));
const Fivem = React.lazy(() => import("./pages/Fivem"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vip" element={<Vip />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/fivem" element={<Fivem />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
