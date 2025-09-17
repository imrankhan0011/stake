import{r as i,g as o}from"./Bhbbb5KL.js";const s=e=>e instanceof MouseEvent,d=e=>"subscribe"in e?o(e):e,a=(e,n)=>"subscribe"in e?e.update(n):n(e),t=()=>typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0},u=i(t(),e=>{const n=()=>e(t());return typeof window<"u"&&window.addEventListener("resize",n),()=>{typeof window<"u"&&window.removeEventListener("resize",n)}}),w=e=>s(e)?{x:e.clientX,y:e.clientY}:{x:e.touches[0].clientX,y:e.touches[0].clientY},c=()=>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: auto;
  background: transparent;
  cursor: move;
`;export{c as a,d as b,t as c,w as g,s as i,a as u,u as w};
