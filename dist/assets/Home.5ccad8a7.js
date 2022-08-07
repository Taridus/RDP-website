import{s as n,r,j as t,a as e,b as d}from"./index.b5c0d53f.js";import{B as i}from"./ButtonPrimary.aca423b8.js";import{d as l,F as s}from"./data.26817630.js";import{A as c}from"./aos.2481e139.js";import"./aos.7a90f289.js";const m="/assets/bgHome.c9efc039.png",h="/assets/bgHomeMobile.e00ab884.png",p=n.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 15%;
      background-color: var(--dark-blue);
      bottom: 10%;
      filter: blur(25px);
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${m});
      background-size: cover;
      opacity: 0.5;
      top: -20%;
    }
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 20;

      .logo {
        font-family: var(--font-logo);
        margin: 1em auto 0;
        position: relative;
        transform: translateX(-8%) translateY(50px);
        filter: saturate(50%);
        width: 70vh;
      }

      h2 {
        font-size: var(--f-size-sm);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: var(--font-heading);
      }
      a {
        transform: translateY(90px);
      }
    }
  }
  .bg-container {
    position: absolute;
    width: 100%;
    top: -20vh;
    z-index: -2;
    opacity: 0.7;
    min-height: 100vh;
    height: 100vh;
    img {
      max-width: 100%;
    }
  }
  .hero-subsection {
    height: 100vh;
    padding: 0em 4em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    &__stats {
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      font-family: var(--font-body);
      .stats-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em 3em;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background: #afafaf;
        background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
        background: radial-gradient(to bottom left, #d4d4d411, #11060626);
        background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
        border: 1px solid rgba(170, 170, 170, 0.089);
        h5 {
          font-weight: 600;
          font-size: var(--f-size-sm);
          margin-bottom: 0.2em;
        }
      }
    }
    h2 {
      font-family: var(--font-heading);
      font-size: var(--f-size-lg);
      text-transform: uppercase;
      margin: 3em auto 1em;
      z-index: 2;
      span:nth-child(1) {
        color: var(--dark-red);
        margin-right: 0.4em;
      }
    }
    p {
      z-index: 2;
      text-align: center;
      width: 50ch;
      margin-bottom: 4em;
      line-height: 22px;
      font-family: var(--font-body);
    }
    a {
      i {
        transform: rotate(0) !important;
      }
    }
    .svg {
      position: absolute;
      left: 0;
      top: 10%;
      opacity: 0.5;
    }
  }
  @media (max-width: 500px) {
    .hero::after {
      overflow: hidden;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${h});
      background-size: cover;
      opacity: 0.5;
    }
    .hero-wrapper {
      margin-top: 4em;
    }
    .logo {
      max-width: 50vh;
      transform: translateY(-10px) translateX(-20px) !important;
    }
    .hero-subsection__stats {
      flex-direction: column;
      gap: 1em;
    }
    .hero-subsection {
      margin-bottom: 25em;
      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0 auto;
      }
      p {
        max-width: 40ch;
      }
      svg {
        width: 70%;
      }
    }
  }
  @media (min-width: 550px) {
    .hero-subsection h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`,x=()=>{const a=window.localStorage.getItem("memberCount"),o=window.localStorage.getItem("memberOnline");return r.exports.useEffect(()=>{c.init({duration:1500})}),t(p,{children:[e("div",{className:"hero",children:t("div",{className:"hero-wrapper","data-aos":"fade-up","data-aos-duration":"2000",children:[e("img",{src:d,alt:"",className:"logo"}),e("h2",{"data-aos":"fade-up","data-aos-delay":"150","data-aos-duration":"2000",children:"reino da perdi\xE7\xE3o"}),e(i,{title:"Descobrir",icon:"-arrow-back",link:"#find",target:"self"})]})}),t("div",{className:"hero-subsection",children:[t("div",{className:"hero-subsection__stats",children:[t("div",{className:"stats-box","data-aos":"fade-left",children:[e("h5",{children:a}),e("span",{children:"Membros"})]}),t("div",{className:"stats-box","data-aos":"fade-up",children:[e("h5",{children:l.homeInfo[1].donos}),e("span",{children:"Donos"})]}),t("div",{className:"stats-box","data-aos":"fade-right",children:[e("h5",{children:o}),e("span",{children:"Online"})]})]}),t("h2",{"data-aos":"fade-up",children:[e("span",{children:"Perca-se"}),e("span",{children:"na comunidade"})]}),e("p",{"data-aos":"fade-up",id:"find",children:"RDP \xE9 uma comunidade no Discord de divers\xE3o aberta, focada em promover momentos de lazer aos membros com entretenimento, intera\xE7\xF5es, torneios de jogos e muita treta!"}),e(i,{title:"Junte-se",icon:"l-discord-alt",link:"https://discord.gg/RDP",target:"blank",className:"btn-discord"}),e("div",{className:"svg",children:t("svg",{width:"218",height:"644",viewBox:"0 0 218 644",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{opacity:"0.2",children:e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M-75.2105 383.262L-126.122 434.174L-127.536 435.588L-126.122 437.002L-38.441 524.683L-37.0268 526.097L-35.6126 524.683L15.2992 473.772L13.8849 472.357L-37.0268 523.269L-124.708 435.588L-73.7963 384.676L-75.2105 383.262Z",fill:"white"})}),t("g",{opacity:"0.2",children:[e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M42.1692 439.83L-8.74251 490.742L-10.1567 492.156L-8.74251 493.571L78.9387 581.252L80.3529 582.666L81.7671 581.252L132.679 530.34L131.265 528.926L80.3529 579.838L-7.3283 492.156L43.5834 441.245L42.1692 439.83Z",fill:"white"}),e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M18.1276 373.362L-32.7841 424.274L-34.1984 425.688L-32.7841 427.102L54.8971 514.784L56.3113 516.198L57.7255 514.784L108.637 463.872L107.223 462.458L56.3113 513.37L-31.3699 425.688L19.5418 374.777L18.1276 373.362Z",fill:"white"}),e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M-5.91412 306.894L-56.8258 357.806L-58.24 359.22L-56.8258 360.634L30.8554 448.316L32.2696 449.73L33.6838 448.316L84.5955 397.404L83.1813 395.99L32.2696 446.901L-55.4116 359.22L-4.49991 308.309L-5.91412 306.894Z",fill:"white"}),e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M-29.9557 240.426L-80.8675 291.338L-82.2817 292.752L-80.8675 294.166L6.81379 381.848L8.228 383.262L9.64221 381.848L60.5539 330.936L59.1397 329.522L8.228 380.433L-79.4532 292.752L-28.5415 241.84L-29.9557 240.426Z",fill:"white"}),e("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M-53.9974 173.958L-104.909 224.87L-106.323 226.284L-104.909 227.698L-17.2278 315.38L-15.8136 316.794L-14.3994 315.38L36.5123 264.468L35.0981 263.054L-15.8136 313.965L-103.495 226.284L-52.5832 175.372L-53.9974 173.958Z",fill:"white"})]})]})})]}),e(s,{})]})};export{x as default};
