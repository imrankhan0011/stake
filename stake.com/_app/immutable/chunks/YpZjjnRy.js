import{_ as f}from"./CMNPK1gw.js";import"./CWj6FrbW.js";import"./CN51-NxK.js";import{a as Y,l as J,c as Q,d as n,b as X,ad as R,g as z,n as H,t as y,s as Z,u as _,ae as I,p as L,m as ee,e as te}from"./jOU3gvjy.js";import{s as G}from"./BmB745gX.js";import{t as W,a as A,f as re}from"./Dy_KNm7H.js";import{s as ae}from"./CF9D5C4w.js";import{a as me,s as B}from"./uYbI_H7H.js";import{i as se}from"./bB4Zh3Ev.js";import{p as l,a as oe,s as ue}from"./BbnqNlY1.js";import{T as F}from"./BwMB7jJ3.js";import{T as U}from"./CdG4nqTm.js";import{T as V}from"./DzdPy27c.js";import{m as S}from"./D9FjF6Lk.js";import{i as ce}from"./Cp5EkjuV.js";import{c as g}from"./DJWgUoNu.js";import{a as M}from"./BLAtgber.js";import{D as ie}from"./DC8FEm5-.js";import{_ as ne}from"./CedmZKfv.js";const i=6,P=3,c=(t,e,a)=>f.range(0,e).reduce((r,m,u)=>{const o=typeof t=="function"?t(u):t;return a?`
        ${r}
        ${o}
    `:`${r} ${o}`},""),Ge=({stacked:t,marketsLength:e,displayBreadcrumb:a,isSearchFixture:r,displayTournament:m=!1})=>{if(t)return r?`
      'team team team team team team team team team team team team'
      'misc misc misc misc misc misc misc misc misc misc misc misc'
      'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
    `:a?`
      'misc misc misc misc marketCount marketCount'
      'fixture fixture fixture fixture fixture fixture'
      'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
      ${c(s=>`
              '${c(`marketName${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
            `,e,!0)}
    `:m?`
      'misc misc misc misc marketCount marketCount'
      'tournament tournament tournament tournament tournament tournament'
      'fixture fixture fixture fixture fixture fixture'
      ${c(s=>`
              '${c(`marketName${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
            `,e,!0)}
    `:`
      'misc misc misc misc marketCount marketCount'
      'fixture fixture fixture fixture fixture fixture'
      ${c(s=>`
              '${c(`marketName${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
              '${c(`outcomes${s}`,i,!1)}'
            `,e,!0)}
    `;if(e===1)return r?`
      'fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture'
      'misc misc misc misc misc misc misc misc misc misc misc misc'
      'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
    `:a?`
      'misc misc misc misc misc line marketName0 marketName0 marketName0 marketName0 line2 line2'
      'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
      'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
      'breadcrumb breadcrumb breadcrumb fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
    `:m?`
      'misc misc misc misc misc line marketName0 marketName0 marketName0 marketName0 line2 line2'
      'tournament tournament tournament tournament tournament tournament tournament tournament tournament tournament tournament tournament'
      'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
      'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
    `:`
    'misc misc misc misc misc line marketName0 marketName0 marketName0 marketName0 line2 line2'
    'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
    'teams teams teams fixtureScore fixtureScore outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 outcomes0 marketCount'
  `;if(r)return`
    'fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture fixture'
    'misc misc misc misc misc misc misc misc misc misc misc misc'
    'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
  `;const u=c(s=>`marketName${s} marketName${s} marketName${s}`,e,!1),o=c(s=>c(`outcomes${s}`,P,!1),e,!1),N=c(()=>c("tournament",P,!1),e,!1);return m?`
      'misc misc line line line line line ${u} line2'
      'tournament tournament tournament tournament tournament tournament tournament tournament ${N}'
      'teams teams teams teams fixtureScore fixtureScore fixtureScore ${o} marketCount'
      'teams teams teams teams fixtureScore fixtureScore fixtureScore ${o} marketCount'
      `:`
    'misc misc line line line line line ${u} line2'
    'teams teams teams teams fixtureScore fixtureScore fixtureScore ${o} marketCount'
    'teams teams teams teams fixtureScore fixtureScore fixtureScore ${o} marketCount'
    `},We=(t,e)=>t?i:Math.max(12,8+e*P),fe=t=>{const e=t.match(/[+-]?\d+(\.\d+)?/g);return e?e[e.length-1]:""},le=(t,e)=>{if(e.length===0)return t;const[a,r]=e;if(t===a.name)return a.abbreviation;if(t===r.name)return r.abbreviation;const m=new RegExp(`${a.name}|${r.name}`,"g"),u=t.replace(m,""),o=fe(u);return o?`${u[0]} ${o}`:u},be=(t,e)=>{if(e.length===0)return t;const[a,r]=e;let m=t;if(m.includes(a.name)){if(m===a.name)return m;m=f.replace(m,new RegExp(a.name,"gi"),(a==null?void 0:a.abbreviation)??"")}if(m.includes(r.name)){if(m===r.name)return m;m=f.replace(m,new RegExp(r.name,"gi"),(r==null?void 0:r.abbreviation)??"")}return m},Be=({isMulti:t,stacked:e,name:a,competitors:r})=>t&&!e?le(a,r):be(a,r);var de=re('<button data-testid="fixture-outcome active:scale-[0.98]" disabled><div><!> <!></div></button>');function Fe(t,e){Y(e,!1);const a=()=>oe(ce,"$i18n",r),[r,m]=ue(),u=ee();let o=l(e,"outcome",8),N=l(e,"horizontal",8,!1),s=l(e,"name",8),p=l(e,"isMulti",8,!1),j=l(e,"hideOdds",8,!1),q=l(e,"customPlayerProps",8,!1);J(()=>(n(s()),a(),n(o())),()=>{Q(u,s()&&s()in S?a()._(S[s()]):s()&&s()!=="N/A"?s():typeof o()=="object"?o().name:"")}),X(),se();var b=de();let O;var v=R(b);let w;var E=R(v);U(E,{maxWidth:"100%",children:(d,h)=>{V(d,{children:(x,$)=>{{let T=te(()=>(n(g),n(o()),_(()=>g("text-white text-left",o()==="suspended"&&"opacity-40"))));F(x,{type:"body",tag:"span",size:"sm",get class(){return z(T)},children:(D,C)=>{H();var k=W();y(()=>G(k,z(u))),A(D,k)},$$slots:{default:!0}})}},$$slots:{default:!0}})},$$slots:{default:!0}});var K=Z(E,2);U(K,{maxWidth:"100%",children:(d,h)=>{V(d,{children:(x,$)=>{F(x,{type:"body",tag:"span",size:"sm",class:"text-white opacity-40",children:(T,D)=>{H();var C=W();y(k=>G(C,k),[()=>(a(),n(S),_(()=>a()._(S.suspended)))]),A(T,C)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),I(v),I(b),y((d,h,x)=>{ae(b,"aria-label",(n(o()),_(()=>{var $;return o()==="suspended"?o():($=o())==null?void 0:$.name}))),O=B(b,1,d,"svelte-1xeyvyp",O,h),w=B(v,1,"outcome-content svelte-1xeyvyp",null,w,x)},[()=>me((n(g),n(o()),_(()=>g("outcome",o()==="suspended"?"inactive":"")))),()=>({isMulti:p()}),()=>({horizontal:N(),center:j()||q()})]),A(t,b),L(),m()}var xe=ne(function(t,e){for(var a=[],r=0,m=e.length;r<m;){for(var u=r+1;u<m&&t(e[u-1],e[u]);)u+=1;a.push(e.slice(r,u)),r=u}return a});const pe=(t,e)=>{if(t&&e)return Math.floor((new Date(e).setHours(0,0,0,0)-new Date(t).setHours(0,0,0,0))/ie)};function $e(t){return xe((e,a)=>{const{startTime:r}=M(e.data),{startTime:m}=M(a.data);return pe(r,m)===0},t)}const Ue=t=>{const e=f.sortBy(t,r=>{const{startTime:m}=M(r.data);return m?new Date(m).getTime():0});return $e(e).reduce((r,m)=>[...r,{fixture:m[0],__element:"GroupTime"},...m.map(u=>({fixture:u,__element:"Fixture"}))],[])},ke=["14","player","2","23","28","3","36","40","71","77","27","34","69","45","99","37","31"];function _e(t){if(ke.includes(t.extId))return t;const e=f.groupBy(t.markets,r=>r.name);return f.values(e).map(r=>({...t,markets:r}))}function Ve(t){const e=t.map(a=>_e(a));return f.flatten(e)}export{Fe as P,We as a,Be as b,fe as c,Ue as d,Ge as g,Ve as s};
