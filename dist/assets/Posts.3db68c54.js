import{s as i,j as t,a as e}from"./index.b5c0d53f.js";import{C as a}from"./index.b3633339.js";import{d as o,F as r}from"./data.26817630.js";import"./aos.7a90f289.js";const n="/assets/postRedBg.b0c6b765.png",s="/assets/postRedBg2.9b932ca4.png",d=i.section`
  width: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${n});
    background-repeat: no-repeat;
    background-position-x: left;
    top: 20%;
    opacity: 0.5;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${s});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    right: 0;
    bottom: 15%;
    opacity: 0.5;
    z-index: -1;
  }
  .title-container {
    margin: 10em 0;
    display: grid;
    place-items: center;
    h2 {
      font-family: var(--font-heading);
      font-size: var(--f-size-lg);
      text-transform: uppercase;
      margin-bottom: 1em;
      span:nth-child(2) {
        color: var(--dark-red);
        margin-left: 0.4em;
      }
    }
    p {
      width: 50ch;
      text-align: center;
      line-height: 22px;
    }
  }
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 10em;
    position: relative;
    margin-bottom: 2em;
    .card-posse {
      transform: translateY(50px) rotate(-20deg);
    }
  }
  @media (max-width: 550px) {
    .title-container {
      h2 {
        text-align: center;
        span:nth-child(2) {
          margin-left: 0;
        }
      }
    }

    &::after,
    &::before {
      background-size: 30%;
    }
    p {
      max-width: 30ch;
    }
  }
`,m=()=>t(d,{children:[t("div",{className:"title-container","data-aos":"fade-up",children:[t("h2",{children:[e("span",{children:"obtenha"}),e("span",{children:"cargos"})]}),e("p",{"data-aos":"fade-up","data-aos-delay":"150",children:"Obtenha os melhores cargos e sinta o que \xE9 uma vida de Lord."})]}),t("div",{className:"card-container",children:[e(a,{title:"Lord",benefits:o.lord,price:o.prices[2].price,color:"red",icon:"skull"}),e(a,{title:"Posse",benefits:o.posse,price:o.prices[3].price,color:"red",icon:"hand"})]}),e(r,{})]});export{m as default};
