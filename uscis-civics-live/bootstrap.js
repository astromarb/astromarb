const base="https://cdn.jsdelivr.net/gh/astromarb/astromarb@main/uscis-civics-live/";
for (let i=1;i<=4;i++) await import(base+`bank${i}.js`);
const parts=await Promise.all(Array.from({length:5},(_,i)=>fetch(base+`app${i+1}.txt`).then(r=>{if(!r.ok)throw new Error(`runtime part ${i+1} failed`);return r.text()})));
const blob=new Blob([parts.join("")],{type:"text/javascript"});
const u=URL.createObjectURL(blob);
try{await import(u)}finally{URL.revokeObjectURL(u)}
