import"./QdAl6vsM.js";import{c as m}from"./C_BjuPOd.js";import{w as u}from"./mJIF3ZvJ.js";const p=m(`
{
  "heroes": *[
    _type == "hero" 
    && language == $lang
    && isDisplayed != false
    && references(*[_type == 'category' && slug.current == $category]._id)
    && (dateRange.start == null || dateTime(now()) >= dateTime(dateRange.start))
    && (dateRange.end == null || dateTime(now()) <= dateTime(dateRange.end))
    && !(_id in path("drafts.**"))] | order(orderRank)
  {
    _id,
    buttonLink,
    link,
    title,
    description,
    'backgroundImage': {
      'asset': backgroundImage.asset->{url, altText}
    },
    'tag': {
      'name': tag->name,
      'icon': tag->icon
    }
  },
  "fallbackHeroes": select(
    $lang != $defaultLanguage => *[
      _type == "hero" 
      && language == $defaultLanguage
      && isDisplayed != false
      && references(*[_type == 'category' && slug.current == $category]._id)
      && (dateRange.start == null || dateTime(now()) >= dateTime(dateRange.start))
      && (dateRange.end == null || dateTime(now()) <= dateTime(dateRange.end))
      && !defined(*[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0])
      && !(_id in path("drafts.**"))] | order(orderRank)
    {
      _id,
      buttonLink,
      link,
      title,
      description,
      'backgroundImage': {
        'asset': backgroundImage.asset->{url, altText}
      },
      'tag': {
        'name': tag->name,
        'icon': tag->icon
      }
    },
    []
  )
}`),f=u([]),y=a=>{const r=a.split("?")[1];return new URLSearchParams(r).get("promotionType")},k=a=>{const r=a.reduce((e,t)=>{var o;const n=y(((o=t==null?void 0:t.buttonLink)==null?void 0:o.href)||"");return n==="race"||n==="giveaway"?e.map(s=>{var l,d,c;return s.type===n?{...s,imgUrl:((d=(l=t.backgroundImage)==null?void 0:l.asset)==null?void 0:d.url)||"",promoUrl:((c=t.link)==null?void 0:c.href)||""}:s}):e},[{type:"race",imgUrl:"",promoUrl:""},{type:"giveaway",imgUrl:"",promoUrl:""}]);f.set(r)},_=async(a,r)=>{const e=await p(a,{category:r}),t=(e==null?void 0:e.heroes)??[],n=(e==null?void 0:e.fallbackHeroes)??[],o=t.concat(n);return k(o),o},T=({casinoHeroes:a,fallbackCasinoHeroes:r,sportsHeroes:e,fallbackSportsHeroes:t})=>{const n=a??[],o=r??[],s=n.concat(o),l=e??[],d=t??[],c=l.concat(d),g=[];for(let i=0;i<3;i++)c[i]&&g.push(c[i]),s[i]&&g.push(s[i]);return g};export{T as c,_ as l,f as p};
