import"./QdAl6vsM.js";import{c as a}from"./C_BjuPOd.js";import{b as u}from"./rq92GsuN.js";import{c as i,f as c}from"./DAwu6uUM.js";const l=a(`
*[_type == "seo"
  && (__i18n_lang == $lang || language == $lang)
  && slug.current == $slug
][0]
  {
   ...,
   'thumbnail': {
      'asset': thumbnail.asset->{url}
    },
    "content": content[] { 
        ...,
        asset->{url, altText},
    },
    "hreflangList": select(
      (__i18n_lang == $defaultLanguage || language == $defaultLanguage) => hreflangList,
      defined(__i18n_base) => __i18n_base->hreflangList,
      *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $defaultLanguage][0].value->hreflangList
    )
  }
`),f=a(`
*[_type == "seo"
  && (__i18n_lang == $lang || language == $lang)
  && slug.current == $slug
][0]
  {
   description,
   title,
   content
  }
`),_=a(`
*[_type == "seo"
  && (__i18n_lang == $lang || language == $lang)
  && slug.current == $slug
][0]
  {
   description,
   title,
  }
`),m=(t,e)=>i()?f(t,e):l(t,e),L=(t,e)=>i()?_(t,e):l(t,e);async function S(t,e,r,o=m){try{const{lang:n}=t.params;let s=e;n&&e.startsWith(`/${n}/`)&&(s=u(e,n));const g=await o(t,{slug:s});return g?c(g):r}catch(n){return console.error("seo fetch failed",n),r}}export{m as a,S as f,L as g};
