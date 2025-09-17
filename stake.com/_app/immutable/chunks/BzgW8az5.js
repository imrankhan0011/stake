const t=(s,o)=>{const e=new ResizeObserver(([r])=>{r&&o(r.contentRect)});return e.observe(s),{destroy(){e.disconnect()}}};export{t as r};
