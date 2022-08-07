import{s as o,j as t,a as n}from"./index.b5c0d53f.js";const e=o.a`
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--white-transparent);
  color: var(--white);
  display: flex;
  font-family: var(--font-body);
  font-weight: 400;
  letter-spacing: 1px;
  gap: 0.5em;
  padding: 0.7em 1.2em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  text-decoration: none;
  z-index: 20;
  span {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  span:nth-child(1) {
    position: absolute;
    transform: translateY(-30px);
    visibility: hidden;
    transition: var(--transition);
  }
  span:nth-child(2) {
    visibility: visible;
    transform: translateY(0px);
    transition: var(--transition);
  }
  i {
    transform: rotate(225deg);
    font-size: 1.2em;
    transition: var(--transition);
  }
  &:active {
    transform: translateY(-5px);
  }
  &:hover {
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    transition: var(--transition);
    span:nth-child(1) {
      transform: translateY(0px);
      visibility: visible;
      transition: var(--transition);
    }
    span:nth-child(2) {
      visibility: hidden;
      transform: translateY(30px);
      transition: var(--transition);
    }
    i {
      transition: var(--transition);
      transform: rotate(180deg);
    }
  }
`,l=({title:a,icon:i,link:r,target:s})=>t(e,{href:`${r}`,target:`_${s}`,children:[t("span",{children:[a," ",n("i",{className:`bx bx${i}`})]}),t("span",{children:[a," ",n("i",{className:`bx bx${i}`})]})]});export{l as B};
