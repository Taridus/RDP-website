import{s as a,r,j as i,a as e}from"./index.20bd4990.js";import{d as o,F as n}from"./data.1da1f0fe.js";import{C as t}from"./index.59cbee03.js";import{r as d}from"./vipRedBG.b3569176.js";import{A as s}from"./aos.02e6579c.js";import"./aos.b1360125.js";const c="/assets/vipBlueBG.7acc039b.png",p=a.section`
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
    background-image: url(${d});
    background-repeat: no-repeat;
    left: 0;
    top: 10%;
    opacity: 0.5;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${c});
    background-repeat: no-repeat;
    opacity: 0.5;
    background-position-y: bottom;
    background-position-x: right;
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
  }
  @media (max-width: 550px) {
    &::after,
    &::before {
      background-size: 30%;
    }
    &::before {
      top: 20%;
    }
    &::after {
      bottom: -5%;
    }
    p {
      max-width: 30ch;
    }
  }
`,b=()=>(r.exports.useEffect(()=>{s.init({duration:1500})},[]),i(p,{children:[i("div",{className:"title-container","data-aos":"fade-up",children:[i("h2",{children:[e("span",{children:"torne-se"}),e("span",{children:"vip"})]}),e("p",{"data-aos":"fade-up","data-aos-delay":"150",children:"Torne-se Vip na comunindade mais quente do discord. Apoie o servidor e receba privil\xE9gios exclusivos."})]}),i("div",{className:"card-container",children:[e(t,{title:"Premium",benefits:o.premium,price:o.prices[0].price,color:"red",icon:"diamondRed"}),e(t,{title:"Diamond",benefits:o.diamond,price:o.prices[1].price,color:"blue",icon:"diamondBlue"})]}),e(n,{})]}));export{b as default};
