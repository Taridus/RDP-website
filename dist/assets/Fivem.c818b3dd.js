import{s as t,r as i,j as a,a as e}from"./index.b5c0d53f.js";import{F as r}from"./aos.7a90f289.js";import{B as o}from"./ButtonPrimary.aca423b8.js";import{A as n}from"./aos.2481e139.js";const s="/assets/angeFivem.d62a3841.png",d="/assets/cityFivem.c14a3a19.png",m=t.section`
  width: 100%;
  z-index: 20;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    right: 0;
    top: 10%;
    opacity: 0.8;
    z-index: -1;
    background-image: url(${s});
    background-position-x: right;
    background-position: left;
    animation: cardIcon 8s linear infinite;
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
      margin-bottom: 3em;
    }
  }
  h5 {
    font-family: var(--font-heading);
    font-size: var(--f-size-md);
    margin-bottom: 2em;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .profile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0 7em;
  }

  .cityBg {
    bottom: 0.8em;
    position: absolute;
    z-index: 200;
    background-image: url(${d});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  footer {
    margin-top: 18em;
  }
  a {
    i {
      transform: rotate(0) !important;
    }
  }
  @media (max-width: 550px) {
    &::after,
    &::before {
      background-size: 100%;
    }
    &::before {
      top: 50%;
    }
    &::after {
      bottom: -5%;
    }
    p {
      max-width: 30ch;
    }
  }
  @media (max-width: 890px) {
    &::before {
      top: 0;
      background-size: 40%;
    }
  }
  @media (max-width: 600px) {
    .profile-wrapper {
      width: 70%;
      gap: 9em;
      flex-direction: column;
      align-items: center;
    }
  }
`,f=()=>(i.exports.useEffect(()=>{n.init({duration:1500})},[]),a(m,{children:[a("div",{className:"title-container","data-aos":"fade-up",children:[a("h2",{children:[e("span",{children:"Arme-se no"}),e("span",{children:"Fivem"})]}),e("p",{"data-aos":"fade-up","data-aos-delay":"150",children:"Agora as brincadeiras ficaram mais imersivas. Temos uma cidade no GTA RP pronta pra novas aventuras. Entre agora mesmo no nosso servidor e desfrute de mais um lugar para a Perdi\xE7\xE3o."})]}),a("h5",{"data-aos":"fade-up",children:[e("span",{children:"rdp city"}),e("span",{children:"dispon\xEDvel agora"})]}),e(o,{title:"Acessar",icon:"l-discord-alt",link:"https://discord.gg/RDP",target:"blank",className:"btn-discord"}),e("div",{className:"cityBg"}),e(r,{children:e("div",{className:"footer-icons"})})]}));export{f as default};
