import{u as A,a as C,k as U,r as h,n as L,j as e,d as t,L as R}from"./index-BBtjCGTq.js";const v=t.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1c295d;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,I=t.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffcb05;
  text-align: center;
`,n=t.div`
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 8px;
`,o=t.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ffcb05;
  border-bottom: 1px solid rgba(255, 203, 5, 0.3);
  padding-bottom: 8px;
`,p=t.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 14px;
`,B=t.div`
  margin-bottom: 15px;
`,E=t.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`,N=t.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  margin-bottom: 5px;
`,a=t.button`
  background-color: #ffcb05;
  color: #1c295d;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffd74a;
  }
`,x=t(R)`
  display: inline-block;
  background-color: #3a539b;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: bold;
  margin-right: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a63ab;
  }
`,M=()=>{const{user:m,isAuthenticated:j}=A(),{isMiniApp:y,isFrame:k,isReady:F,miniAppUser:w,frameContext:b,safeAreaInsets:d}=C(),S=U(),[u,T]=h.useState("12345"),[g,D]=h.useState(""),[f,P]=h.useState(null);h.useEffect(()=>{const r=L();P(r)},[]);const c=(r,l=!1)=>{if(!u)return;const i=new URL(r,window.location.origin);i.searchParams.append("fid",u),i.searchParams.append("messageHash","test_message_hash_"+Date.now()),i.searchParams.append("trusted","true"),i.searchParams.append("buttonIndex","1"),l&&i.searchParams.append("showFrameDebug","true"),D(i.toString())},s=r=>r==null?"null":typeof r=="object"?"[object]":String(r);return e.jsxs(v,{children:[e.jsx(I,{children:"Farcaster Frame Authentication Test"}),e.jsxs(n,{children:[e.jsx(o,{children:"Current Authentication Status"}),e.jsx(p,{children:j?`✅ Authenticated as: ${s(m?.username)} (FID: ${s(m?.fid)})`:"❌ Not authenticated"})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Mini App Detection"}),e.jsxs(p,{children:["isMiniApp: ",y?"✅ True":"❌ False",`
`,"isFrame: ",k?"✅ True":"❌ False",`
`,"isReady: ",F?"✅ True":"❌ False",`
`,"miniAppUser: ",w?"✅ Present":"❌ Not set",d&&e.jsxs(e.Fragment,{children:[`

`,"Safe Area Insets:",`
`,"Top: ",s(d.top),`
`,"Bottom: ",s(d.bottom),`
`,"Left: ",s(d.left),`
`,"Right: ",s(d.right)]})]})]}),b&&e.jsxs(n,{children:[e.jsx(o,{children:"Frame SDK Context"}),e.jsx(p,{children:(()=>{try{return JSON.stringify(b,(r,l)=>typeof l=="function"?"[Function]":l instanceof Proxy?"[Proxy]":l,2)}catch(r){return"Error stringifying frame context: "+r}})()})]}),f&&e.jsxs(n,{children:[e.jsx(o,{children:"Detected Frame Parameters"}),e.jsx(p,{children:JSON.stringify(f,null,2)})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Generate Test URLs"}),e.jsxs(B,{children:[e.jsx(E,{htmlFor:"fid",children:"Test FID:"}),e.jsx(N,{id:"fid",type:"text",value:u,onChange:r=>T(r.target.value),placeholder:"Enter a Farcaster ID"})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx(a,{onClick:()=>c("/frame"),children:"Frame Test URL"}),e.jsx(a,{onClick:()=>c("/simple-play"),children:"SimplePlay Test URL"}),e.jsx(a,{onClick:()=>c("/auth"),children:"Auth Test URL"})]}),e.jsxs("div",{children:[e.jsx(a,{onClick:()=>c("/frame",!0),style:{backgroundColor:"#32a852"},children:"Frame URL + Debug"}),e.jsx(a,{onClick:()=>c("/simple-play",!0),style:{backgroundColor:"#32a852"},children:"SimplePlay URL + Debug"})]}),g&&e.jsxs(e.Fragment,{children:[e.jsx(p,{children:g}),e.jsx("div",{children:e.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:"10px",padding:"8px 15px",backgroundColor:"#ffcb05",color:"#1c295d",borderRadius:"4px",textDecoration:"none",fontWeight:"bold"},children:"Open Test URL in New Tab"})})]})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Quick Navigation"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(x,{to:"/",children:"Home"}),e.jsx(x,{to:"/frame",children:"Frame Entry"}),e.jsx(x,{to:"/simple-play",children:"Simple Play"}),e.jsx(x,{to:"/auth",children:"Auth Page"}),e.jsx(x,{to:"/debug",children:"Debugger"})]})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Debug Tools"}),e.jsx("div",{style:{marginBottom:"15px"},children:e.jsx(a,{onClick:()=>S.showDebugOverlay(),style:{backgroundColor:"#ff9900"},children:"Show Debug Overlay"})})]})]})};export{M as default};
