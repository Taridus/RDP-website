import{s as n,j as t,a as e,r as s}from"./index.b5c0d53f.js";import{d as r,F as d}from"./data.26817630.js";import{r as p}from"./vipRedBG.b3569176.js";import{B as l}from"./ButtonPrimary.aca423b8.js";import{A as c}from"./aos.2481e139.js";import"./aos.7a90f289.js";const A=n.div`
  h6 {
    font-family: var(--font-body);
    font-size: var(--f-size-md);
    margin-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .avatar {
    max-width: 150px;
    min-height: 200px;
    img {
      max-width: 100%;
    }
  }
  .profile-container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    border: 1px solid rgba(170, 170, 170, 0.089);
    position: relative;
    padding: 3em 6em 3em 3em;
    &__icon {
      position: absolute;
      right: -40px;
      top: -60px;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--dark-red);
        left: 0;
        top: 0;
        border-radius: 100%;
        filter: blur(50px) opacity(0.8);
        z-index: -2;
      }
    }
    &__outsideName {
      position: absolute;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      right: -80px;
      top: 0em;
      letter-spacing: 15px;
      font-size: 5.594em;
      font-family: var(--font-body);
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0.1;
      color: var(--white-transparent);
    }
    &__social {
      transform: translateX(50px) translateY(30px);
      position: relative;
    }
    &__social a {
      color: var(--white-transparent);
      font-size: 1.5em;
      margin: 0 0.5em;
      opacity: 0.8;
      transition: var(--transition);
      padding: 0;
      &::before {
        content: "";
        transition: var(--transition);
      }
      &:hover {
        color: var(--white);
        opacity: 1;
        transition: var(--transition);
        border-radius: 50%;
        padding: 0.1em;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--dark-red);
          left: 0;
          top: 0;
          border-radius: 100%;
          filter: blur(20px) opacity(0.8);
          z-index: -2;
          transition: var(--transition);
        }
      }
    }
  }
  @media (max-width: 600px) {
    .profile-container {
      width: fit-content;
    }
  }
`,m="data:image/png;base64,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",g="data:image/png;base64,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",h="/assets/impAvatar.a95e6de4.png",f="/assets/kingAvatar.f3e47ac6.png",o=({name:i})=>{const a={imp:{id:0x389ff9c39400000},king:{id:64979387169348e4}};return t(A,{children:[e("h6",{children:i}),t("div",{className:"profile-container","data-aos":i=="king"?"fade-right":"fade-left",children:[e("div",{className:"profile-container__icon",children:e("img",{src:i=="king"?m:g,alt:""})}),e("img",{src:i=="king"?f:h,alt:"",className:"avatar"}),t("div",{className:"profile-container__social",children:[e("a",{href:i=="king"?r.instagram[0].link:r.instagram[1].link,target:"_blank",children:e("i",{className:"bx bxl-instagram-alt"})}),e("a",{href:`https://discord.com/users/${i=="king"?a.king.id:a.imp.id}`,target:"_blank",children:e("i",{className:"bx bxl-discord-alt"})})]}),e("div",{className:"profile-container__outsideName",children:e("span",{children:i})})]})]})},u=n.section`
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
    background-image: url(${p});
    background-repeat: no-repeat;
    right: 0;
    top: -20%;
    opacity: 0.5;
    z-index: -1;
    background-position-x: right;
    background-position: left;
    rotate: 180deg;
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
      margin-bottom: 5em;
    }
  }
  h5 {
    font-family: var(--font-heading);
    font-size: var(--f-size-md);
    margin-bottom: 2em;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .profile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0 7em;
  }
  a {
    i {
      transform: rotate(0) !important;
    }
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
  @media (max-width: 600px) {
    .profile-wrapper {
      width: 70%;
      gap: 9em;
      flex-direction: column;
      align-items: center;
    }
  }
`,M=()=>(s.exports.useEffect(()=>{c.init({duration:1500})},[]),t(u,{children:[t("div",{className:"title-container","data-aos":"fade-up",children:[t("h2",{children:[e("span",{children:"sobre"}),e("span",{children:"n\xF3s"})]}),e("p",{"data-aos":"fade-up","data-aos-delay":"150",children:"RDP \xE9 a maior comunidade hot no Discord do Brasil, focada em promover momentos de lazer aos membros com entretenimento, intera\xE7\xF5es, torneios de jogos e muita treta!"}),e(l,{title:"Junte-se",icon:"l-discord-alt",link:"https://discord.gg/RDP",target:"blank",className:"btn-discord"})]}),e("h5",{children:"Donos"}),t("div",{className:"profile-wrapper",children:[e(o,{name:"king"}),e(o,{name:"imp"})]}),e(d,{})]}));export{M as default};
