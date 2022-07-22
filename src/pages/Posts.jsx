import React, { useEffect } from "react";
import Card from "../components/Card";
import { PostsSection } from "../styles/pages/posts";
import data from "../../data.json";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const Posts = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <PostsSection>
      <div className="title-container" data-aos="fade-up">
        <h2>
          <span>obtenha</span>
          <span>cargos</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Obtenha os melhores cargos e sinta o que é uma vida de Lord.
        </p>
      </div>
      <div className="card-container">
        <Card
          title={"Lord"}
          benefits={data.lord}
          price={data.prices[2].price}
          color={"red"}
          icon={"skull"}
        />
        <Card
          title={"Posse"}
          benefits={data.posse}
          price={data.prices[3].price}
          color={"red"}
          icon={"hand"}
        />
      </div>
      <Footer />
    </PostsSection>
  );
};

export default Posts;
