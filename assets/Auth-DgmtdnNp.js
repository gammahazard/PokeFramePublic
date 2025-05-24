import{u as y,a as j,b as v,r as o,j as e,N as k,d as t}from"./index-BBtjCGTq.js";const S=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #3a539b 0%, #1c295d 100%);
  color: white;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,A=t.div`
  background-color: rgba(10, 20, 50, 0.75);
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,I=t.h1`
  font-size: 2.2rem;
  margin-bottom: 8px;
  text-align: center;
  color: #ffcb05; /* Pokémon yellow */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
`,z=t.h2`
  font-size: 1.4rem;
  margin-bottom: 30px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  font-weight: normal;
`,D=t.div`
  margin-bottom: 24px;
  text-align: center;
  
  img {
    max-width: 80px;
    height: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
  }
`,f=t.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffcb05;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,d=t.div`
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 16px;
  max-width: 280px;
`,C=t.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 12px;
  margin-top: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  max-height: 200px;
  overflow-y: auto;
  word-break: break-all;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`,F=()=>{const{isAuthenticated:a,user:l,isMiniAppEnv:p}=y(),{isMiniApp:r,isInitializing:i,miniAppUser:x}=j();v();const[h,m]=o.useState({}),[s,b]=o.useState(!1),[c,u]=o.useState(null),n=sessionStorage.getItem("auth_redirect")||"/";return o.useEffect(()=>{const g=()=>{m({contextIsAuthenticated:a,contextUser:l,isMiniAppEnvironment:p,isMiniApp:r,miniAppUser:x,initializingStatus:i,redirectTo:n})};g();const w=setInterval(g,3e3);return()=>clearInterval(w)},[a,l,p,r,x,i,n]),o.useEffect(()=>{!i&&!r&&setTimeout(()=>{u("This app is only available within the Farcaster app.")},2e3)},[i,r]),a?(console.log("Already authenticated, redirecting to:",n),e.jsx(k,{to:n,replace:!0})):e.jsxs(S,{children:[e.jsx("div",{style:{position:"absolute",top:"10%",left:"15%",width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg, #ff0000 0%, #ff0000 48%, #ffffff 48%, #ffffff 52%, #ff0000 52%, #ff0000 100%)",boxShadow:"0 0 15px rgba(255, 0, 0, 0.3)",opacity:.15,animation:"float 8s infinite ease-in-out"}}),e.jsx("div",{style:{position:"absolute",bottom:"15%",right:"20%",width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg, #ff0000 0%, #ff0000 48%, #ffffff 48%, #ffffff 52%, #ff0000 52%, #ff0000 100%)",boxShadow:"0 0 20px rgba(255, 0, 0, 0.4)",opacity:.2,animation:"float 12s infinite ease-in-out",animationDelay:"2s"}}),e.jsx("style",{children:`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
      `}),e.jsxs(A,{children:[e.jsx(D,{children:e.jsx("img",{src:"/assets/images/gameboy.svg",alt:"Poke-Frame"})}),e.jsx(I,{children:"Poke-Frame"}),e.jsx(z,{children:"Pokémon Shin Blue"}),e.jsx("div",{style:{width:"100%",marginTop:"10px",marginBottom:"10px",textAlign:"center"},children:i?e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(d,{children:"Connecting to Farcaster..."})]}):c?e.jsx(d,{style:{color:"#ff6b6b"},children:c}):e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(d,{children:"Authenticating with Farcaster..."})]})}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"rgba(255, 203, 5, 0.1)",borderRadius:"10px",fontSize:"14px",textAlign:"center",maxWidth:"320px"},children:[e.jsx("p",{style:{marginBottom:"8px",color:"#ffcb05"},children:e.jsx("span",{style:{fontWeight:"bold"},children:"✨ Features ✨"})}),e.jsx("p",{style:{marginBottom:"4px",color:"white",opacity:.9},children:"• Save your game progress"}),e.jsx("p",{style:{marginBottom:"4px",color:"white",opacity:.9},children:"• Enhanced Pokémon game with bugfixes"}),e.jsx("p",{style:{marginBottom:"4px",color:"white",opacity:.9},children:"• Compare progress with friends"}),e.jsx("p",{style:{color:"white",opacity:.9},children:"• Mobile-optimized controls"})]}),e.jsx("div",{style:{marginTop:"30px",textAlign:"center"},children:e.jsx("button",{onClick:()=>b(!s),style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.15)",padding:"6px 12px",fontSize:"12px",cursor:"pointer",color:"rgba(255,255,255,0.6)",borderRadius:"6px",transition:"all 0.2s ease"},children:s?"Hide Debug Info":"Show Debug Info"})}),s&&e.jsxs(C,{children:[e.jsx("div",{children:"Debug Information:"}),e.jsx("pre",{children:JSON.stringify(h,null,2)})]})]})]})};export{F as default};
