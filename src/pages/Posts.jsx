import React from "react";
import Card from "../components/Card";
import { PostsSection } from "../styles/pages/posts";
import data from "../data/benefits.json";
import Footer from "../components/Footer";
const Posts = () => {
  return (
    <PostsSection>
      <div className="title-container">
        <h2>
          <span>obtenha</span>
          <span>cargos</span>
        </h2>
        <p>
          Obtenha os cargos mais quentes do reino, ajude a comunidade e ganhe
          contúdos exclusivos.
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
