import{c as ne,I as Et,h as Lt,u as re,r as g,j as e,d as n,J as Ve,R as U,i as ae,k as Mt,K as $t,p as je,M as oe,O as ee,Q as At,T as Ct,b as It,a as Dt,s as de}from"./index-DGfY4rFx.js";const Bt="https://api.gummybera.com";function Ot(){const{address:t}=ne(),r=Et(),c=Lt(t),u=r.games.map(o=>({type:"games",id:o.id,name:o.gameInfo?.name||o.romName,image:o.gameInfo?.image,metadata:o.gameInfo?.metadata,owned:o.owned,available:o.gameInfo?.active||!1,price:o.gameInfo?.price,description:`Play ${o.romName.replace("_"," ").replace(/\\b\\w/g,d=>d.toUpperCase())}`})),i=c.userPokemon.map(o=>{const d=Nt(o),f=zt(o),s=Rt(o);return{type:"pokemon",id:o,name:`${d} #${o.toString().padStart(3,"0")}`,image:`https://img.pokemondb.net/artwork/large/${d.toLowerCase()}.jpg`,metadata:{attributes:[{trait_type:"Pokemon ID",value:o.toString().padStart(3,"0")},{trait_type:"Name",value:d},{trait_type:"Type",value:f},{trait_type:"Rarity",value:s},{trait_type:"Pokedex Number",display_type:"number",value:o}]},owned:!0,available:!1,description:`${f} Pokemon owned as NFT`}}),a=()=>{r.refetchOwned(),c.refetch()};return{games:u,pokemon:i,isLoading:r.isLoading||c.isLoading,error:null,refetch:a}}function Nt(t){return{1:"Bulbasaur",2:"Ivysaur",3:"Venusaur",4:"Charmander",5:"Charmeleon",6:"Charizard",7:"Squirtle",8:"Wartortle",9:"Blastoise",10:"Caterpie",11:"Metapod",12:"Butterfree",13:"Weedle",14:"Kakuna",15:"Beedrill",16:"Pidgey",17:"Pidgeotto",18:"Pidgeot",19:"Rattata",20:"Raticate",21:"Spearow",22:"Fearow",23:"Ekans",24:"Arbok",25:"Pikachu",26:"Raichu",27:"Sandshrew",28:"Sandslash",29:"Nidoran♀",30:"Nidorina",31:"Nidoqueen",32:"Nidoran♂",33:"Nidorino",34:"Nidoking",35:"Clefairy",36:"Clefable",37:"Vulpix",38:"Ninetales",39:"Jigglypuff",40:"Wigglytuff",41:"Zubat",42:"Golbat",43:"Oddish",44:"Gloom",45:"Vileplume",46:"Paras",47:"Parasect",48:"Venonat",49:"Venomoth",50:"Diglett",51:"Dugtrio",52:"Meowth",53:"Persian",54:"Psyduck",55:"Golduck",56:"Mankey",57:"Primeape",58:"Growlithe",59:"Arcanine",60:"Poliwag",61:"Poliwhirl",62:"Poliwrath",63:"Abra",64:"Kadabra",65:"Alakazam",66:"Machop",67:"Machoke",68:"Machamp",69:"Bellsprout",70:"Weepinbell",71:"Victreebel",72:"Tentacool",73:"Tentacruel",74:"Geodude",75:"Graveler",76:"Golem",77:"Ponyta",78:"Rapidash",79:"Slowpoke",80:"Slowbro",81:"Magnemite",82:"Magneton",83:"Farfetch'd",84:"Doduo",85:"Dodrio",86:"Seel",87:"Dewgong",88:"Grimer",89:"Muk",90:"Shellder",91:"Cloyster",92:"Gastly",93:"Haunter",94:"Gengar",95:"Onix",96:"Drowzee",97:"Hypno",98:"Krabby",99:"Kingler",100:"Voltorb",101:"Electrode",102:"Exeggcute",103:"Exeggutor",104:"Cubone",105:"Marowak",106:"Hitmonlee",107:"Hitmonchan",108:"Lickitung",109:"Koffing",110:"Weezing",111:"Rhyhorn",112:"Rhydon",113:"Chansey",114:"Tangela",115:"Kangaskhan",116:"Horsea",117:"Seadra",118:"Goldeen",119:"Seaking",120:"Staryu",121:"Starmie",122:"Mr. Mime",123:"Scyther",124:"Jynx",125:"Electabuzz",126:"Magmar",127:"Pinsir",128:"Tauros",129:"Magikarp",130:"Gyarados",131:"Lapras",132:"Ditto",133:"Eevee",134:"Vaporeon",135:"Jolteon",136:"Flareon",137:"Porygon",138:"Omanyte",139:"Omastar",140:"Kabuto",141:"Kabutops",142:"Aerodactyl",143:"Snorlax",144:"Articuno",145:"Zapdos",146:"Moltres",147:"Dratini",148:"Dragonair",149:"Dragonite",150:"Mewtwo",151:"Mew"}[t]||`Pokemon #${t}`}function zt(t){return{1:"Grass",2:"Grass",3:"Grass",4:"Fire",5:"Fire",6:"Fire",7:"Water",8:"Water",9:"Water",10:"Bug",11:"Bug",12:"Bug",13:"Bug",14:"Bug",15:"Bug",16:"Normal",17:"Normal",18:"Normal",19:"Normal",20:"Normal",21:"Normal",22:"Normal",23:"Poison",24:"Poison",25:"Electric",26:"Electric",27:"Ground",28:"Ground",29:"Poison",30:"Poison",31:"Poison",32:"Poison",33:"Poison",34:"Poison",35:"Fairy",36:"Fairy",37:"Fire",38:"Fire",39:"Normal",40:"Normal",41:"Poison",42:"Poison",43:"Grass",44:"Grass",45:"Grass",46:"Bug",47:"Bug",48:"Bug",49:"Bug",50:"Ground",51:"Ground",52:"Normal",53:"Normal",54:"Water",55:"Water",56:"Fighting",57:"Fighting",58:"Fire",59:"Fire",60:"Water",61:"Water",62:"Water",63:"Psychic",64:"Psychic",65:"Psychic",66:"Fighting",67:"Fighting",68:"Fighting",69:"Grass",70:"Grass",71:"Grass",72:"Water",73:"Water",74:"Rock",75:"Rock",76:"Rock",77:"Fire",78:"Fire",79:"Water",80:"Water",81:"Electric",82:"Electric",83:"Normal",84:"Normal",85:"Normal",86:"Water",87:"Water",88:"Poison",89:"Poison",90:"Water",91:"Water",92:"Ghost",93:"Ghost",94:"Ghost",95:"Rock",96:"Psychic",97:"Psychic",98:"Water",99:"Water",100:"Electric",101:"Electric",102:"Grass",103:"Grass",104:"Ground",105:"Ground",106:"Fighting",107:"Fighting",108:"Normal",109:"Poison",110:"Poison",111:"Ground",112:"Ground",113:"Normal",114:"Grass",115:"Normal",116:"Water",117:"Water",118:"Water",119:"Water",120:"Water",121:"Water",122:"Psychic",123:"Bug",124:"Ice",125:"Electric",126:"Fire",127:"Bug",128:"Normal",129:"Water",130:"Water",131:"Water",132:"Normal",133:"Normal",134:"Water",135:"Electric",136:"Fire",137:"Normal",138:"Rock",139:"Rock",140:"Rock",141:"Rock",142:"Rock",143:"Normal",144:"Ice",145:"Electric",146:"Fire",147:"Dragon",148:"Dragon",149:"Dragon",150:"Psychic",151:"Psychic"}[t]||"Unknown"}function Rt(t){return[144,145,146,150,151].includes(t)?"Legendary":[1,2,3,4,5,6,7,8,9,25].includes(t)?"Starter":[65,68,76,94,103,130,131,142,143,149].includes(t)?"Rare":t<=50&&![1,2,3,4,5,6,7,8,9,25].includes(t)?"Common":"Uncommon"}function Wt(){const{user:t,quickAuthToken:r}=re(),{address:c}=ne(),[u,i]=g.useState(null),[a,o]=g.useState(!1),[d,f]=g.useState(null),s=async()=>{if(!t||!r){f("Authentication required for Browse All");return}if(!c){f("Wallet connection required for ownership indicators");return}o(!0),f(null);try{const k=new URLSearchParams;k.append("walletAddress",c);const p=`${Bt}/api/marketplace/browse-all${k.toString()?`?${k.toString()}`:""}`,m=await fetch(p,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}});if(!m.ok)throw new Error(`Browse All request failed: ${m.status} ${m.statusText}`);const x=await m.json();if(x.success)i(x.data),console.log(`✅ Browse All: Loaded ${x.data.totalCount} NFTs (${x.data.userOwned} mine, ${x.data.othersOwned} others)`);else throw new Error("Browse All request was not successful")}catch(k){console.error("❌ Browse All fetch error:",k),f(k instanceof Error?k.message:"Failed to fetch Browse All data")}finally{o(!1)}};return g.useEffect(()=>{s()},[t,r,c]),{data:u,isLoading:a,error:d,refetch:s}}const Gt=n.div`
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 4px;
  gap: 4px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 16px;
`,Ce=n.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  
  background: ${t=>t.$disabled?"rgba(255, 255, 255, 0.05)":t.$isActive?"rgba(255, 255, 255, 0.25)":"transparent"};
  
  color: ${t=>t.$disabled?"rgba(255, 255, 255, 0.4)":t.$isActive?"white":"rgba(255, 255, 255, 0.7)"};
  
  border: ${t=>t.$disabled?"2px solid rgba(255, 255, 255, 0.1)":t.$isActive?"2px solid rgba(255, 255, 255, 0.4)":"2px solid transparent"};
  
  &:hover {
    background: ${t=>t.$disabled?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.2)"};
    color: ${t=>t.$disabled?"rgba(255, 255, 255, 0.4)":"white"};
  }
  
  &:active {
    transform: ${t=>t.$disabled?"none":"scale(0.98)"};
  }
`,Te=n.span`
  font-size: 16px;
  margin-right: 8px;
`,Se=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Pe=n.div`
  font-size: 14px;
  font-weight: 600;
`,Fe=n.div`
  font-size: 11px;
  opacity: 0.8;
  margin-top: 2px;
`,_t=n.div`
  font-size: 10px;
  background: rgba(251, 191, 36, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 6px;
  margin-top: 2px;
  font-weight: 600;
`;function Ut({activeScope:t,onScopeChange:r,myCollectionCount:c=0,totalCount:u=0,targetUser:i}){return e.jsxs(Gt,{children:[e.jsx(Ce,{$isActive:t==="my-collection",onClick:()=>r("my-collection"),children:e.jsxs(Se,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"📱"}),e.jsx(Pe,{children:"My Collection"})]}),e.jsxs(Fe,{children:[c," items"]})]})}),e.jsx(Ce,{$isActive:t==="browse-all",onClick:()=>r("browse-all"),children:e.jsxs(Se,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"🌍"}),e.jsx(Pe,{children:"Browse All"})]}),e.jsx(Fe,{children:u>0?`${u} total`:"All NFTs"})]})}),i&&e.jsx(Ce,{$isActive:t==="user-profile",$disabled:!0,onClick:()=>{},children:e.jsxs(Se,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"👤"}),e.jsx(Pe,{children:"User Profile"})]}),e.jsxs(Fe,{children:["@",i]}),e.jsx(_t,{children:"Coming Soon"})]})})]})}const Ht=n.div`
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 4px;
  gap: 4px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`,qe=n.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${t=>t.$isDisabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;
  
  /* Enhanced mobile touch handling */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  
  /* Ensure minimum touch target size for mobile */
  min-height: 44px;
  min-width: 44px;
  
  background: ${t=>t.$isDisabled?"rgba(107, 114, 128, 0.3)":t.$isActive?"rgba(255, 255, 255, 0.25)":"transparent"};
  
  color: ${t=>t.$isDisabled?"rgba(255, 255, 255, 0.4)":t.$isActive?"white":"rgba(255, 255, 255, 0.7)"};
  
  border: ${t=>t.$isDisabled?"2px solid rgba(107, 114, 128, 0.4)":t.$isActive?"2px solid rgba(255, 255, 255, 0.4)":"2px solid transparent"};
  
  /* Mobile-specific hover states */
  @media (hover: hover) {
    &:hover {
      background: ${t=>t.$isDisabled?"rgba(107, 114, 128, 0.3)":"rgba(255, 255, 255, 0.2)"};
      color: ${t=>t.$isDisabled?"rgba(255, 255, 255, 0.4)":"white"};
    }
  }
  
  /* Touch feedback for mobile */
  &:active {
    transform: ${t=>t.$isDisabled?"none":"scale(0.98)"};
    background: ${t=>t.$isDisabled?"rgba(107, 114, 128, 0.3)":"rgba(255, 255, 255, 0.3)"};
  }
  
  /* Prevent double-tap zoom on iOS */
  @media (max-width: 768px) {
    &:focus {
      outline: none;
    }
  }
`,Ye=n.span`
  font-size: 18px;
  margin-right: 8px;
`,Ke=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Qe=n.div`
  font-size: 14px;
  font-weight: 600;
`,Je=n.div`
  font-size: 11px;
  opacity: 0.8;
  margin-top: 2px;
`,Vt=n.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;function qt({activeCollection:t,onCollectionChange:r,gameCount:c=0,pokemonCount:u=0,isBrowseAll:i=!1}){const a=i;return e.jsxs(Ht,{children:[e.jsxs(qe,{$isActive:t==="games",$isDisabled:a,onClick:()=>{a||r("games")},children:[e.jsxs(Ke,{children:[e.jsxs("div",{children:[e.jsx(Ye,{children:"🎮"}),e.jsx(Qe,{children:"Game Access NFTs"})]}),e.jsx(Je,{children:a?"Coming Soon":`${c} Games`})]}),a&&e.jsx(Vt,{children:"Coming Soon"})]}),e.jsx(qe,{$isActive:t==="pokemon",onClick:()=>r("pokemon"),children:e.jsxs(Ke,{children:[e.jsxs("div",{children:[e.jsx(Ye,{children:"🐛"}),e.jsx(Qe,{children:"Pokemon Collection"})]}),e.jsxs(Je,{children:[u," Pokemon"]})]})})]})}const Yt=n.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`,Kt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Qt=n.div`
  flex: 1;
  min-width: 200px;
  position: relative;
`,Jt=n.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.3s ease;
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
  }
  
  &:not(:placeholder-shown) {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(59, 130, 246, 0.1);
  }
`,Xt=n.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Ee=n.select`
  padding: 10px 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 13px;
  min-width: 120px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  
  option {
    background: #1a1a1a;
    color: white;
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.02);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.15);
  }
`,Le=n.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`,Zt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  min-height: 24px;
`,en=Ve`
  from {
    opacity: 0;
    transform: translateX(-10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`,tn=n.div`
  background: rgba(59, 130, 246, 0.8);
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${en} 0.2s ease-out;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 1);
    transform: scale(1.05);
  }
`,nn=n.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.7;
  }
`,rn=n.button`
  background: rgba(239, 68, 68, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,xe=n.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,He={search:"",rarity:"all",type:"all",status:"all"},an=["Electric","Fire","Water","Grass","Normal","Flying","Bug","Poison","Ground","Rock","Fighting","Psychic","Ghost","Ice","Dragon","Dark","Steel","Fairy"],sn=["Starter","Common","Uncommon","Rare","Legendary"];function on({activeCollection:t,filters:r,onFiltersChange:c,resultCount:u=0}){const i=(p,m)=>{c({...r,[p]:m})},a=p=>{i(p,p==="search"?"":"all")},o=()=>{c(He)},f=(()=>{const p=[];return r.search&&p.push({key:"search",label:"Search",value:r.search}),r.rarity!=="all"&&p.push({key:"rarity",label:"Rarity",value:r.rarity}),r.type!=="all"&&p.push({key:"type",label:"Type",value:r.type}),r.status!=="all"&&p.push({key:"status",label:"Status",value:r.status}),p})(),s=()=>t==="games"?[{value:"all",label:"All Games"},{value:"owned",label:"Owned Games"}]:[{value:"all",label:"All Pokemon"},{value:"owned",label:"Owned NFTs"}],k=()=>t==="games"?"Search games...":"Search Pokemon name or #ID...";return e.jsxs(Yt,{children:[e.jsxs(Kt,{children:[e.jsxs(Qt,{children:[e.jsx(Xt,{children:"🔍"}),e.jsx(Jt,{type:"text",placeholder:k(),value:r.search,onChange:p=>i("search",p.target.value)})]}),t==="pokemon"&&e.jsxs(e.Fragment,{children:[e.jsxs(Le,{children:[e.jsx(xe,{children:"Rarity:"}),e.jsxs(Ee,{value:r.rarity,onChange:p=>i("rarity",p.target.value),children:[e.jsx("option",{value:"all",children:"All Rarities"}),sn.map(p=>e.jsx("option",{value:p,children:p},p))]})]}),e.jsxs(Le,{children:[e.jsx(xe,{children:"Type:"}),e.jsxs(Ee,{value:r.type,onChange:p=>i("type",p.target.value),children:[e.jsx("option",{value:"all",children:"All Types"}),an.map(p=>e.jsx("option",{value:p,children:p},p))]})]})]}),e.jsxs(Le,{children:[e.jsx(xe,{children:"Status:"}),e.jsx(Ee,{value:r.status,onChange:p=>i("status",p.target.value),children:s().map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))})]})]}),f.length>0&&e.jsxs(Zt,{children:[e.jsx(xe,{children:"Active:"}),f.map(p=>e.jsxs(tn,{children:[p.label,": ",p.value,e.jsx(nn,{onClick:()=>a(p.key),children:"×"})]},p.key)),e.jsx(rn,{onClick:o,children:"Clear All"})]})]})}const ln=n.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`,cn=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,dn=n.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
`,pn=n.span`
  font-size: 20px;
`,un=n.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,gn=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`,fe=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`,he=n.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
`,me=n.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Xe=n.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
`,Ze=n.div`
  height: 100%;
  background: ${t=>t.$color||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border-radius: 3px;
  width: ${t=>t.$percentage}%;
  transition: width 0.5s ease;
`,xn=n.div`
  overflow: hidden;
  max-height: ${t=>t.$isExpanded?"500px":"0"};
  transition: max-height 0.3s ease;
`,Me=n.div`
  margin-bottom: 16px;
`,Ae=n.h4`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,Ie=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,De=n.div`
  background: ${t=>t.$color||"rgba(107, 114, 128, 0.8)"};
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`,Be=n.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
`,fn=t=>{switch(t.toLowerCase()){case"legendary":return"linear-gradient(135deg, #fbbf24, #f59e0b)";case"starter":return"linear-gradient(135deg, #ef4444, #dc2626)";case"rare":return"linear-gradient(135deg, #8b5cf6, #7c3aed)";case"uncommon":return"linear-gradient(135deg, #06b6d4, #0891b2)";case"common":return"rgba(107, 114, 128, 0.8)";default:return"rgba(107, 114, 128, 0.8)"}},hn=t=>({Electric:"rgba(251, 191, 36, 0.8)",Fire:"rgba(239, 68, 68, 0.8)",Water:"rgba(59, 130, 246, 0.8)",Grass:"rgba(34, 197, 94, 0.8)",Normal:"rgba(107, 114, 128, 0.8)",Flying:"rgba(168, 85, 247, 0.8)",Bug:"rgba(132, 204, 22, 0.8)",Poison:"rgba(147, 51, 234, 0.8)",Ground:"rgba(217, 119, 6, 0.8)",Rock:"rgba(120, 113, 108, 0.8)",Fighting:"rgba(185, 28, 28, 0.8)",Psychic:"rgba(236, 72, 153, 0.8)",Ghost:"rgba(88, 28, 135, 0.8)",Ice:"rgba(14, 165, 233, 0.8)",Dragon:"rgba(101, 163, 13, 0.8)",Dark:"rgba(64, 64, 64, 0.8)",Steel:"rgba(100, 116, 139, 0.8)",Fairy:"rgba(244, 114, 182, 0.8)"})[t]||"rgba(107, 114, 128, 0.8)";function mn({nfts:t,filteredNfts:r,activeCollection:c}){const[u,i]=U.useState(!1),a=t.filter(x=>x.owned).length,o=c==="pokemon"?151:4,d=o>0?a/o*100:0,f=r.filter(x=>x.owned).length,s=r.length,k=c==="games"?t.filter(x=>x.owned).reduce((x,l)=>x+(l.price?Number(l.price)/1e18:0),0):0,p=U.useMemo(()=>{if(c!=="pokemon")return{};const x={};return t.forEach(l=>{if(l.owned){const b=l.metadata?.attributes?.find($=>$.trait_type==="Rarity")?.value||"Unknown";x[b]=(x[b]||0)+1}}),x},[t,c]),m=U.useMemo(()=>{if(c!=="pokemon")return{};const x={};return t.forEach(l=>{if(l.owned){const b=l.metadata?.attributes?.find($=>$.trait_type==="Type")?.value||"Unknown";x[b]=(x[b]||0)+1}}),x},[t,c]);return e.jsxs(ln,{children:[e.jsxs(cn,{children:[e.jsxs(dn,{children:[e.jsx(pn,{children:"📊"}),"Collection Stats"]}),e.jsx(un,{$isExpanded:u,onClick:()=>i(!u),children:u?"Hide Details":"Show Details"})]}),e.jsxs(gn,{children:[e.jsxs(fe,{children:[e.jsxs(he,{children:[a,"/",o]}),e.jsx(me,{children:c==="pokemon"?"Pokemon Collected":"Games Owned"}),e.jsx(Xe,{children:e.jsx(Ze,{$percentage:d,$color:"linear-gradient(135deg, #10b981, #059669)"})})]}),e.jsxs(fe,{children:[e.jsxs(he,{children:[d.toFixed(1),"%"]}),e.jsx(me,{children:"Collection Complete"}),e.jsx(Xe,{children:e.jsx(Ze,{$percentage:d,$color:"linear-gradient(135deg, #667eea, #764ba2)"})})]}),s!==t.length&&e.jsxs(fe,{children:[e.jsxs(he,{children:[f,"/",s]}),e.jsx(me,{children:"Filtered Results"})]}),c==="games"&&k>0&&e.jsxs(fe,{children:[e.jsxs(he,{children:[k.toFixed(3)," ETH"]}),e.jsx(me,{children:"Collection Value"})]})]}),e.jsxs(xn,{$isExpanded:u,children:[c==="pokemon"&&e.jsxs(e.Fragment,{children:[Object.keys(p).length>0&&e.jsxs(Me,{children:[e.jsx(Ae,{children:"🏆 Rarity Breakdown"}),e.jsx(Ie,{children:Object.entries(p).sort(([,x],[,l])=>l-x).map(([x,l])=>e.jsxs(De,{$color:fn(x),children:[x,e.jsx(Be,{children:l})]},x))})]}),Object.keys(m).length>0&&e.jsxs(Me,{children:[e.jsx(Ae,{children:"🎯 Type Distribution"}),e.jsx(Ie,{children:Object.entries(m).sort(([,x],[,l])=>l-x).map(([x,l])=>e.jsxs(De,{$color:hn(x),children:[x,e.jsx(Be,{children:l})]},x))})]})]}),c==="games"&&e.jsxs(Me,{children:[e.jsx(Ae,{children:"🎮 Game Collection"}),e.jsx(Ie,{children:t.map(x=>e.jsxs(De,{$color:x.owned?"rgba(34, 197, 94, 0.8)":"rgba(107, 114, 128, 0.8)",children:[x.name,e.jsx(Be,{children:x.owned?"✓":"✗"})]},x.id))})]})]})]})}function bn(t,r,c){return g.useMemo(()=>{let u=[...t];if(r.search.trim()){const i=r.search.toLowerCase().trim();u=u.filter(a=>!!(a.name.toLowerCase().includes(i)||c==="pokemon"&&a.id.toString().padStart(3,"0").includes(i.replace("#",""))))}return r.rarity!=="all"&&c==="pokemon"&&(u=u.filter(i=>i.metadata?.attributes?.find(o=>o.trait_type==="Rarity")?.value===r.rarity)),r.type!=="all"&&c==="pokemon"&&(u=u.filter(i=>i.metadata?.attributes?.find(o=>o.trait_type==="Type")?.value===r.type)),r.status!=="all"&&(u=u.filter(i=>{switch(r.status){case"owned":return i.owned;case"available":return i.available&&!i.owned;default:return!0}})),u},[t,r,c])}const yn=n.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-2px);
  }
`,kn=n.div`
  width: 100%;
  height: 120px;
  border-radius: 12px;
  margin-bottom: 12px;
  background: ${t=>t.$imageUrl?`url(${t.$imageUrl})`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
`,wn=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vn=n.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: white;
  text-align: center;
  line-height: 1.2;
`,jn=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
`,Oe=n.span`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  
  background: ${t=>{switch(t.$variant){case"type":return"rgba(59, 130, 246, 0.8)";case"rarity":return"rgba(147, 51, 234, 0.8)";case"game":return"rgba(34, 197, 94, 0.8)";case"status":return"rgba(251, 191, 36, 0.8)";default:return"rgba(107, 114, 128, 0.8)"}}};
  
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
`,$n=n.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 4px;
  
  background: ${t=>{switch(t.$status){case"mint":return"linear-gradient(135deg, #10B981, #059669)";case"owned":return"linear-gradient(135deg, #6366F1, #4F46E5)";case"locked":return"linear-gradient(135deg, #6B7280, #4B5563)"}}};
  
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`,et=n.div`
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
`,Cn=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`,Tn=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #10B981;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 6px;
  padding: 4px 8px;
`,Sn=n.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  border-radius: 8px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2px;
`,Pn=n.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #F59E0B, #D97706);
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  min-width: 24px;
  text-align: center;
  z-index: 2;
`,Fn=t=>({Electric:"⚡",Fire:"🔥",Water:"💧",Grass:"🌱",Normal:"⚪",Flying:"🕊️",Bug:"🐛",Poison:"☠️",Ground:"🌍",Rock:"🗿",Fighting:"👊",Psychic:"🔮",Ghost:"👻",Ice:"❄️",Dragon:"🐉",Dark:"🌙",Steel:"⚙️",Fairy:"🧚"})[t]||"❓",En=t=>{if(t.type==="games")return{type:null,rarity:null,game:null};const r=t.metadata?.attributes||[],c=r.find(a=>a.trait_type==="Type")?.value,u=r.find(a=>a.trait_type==="Rarity")?.value,i=r.find(a=>a.trait_type==="Game")?.value;return{type:c,rarity:u,game:i}};function Ln({nft:t,onClick:r,onAction:c}){const{type:u,rarity:i,game:a}=En(t),o=()=>t.type==="games"?t.owned?{status:"owned",text:"Owned"}:{status:"locked",text:"Purchase Coming Soon"}:t.owned?{status:"owned",text:"Owned"}:t.available?{status:"mint",text:"Mint"}:{status:"locked",text:"Locked"},{status:d,text:f}=o(),s=()=>{t.type==="games"?c?.(t.owned?"view":"purchase"):c?.(t.owned?"view":"mint")},k=p=>p?`${(Number(p)/1e18).toFixed(3)} ETH`:"";return e.jsxs(yn,{onClick:r,children:[e.jsxs(kn,{$imageUrl:t.image,children:[!t.image&&(t.type==="games"?"🎮":"🐛"),t.userQuantity&&t.userQuantity>1&&e.jsxs(Pn,{children:[t.userQuantity,"x"]}),t.hasActiveListings&&e.jsxs(Sn,{children:["🏪 ",t.totalListings]})]}),e.jsxs(wn,{children:[e.jsx(vn,{children:t.name}),e.jsxs(jn,{children:[u&&e.jsxs(Oe,{$variant:"type",children:[Fn(u)," ",u]}),i&&e.jsx(Oe,{$variant:"rarity",children:i}),a&&e.jsx(Oe,{$variant:"game",children:a.replace("Pokemon ","")})]}),e.jsx($n,{$status:d,onClick:p=>{p.stopPropagation(),s()},disabled:d==="locked",children:f}),t.price&&e.jsx(et,{children:k(t.price)}),t.type==="pokemon"&&(t.floorPrice||t.hasActiveListings)&&e.jsxs(Cn,{children:[t.floorPrice&&e.jsxs(Tn,{children:["📊 Floor: ",t.floorPrice," ETH"]}),t.hasActiveListings&&t.totalListings&&e.jsxs(et,{children:[t.totalListings," listing",t.totalListings!==1?"s":""," available"]})]})]})]})}const Ne=n.div`
  width: 100%;
`,Mn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 4px;
`,An=n.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`,In=n.select`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  option {
    background: #1a1a1a;
    color: white;
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Tt=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dn=Ve`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,ze=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  opacity: ${t=>t.$isVisible?1:0};
  animation: ${t=>t.$isVisible?Tt:Dn} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`,Bn=n.div`
  animation: ${Tt} 0.4s ease-out;
  animation-delay: ${t=>t.$delay}ms;
  animation-fill-mode: both;
`,On=n.div`
  text-align: center;
  padding: 40px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  grid-column: 1 / -1;
`,Nn=n.div`
  text-align: center;
  padding: 40px 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  grid-column: 1 / -1;
`,zn=n.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 12px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;function Rn({nfts:t,isLoading:r=!1,sortBy:c="id",onSortChange:u,onNFTClick:i,onNFTAction:a}){const[o,d]=g.useState(!0),[f,s]=g.useState(t);g.useEffect(()=>{if((()=>{if(t.length!==f.length)return!0;for(let b=0;b<t.length;b++){const $=t[b],y=f[b];if($.type!==y.type||$.id!==y.id||$.name!==y.name||$.owned!==y.owned||$.available!==y.available||$.description!==y.description||$.price?.toString()!==y.price?.toString())return!0}return!1})()){d(!1);const b=setTimeout(()=>{s(t),d(!0)},150);return()=>clearTimeout(b)}},[t,f]);const k=f.length,p=f.filter(l=>l.owned).length,m=f.filter(l=>l.available&&!l.owned).length,x=U.useMemo(()=>[...f].sort((l,b)=>{switch(c){case"id":return l.id-b.id;case"name":return l.name.localeCompare(b.name);case"rarity":{const $=["Common","Uncommon","Rare","Epic","Legendary","Starter"],y=l.metadata?.attributes?.find(I=>I.trait_type==="Rarity")?.value||"Common",w=b.metadata?.attributes?.find(I=>I.trait_type==="Rarity")?.value||"Common";return $.indexOf(y)-$.indexOf(w)}case"type":{const $=l.metadata?.attributes?.find(w=>w.trait_type==="Type")?.value||"",y=b.metadata?.attributes?.find(w=>w.trait_type==="Type")?.value||"";return $.localeCompare(y)}case"status":return l.owned&&!b.owned?-1:!l.owned&&b.owned?1:l.available&&!b.available?-1:!l.available&&b.available?1:0;default:return 0}}),[f,c]);return r?e.jsx(Ne,{children:e.jsx(ze,{children:e.jsxs(Nn,{children:[e.jsx(zn,{}),"Loading NFTs..."]})})}):f.length===0&&o?e.jsx(Ne,{children:e.jsx(ze,{$isVisible:!0,children:e.jsxs(On,{children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🔍"}),"No NFTs found",e.jsx("div",{style:{fontSize:"14px",marginTop:"8px",opacity:.7},children:"Try adjusting your filters or check back later"})]})})}):e.jsxs(Ne,{children:[e.jsxs(Mn,{children:[e.jsxs(An,{children:[k," items • ",p," owned • ",m," available"]}),u&&e.jsxs(In,{value:c,onChange:l=>u(l.target.value),children:[e.jsx("option",{value:"id",children:"Sort by ID"}),e.jsx("option",{value:"name",children:"Sort by Name"}),e.jsx("option",{value:"rarity",children:"Sort by Rarity"}),e.jsx("option",{value:"type",children:"Sort by Type"}),e.jsx("option",{value:"status",children:"Sort by Status"})]})]}),e.jsx(ze,{$isVisible:o,children:x.map((l,b)=>e.jsx(Bn,{$delay:b*50,children:e.jsx(Ln,{nft:l,onClick:()=>i?.(l),onAction:$=>a?.(l,$)})},`${l.type}-${l.id}`))})]})}const V="0x920773E19F50d773fEdf80c8A5F84096d4B459Da",K=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"duration",type:"uint256"}],name:"createListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"}],name:"cancelListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"}],name:"purchaseFromListing",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"}],name:"getListing",outputs:[{components:[{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"pokemonId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"createdAt",type:"uint256"}],internalType:"struct PokemonMarketplace.Listing",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"}],name:"calculatePurchaseBreakdown",outputs:[{internalType:"uint256",name:"totalPrice",type:"uint256"},{internalType:"uint256",name:"platformFee",type:"uint256"},{internalType:"uint256",name:"sellerEarnings",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdrawEarnings",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pokemonId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"ListingCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pokemonId",type:"uint256"}],name:"ListingCancelled",type:"event"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"uint256",name:"newPrice",type:"uint256"},{internalType:"uint256",name:"newDuration",type:"uint256"}],name:"updateListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"uint256",name:"duration",type:"uint256"}],name:"makeOffer",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"offerId",type:"uint256"}],name:"acceptOffer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"offerId",type:"uint256"}],name:"cancelOffer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserOffers",outputs:[{components:[{internalType:"uint256",name:"offerId",type:"uint256"},{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"address",name:"buyer",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"createdAt",type:"uint256"}],internalType:"struct PokemonMarketplace.Offer[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"listingId",type:"uint256"}],name:"getListingOffers",outputs:[{components:[{internalType:"uint256",name:"offerId",type:"uint256"},{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"address",name:"buyer",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"createdAt",type:"uint256"}],internalType:"struct PokemonMarketplace.Offer[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"limit",type:"uint256"}],name:"getActiveListingsPaginated",outputs:[{components:[{internalType:"uint256",name:"listingId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"pokemonId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"createdAt",type:"uint256"}],internalType:"struct PokemonMarketplace.Listing[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"newPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newExpiresAt",type:"uint256"}],name:"ListingUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"offerId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"OfferMade",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"offerId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OfferAccepted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"offerId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"}],name:"OfferCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"listingId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pokemonId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"platformFee",type:"uint256"}],name:"ListingPurchased",type:"event"}],St="0x852Da07BD30f2671f5247a34b9a88dd4e6428da3",Wn=[7,14,30],q=.001,Y=1e3,Pt=[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}];function Gn(t,r){return $t({address:St,abi:Pt,functionName:"getApproved",args:t!==void 0?[BigInt(t)]:void 0,query:{enabled:t!==void 0&&r!==void 0}})}function _n(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{approveNFT:async a=>t({address:St,abi:Pt,functionName:"approve",args:[V,BigInt(a)]}),hash:r,isPending:c,error:u}}function Un(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{createListing:async a=>{const o=parseFloat(a.pricePerNFT);if(o<q||o>Y)throw new Error(`Price must be between ${q} and ${Y} ETH`);const d=a.duration*24*60*60;return t({address:V,abi:K,functionName:"createListing",args:[BigInt(a.tokenId),je(a.pricePerNFT),BigInt(d)]})},hash:r,isPending:c,error:u}}function Hn(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{cancelListing:async a=>t({address:V,abi:K,functionName:"cancelListing",args:[BigInt(a)]}),hash:r,isPending:c,error:u}}function Vn(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{purchaseListing:async(a,o)=>{const d=je(o);return t({address:V,abi:K,functionName:"purchaseFromListing",args:[BigInt(a)],value:d})},hash:r,isPending:c,error:u}}function te(t){return Mt({hash:t,query:{enabled:!!t}})}function $e(){return{validatePrice:i=>{if(!i||i.trim()==="")return{isValid:!1,error:"Price is required"};const a=parseFloat(i);return isNaN(a)?{isValid:!1,error:"Invalid price format"}:a<q?{isValid:!1,error:`Minimum price is ${q} ETH`}:a>Y?{isValid:!1,error:`Maximum price is ${Y} ETH`}:{isValid:!0}},formatPriceForDisplay:i=>oe(i),calculatePlatformFee:i=>(parseFloat(i)*.025).toFixed(6),calculateSellerProceeds:i=>{const a=parseFloat(i),o=a*.025;return(a-o).toFixed(6)}}}function qn(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{updateListing:async a=>{const{listingId:o,newPrice:d,newDuration:f}=a;if(d!==void 0){const p=parseFloat(d);if(p<q||p>Y)throw new Error(`Price must be between ${q} and ${Y} ETH`)}const s=d?je(d):0n,k=f?f*24*60*60:0;return t({address:V,abi:K,functionName:"updateListing",args:[BigInt(o),s,BigInt(k)]})},hash:r,isPending:c,error:u}}function Yn(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{makeOffer:async a=>{const{listingId:o,offerAmount:d,duration:f}=a,s=parseFloat(d);if(s<q||s>Y)throw new Error(`Offer must be between ${q} and ${Y} ETH`);const k=f*24*60*60,p=je(d);return t({address:V,abi:K,functionName:"makeOffer",args:[BigInt(o),BigInt(k)],value:p})},hash:r,isPending:c,error:u}}function Kn(){const{writeContract:t,data:r,isPending:c,error:u}=ae();return{acceptOffer:async a=>t({address:V,abi:K,functionName:"acceptOffer",args:[BigInt(a)]}),hash:r,isPending:c,error:u}}function Ft(t){return $t({address:V,abi:K,functionName:"getListingOffers",args:t!==void 0?[BigInt(t)]:void 0,query:{enabled:t!==void 0,refetchInterval:3e4}})}const Qn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
  }
`,Jn=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`,Xn=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`,Zn=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,er=n.div`
  padding: 20px;
`,be=n.div`
  margin-bottom: 20px;
`,ye=n.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
`,tr=n.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${t=>t.$hasError?"#EF4444":"rgba(255, 255, 255, 0.3)"};
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${t=>t.$hasError?"#EF4444":"#10B981"};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`,tt=n.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #10B981;
  }
  
  option {
    background: #4B5563;
    color: white;
  }
`,nr=n.div`
  color: #FCA5A5;
  font-size: 12px;
  margin-top: 4px;
`,rr=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`,ar=n.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #10B981;
`,ke=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }
`,Re=n.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: ${t=>t.$completed?"rgba(16, 185, 129, 0.2)":t.$active?"rgba(59, 130, 246, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: 1px solid ${t=>t.$completed?"#10B981":t.$active?"#3B82F6":"rgba(255, 255, 255, 0.2)"};
`,We=n.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${t=>t.$completed?"#10B981":t.$active?"#3B82F6":"rgba(255, 255, 255, 0.3)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 12px;
  font-weight: bold;
`,Ge=n.div`
  flex: 1;
  font-size: 14px;
`,ir=n.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`,nt=n.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid ${t=>t.$variant==="secondary"?"#6B7280":"#10B981"};
  background: ${t=>t.$variant==="secondary"?"transparent":"linear-gradient(135deg, #10B981, #059669)"};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${t=>t.$variant==="secondary"?"rgba(255, 255, 255, 0.1)":"linear-gradient(135deg, #059669, #047857)"};
    transform: translateY(-1px);
  }
`,rt=n.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;function sr({pokemon:t,isOpen:r,onClose:c,onListingCreated:u,availableTokenIds:i=[]}){const[a,o]=g.useState("form"),[d,f]=g.useState(""),[s,k]=g.useState(1),[p,m]=g.useState(7),[x,l]=g.useState(null),{quickAuthToken:b}=re(),{address:$}=ne(),{createListing:y,hash:w,isPending:I,error:L}=Un(),{data:S,isLoading:P}=te(w),{validatePrice:E,calculatePlatformFee:F,calculateSellerProceeds:O}=$e(),{data:T}=Gn(x||void 0,$),{approveNFT:A,hash:N,isPending:B,error:z}=_n(),{data:v,isLoading:R}=te(N),G=E(d),H=G.isValid&&s>0&&x!==null,Q=T&&T.toLowerCase()===V.toLowerCase(),le=d?(parseFloat(d)*s).toFixed(6):"0",ie=d?F(d):"0",ce=d?O(d):"0";g.useEffect(()=>{r&&t&&(o("form"),f(""),k(1),m(7),l(i.length>0?i[0]:null))},[r,t,i]),g.useEffect(()=>{v&&v.status==="success"&&M()},[v]),g.useEffect(()=>{S&&S.status==="success"&&D()},[S]);const h=C=>{try{if(!C?.logs)return null;for(const _ of C.logs)try{const ge=At({abi:K,data:_.data,topics:_.topics,eventName:"ListingCreated"});if(ge.eventName==="ListingCreated")return Number(ge.args.listingId)}catch{continue}return null}catch(_){return console.error("Error parsing listing ID from receipt:",_),null}},D=async()=>{o("success");try{const C=h(S);if(C||console.warn("Could not parse listing ID from transaction receipt"),b&&t){const _="https://api.gummybera.com",se=await(await ee.authenticatedFetch(`${_}/api/marketplace/createListing`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pokemonId:t.id,quantity:s,pricePerNFT:d,duration:p,walletAddress:$,selectedTokenId:x,skipOwnershipValidation:!0,contractTransactionHash:w})},b,1)).json();if(console.log("🔍 [SmartContractListingModal] Database listing creation response:",se),!se.success){console.error("❌ [SmartContractListingModal] Database listing creation failed:",se.error),alert(`❌ LISTING FAILED: ${se.error}

You can only list Pokemon you actually own. Check the "Mine" filter in Browse All to see your Pokemon.`),o("form");return}se.success&&C&&await ee.authenticatedFetch(`${_}/api/marketplace/listings/${se.data.listingId}/contract`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractListingId:C,transactionHash:w})},b,1),console.log("✅ [SmartContractListingModal] Database listing created successfully, notifying parent")}u({pokemonId:t?.id,tokenId:x,quantity:s,pricePerNFT:d,duration:p,totalValue:le,contractListingId:C,transactionHash:w}),setTimeout(()=>{c()},3e3)}catch(C){console.error("Error updating database after contract listing:",C)}},j=async()=>{if(!(!H||!t||!x))try{Q?M():(o("approval"),await A(x))}catch(C){console.error("Error in approve and list process:",C),o("form")}},M=async()=>{if(!(!H||!t||!x))try{o("listing"),await y({tokenId:x,pricePerNFT:d,duration:p})}catch(C){console.error("Error creating contract listing:",C),o("form")}},W=()=>{a==="listing"||I||P||c()};return!r||!t?null:e.jsx(Qn,{$isOpen:r,onClick:C=>C.target===C.currentTarget&&W(),children:e.jsxs(Jn,{children:[e.jsxs(Xn,{children:[e.jsxs("h3",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:["List ",t.name," for Sale"]}),e.jsx(Zn,{onClick:W,children:"×"})]}),e.jsxs(er,{children:[a==="form"&&e.jsxs(e.Fragment,{children:[e.jsxs(be,{children:[e.jsx(ye,{children:"Price per NFT (ETH)"}),e.jsx(tr,{type:"number",step:"0.001",min:"0.001",max:"1000",placeholder:"0.010",value:d,onChange:C=>f(C.target.value),$hasError:!G.isValid}),!G.isValid&&G.error&&e.jsx(nr,{children:G.error})]}),e.jsxs(be,{children:[e.jsx(ye,{children:"Listing Duration"}),e.jsx(tt,{value:p,onChange:C=>m(Number(C.target.value)),children:Wn.map(C=>e.jsxs("option",{value:C,children:[C," days"]},C))})]}),i.length>1&&e.jsxs(be,{children:[e.jsx(ye,{children:"Select NFT to List (Token ID)"}),e.jsxs(tt,{value:x||"",onChange:C=>l(Number(C.target.value)),children:[e.jsx("option",{value:"",children:"Select a token..."}),i.map(C=>e.jsxs("option",{value:C,children:["Token #",C]},C))]})]}),i.length===1&&x&&e.jsxs(be,{children:[e.jsx(ye,{children:"NFT Token ID"}),e.jsxs("div",{style:{padding:"12px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"8px",border:"2px solid rgba(255, 255, 255, 0.3)",color:"white",fontSize:"16px"},children:["Token #",x]})]}),i.length===0&&e.jsx("div",{style:{background:"rgba(239, 68, 68, 0.2)",border:"1px solid #EF4444",borderRadius:"8px",padding:"12px",color:"#FCA5A5",fontSize:"14px"},children:"⚠️ No NFT tokens available for listing. You may not own any of this Pokemon."}),H&&e.jsxs(rr,{children:[e.jsx(ar,{children:"💰 Listing Summary"}),e.jsxs(ke,{children:[e.jsx("span",{children:"Price per NFT:"}),e.jsxs("span",{children:[d," ETH"]})]}),e.jsxs(ke,{children:[e.jsx("span",{children:"Quantity:"}),e.jsxs("span",{children:[s," NFT"]})]}),e.jsxs(ke,{children:[e.jsx("span",{children:"Platform Fee (2.5%):"}),e.jsxs("span",{children:[ie," ETH"]})]}),e.jsxs(ke,{children:[e.jsx("span",{children:"You'll Receive:"}),e.jsxs("span",{children:[ce," ETH"]})]})]}),e.jsxs(ir,{children:[e.jsx(nt,{$variant:"secondary",onClick:W,children:"Cancel"}),e.jsx(nt,{onClick:j,disabled:!H,children:Q?"Create Listing":"Approve & List"})]})]}),a==="approval"&&e.jsxs(e.Fragment,{children:[e.jsxs(Re,{$active:!0,$completed:!1,children:[e.jsx(We,{$active:!0,$completed:!1,children:e.jsx(rt,{})}),e.jsx(Ge,{children:B?"Approving NFT for marketplace...":"Waiting for approval confirmation..."})]}),e.jsx("div",{style:{textAlign:"center",padding:"20px 0"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.8},children:"Step 1 of 2: Please approve your NFT for marketplace trading"})})]}),(a==="listing"||I||P)&&e.jsxs(e.Fragment,{children:[e.jsxs(Re,{$active:!0,$completed:!1,children:[e.jsx(We,{$active:!0,$completed:!1,children:e.jsx(rt,{})}),e.jsx(Ge,{children:I?"Creating marketplace listing...":"Waiting for confirmation..."})]}),e.jsx("div",{style:{textAlign:"center",padding:"20px 0"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.8},children:"Step 2 of 2: Please confirm the listing transaction in your wallet"})})]}),a==="success"&&e.jsxs(e.Fragment,{children:[e.jsxs(Re,{$active:!1,$completed:!0,children:[e.jsx(We,{$active:!1,$completed:!0,children:"✓"}),e.jsx(Ge,{children:"Listing created successfully!"})]}),e.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[e.jsxs("p",{style:{margin:0,fontSize:"16px",fontWeight:"600",color:"#10B981"},children:["🎉 Your ",t.name," is now listed for sale!"]}),e.jsx("p",{style:{margin:"8px 0 0 0",fontSize:"14px",opacity:.8},children:"This modal will close automatically..."})]})]}),(L||z)&&e.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.2)",border:"1px solid #EF4444",borderRadius:"8px",padding:"12px",margin:"12px 0",color:"#FCA5A5"},children:["Error: ",(L||z)?.message]})]})]})})}const or=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1001; // Higher than PokemonDetailModal
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
  }
`,lr=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`,cr=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`,dr=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,pr=n.div`
  padding: 20px;
`,ur=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,at=n.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,J=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,X=n.span`
  font-size: 14px;
  opacity: 0.8;
`,Z=n.span`
  font-size: 14px;
  font-weight: 600;
`,gr=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,xr=n.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,it=n.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,st=n.label`
  font-size: 14px;
  font-weight: 600;
  color: white;
`,fr=n.input`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 12px;
  font-size: 14px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(16, 185, 129, 0.6);
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,hr=n.select`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 12px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: rgba(16, 185, 129, 0.6);
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  option {
    background: #1a1a1a;
    color: white;
  }
`,mr=n.div`
  color: #EF4444;
  font-size: 12px;
  margin-top: 4px;
`,ot=n.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin-top: 4px;
`,br=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,we=n.button`
  background: ${t=>{switch(t.$variant){case"update":return"linear-gradient(135deg, #10B981, #059669)";case"edit":return"linear-gradient(135deg, #3B82F6, #1D4ED8)";case"cancel":return"linear-gradient(135deg, #EF4444, #DC2626)";default:return"linear-gradient(135deg, #EF4444, #DC2626)"}}};
  border: 2px solid ${t=>{switch(t.$variant){case"update":return"#10B981";case"edit":return"#3B82F6";case"cancel":return"#EF4444";default:return"#EF4444"}}};
  border-radius: 12px;
  color: white;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${t=>{switch(t.$variant){case"update":return"rgba(16, 185, 129, 0.3)";case"edit":return"rgba(59, 130, 246, 0.3)";case"cancel":return"rgba(239, 68, 68, 0.3)";default:return"rgba(239, 68, 68, 0.3)"}}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,lt=n.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,yr=n.div`
  background: ${t=>t.$type==="success"?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)"};
  border: 1px solid ${t=>t.$type==="success"?"#10B981":"#EF4444"};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: white;
`;function kr({pokemon:t,currentListing:r,isOpen:c,onClose:u,onListingCancelled:i,onListingUpdated:a}){const[o,d]=g.useState(!1),[f,s]=g.useState(null),[k,p]=g.useState(!1),[m,x]=g.useState(""),[l,b]=g.useState(""),[$,y]=g.useState(""),{quickAuthToken:w}=re(),{validatePrice:I}=$e(),{cancelListing:L,hash:S,isPending:P,error:E}=Hn(),{updateListing:F,hash:O,isPending:T,error:A}=qn(),{data:N,isLoading:B}=te(S),{data:z,isLoading:v}=te(O);U.useEffect(()=>{c&&r&&(s(null),p(!1),x(""),b(""),y(""))},[c,r]),U.useEffect(()=>{N&&(N.status==="success"?H():N.status==="reverted"&&(s({type:"error",message:"Contract cancellation failed. Transaction was reverted."}),d(!1)))},[N]),U.useEffect(()=>{z&&(z.status==="success"?Q():z.status==="reverted"&&(s({type:"error",message:"Contract update failed. Transaction was reverted."}),d(!1)))},[z]),U.useEffect(()=>{E&&(s({type:"error",message:`Contract error: ${E.message}`}),d(!1))},[E]),U.useEffect(()=>{A&&(s({type:"error",message:`Update error: ${A.message}`}),d(!1))},[A]);const R=()=>{o||(s(null),u())},G=j=>{j.target===j.currentTarget&&!o&&R()},H=async()=>{if(!r||!w){s({type:"error",message:"Missing listing data or authentication"}),d(!1);return}try{const M=await ee.authenticatedFetch(`https://api.gummybera.com/api/marketplace/listings/${r.listingId}`,{method:"DELETE",headers:{"Content-Type":"application/json"}},w,1),W=await M.json();if(!M.ok)throw new Error(W.error||`Failed to cancel listing: ${M.statusText}`);if(!W.success)throw new Error(W.error||"Failed to cancel listing");console.log("✅ Listing cancelled successfully:",W.data),s({type:"success",message:"Listing cancelled successfully!"}),i(W.data),setTimeout(()=>{R()},1500)}catch(j){console.error("❌ Error cancelling listing in database:",j),s({type:"error",message:"Contract cancelled but database update failed. Please refresh the page."})}finally{d(!1)}},Q=async()=>{if(!r||!w){s({type:"error",message:"Missing listing data or authentication"}),d(!1);return}try{const j="https://api.gummybera.com",M={};m&&(M.pricePerNFT=m),l&&(M.duration=l);const W=await ee.authenticatedFetch(`${j}/api/marketplace/listings/${r.listingId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)},w,1),C=await W.json();if(!W.ok)throw new Error(C.error||`Failed to update listing: ${W.statusText}`);if(!C.success)throw new Error(C.error||"Failed to update listing");console.log("✅ Listing updated successfully:",C.data),s({type:"success",message:"Listing updated successfully!"}),a&&a(C.data),setTimeout(()=>{R()},1500)}catch(j){console.error("❌ Error updating listing in database:",j),s({type:"error",message:"Contract updated but database sync failed. Please refresh the page."})}finally{d(!1)}},le=j=>{if(x(j),j){const M=I(j);y(M.isValid?"":M.error||"")}else y("")},ie=async j=>{if(j.preventDefault(),!r||!w){s({type:"error",message:"Missing listing data or authentication"});return}if(!m&&!l){s({type:"error",message:"Please change either price or duration"});return}if(m){const M=I(m);if(!M.isValid){y(M.error||"Invalid price");return}}d(!0),s(null);try{r.contractListingId?(console.log("🔗 Updating contract listing:",r.contractListingId),await F({listingId:r.contractListingId,newPrice:m||void 0,newDuration:typeof l=="number"?l:void 0})):(console.log("📄 Database-only listing, updating directly"),await Q())}catch(M){console.error("❌ Error updating listing:",M),s({type:"error",message:M instanceof Error?M.message:"Failed to update listing"}),d(!1)}},ce=async()=>{if(!r||!w){s({type:"error",message:"Missing listing data or authentication"});return}d(!0),s(null);try{r.contractListingId?(console.log("🔗 Cancelling contract listing:",r.contractListingId),await L(r.contractListingId)):(console.log("📄 Database-only listing, cancelling directly"),await H())}catch(j){console.error("❌ Error cancelling listing:",j),s({type:"error",message:j instanceof Error?j.message:"Failed to cancel listing"})}finally{r?.contractListingId||d(!1)}},h=j=>new Date(j).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),D=(j,M)=>j>0?`${j} day${j!==1?"s":""} remaining`:M>0?`${M} hour${M!==1?"s":""} remaining`:"Expires soon";return!c||!t||!r?null:e.jsx(or,{$isOpen:c,onClick:G,children:e.jsxs(lr,{children:[e.jsxs(cr,{children:[e.jsx("h2",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:k?"✏️ Edit Listing":"📝 Manage Listing"}),e.jsx(dr,{onClick:R,disabled:o,children:"×"})]}),e.jsxs(pr,{children:[f&&e.jsx(yr,{$type:f.type,children:f.message}),e.jsxs(ur,{children:[e.jsx(at,{children:"🏪 Current Listing Details"}),e.jsxs(J,{children:[e.jsx(X,{children:"Pokemon:"}),e.jsx(Z,{children:r.pokemonName})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Quantity:"}),e.jsxs(Z,{children:[r.quantity," NFT",r.quantity!==1?"s":""]})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Price per NFT:"}),e.jsxs(Z,{children:[r.pricePerNFT," ETH"]})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Total Value:"}),e.jsxs(Z,{children:[r.totalValue," ETH"]})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Time Remaining:"}),e.jsx(Z,{children:D(r.daysRemaining,r.hoursRemaining)})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Listed:"}),e.jsx(Z,{children:h(r.createdAt)})]}),e.jsxs(J,{children:[e.jsx(X,{children:"Expires:"}),e.jsx(Z,{children:h(r.expiresAt)})]})]}),k&&e.jsxs(gr,{children:[e.jsx(at,{children:"✏️ Update Listing"}),e.jsxs(xr,{onSubmit:ie,children:[e.jsxs(it,{children:[e.jsx(st,{children:"New Price (ETH) - Optional"}),e.jsx(fr,{type:"text",placeholder:`Current: ${r.pricePerNFT} ETH`,value:m,onChange:j=>le(j.target.value),disabled:o||T||v}),$&&e.jsx(mr,{children:$}),e.jsx(ot,{children:"Leave empty to keep current price"})]}),e.jsxs(it,{children:[e.jsx(st,{children:"Extend Duration - Optional"}),e.jsxs(hr,{value:l,onChange:j=>b(j.target.value?parseInt(j.target.value):""),disabled:o||T||v,children:[e.jsx("option",{value:"",children:"Keep current duration"}),e.jsx("option",{value:7,children:"Extend by 7 days"}),e.jsx("option",{value:14,children:"Extend by 14 days"}),e.jsx("option",{value:30,children:"Extend by 30 days"})]}),e.jsx(ot,{children:"Extension will be added from now, not from original expiry"})]})]})]}),e.jsx(br,{children:k?e.jsxs(e.Fragment,{children:[e.jsx(we,{$variant:"update",disabled:o||T||v||!m&&!l,onClick:ie,children:T||v||o?e.jsxs(e.Fragment,{children:[e.jsx(lt,{}),T?"Updating on contract...":v?"Waiting for confirmation...":"Updating database..."]}):"💾 Update Listing"}),e.jsx(we,{$variant:"cancel",disabled:o||T||v,onClick:()=>{p(!1),x(""),b(""),y("")},children:"❌ Cancel Edit"})]}):e.jsxs(e.Fragment,{children:[e.jsx(we,{$variant:"edit",disabled:o,onClick:()=>p(!0),children:"✏️ Edit Listing"}),e.jsx(we,{$variant:"cancel",disabled:o||P||B,onClick:ce,children:P||B||o?e.jsxs(e.Fragment,{children:[e.jsx(lt,{}),P?"Cancelling on contract...":B?"Waiting for confirmation...":"Updating database..."]}):"🗑️ Cancel Listing"})]})})]})]})})}const wr=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1002; // Higher than PokemonDetailModal
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
  }
`,vr=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`,jr=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`,$r=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Cr=n.div`
  padding: 20px;
`,Tr=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`,Sr=n.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px 0;
`,Pr=n.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 12px;
`,Fr=n.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,ct=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dt=n.label`
  font-size: 14px;
  font-weight: 600;
  color: white;
`,Er=n.input`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 12px;
  font-size: 16px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(16, 185, 129, 0.6);
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Lr=n.select`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 12px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: rgba(16, 185, 129, 0.6);
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  option {
    background: #1a1a1a;
    color: white;
  }
`,Mr=n.div`
  color: #EF4444;
  font-size: 12px;
  margin-top: 4px;
`,pt=n.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin-top: 4px;
`,Ar=n.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
`,ut=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,gt=n.span`
  font-size: 14px;
  opacity: 0.8;
`,xt=n.span`
  font-size: 14px;
  font-weight: 600;
`,Ir=n.button`
  background: linear-gradient(135deg, #10B981, #059669);
  border: 2px solid #10B981;
  border-radius: 12px;
  color: white;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Dr=n.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Br=n.div`
  background: ${t=>t.$type==="success"?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)"};
  border: 1px solid ${t=>t.$type==="success"?"#10B981":"#EF4444"};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: white;
`;function Or({pokemon:t,listingId:r,isOpen:c,onClose:u,onSuccess:i}){const[a,o]=g.useState(""),[d,f]=g.useState(7),[s,k]=g.useState(!1),[p,m]=g.useState(null),[x,l]=g.useState(""),{quickAuthToken:b}=re(),{address:$}=ne(),{validatePrice:y}=$e(),{data:w}=Ct({address:$}),{makeOffer:I,hash:L,isPending:S,error:P}=Yn(),{data:E,isLoading:F}=te(L);g.useEffect(()=>{c&&(o(""),f(7),m(null),l(""),k(!1))},[c]),g.useEffect(()=>{E&&(E.status==="success"?(m({type:"success",message:"Offer submitted successfully!"}),i&&i({offerAmount:a,duration:d,hash:L}),setTimeout(()=>{O()},2e3)):E.status==="reverted"&&m({type:"error",message:"Offer transaction failed. Transaction was reverted."}),k(!1))},[E]),g.useEffect(()=>{P&&(m({type:"error",message:`Contract error: ${P.message}`}),k(!1))},[P]);const O=()=>{s||(m(null),u())},T=B=>{B.target===B.currentTarget&&!s&&O()},A=B=>{if(o(B),B){const z=y(B);l(z.isValid?"":z.error||"")}else l("")},N=async B=>{if(B.preventDefault(),!t||!r||!b||!$){m({type:"error",message:"Missing required data or authentication"});return}if(!a){l("Offer amount is required");return}const z=y(a);if(!z.isValid){l(z.error||"Invalid offer amount");return}if(w&&parseFloat(a)>parseFloat(oe(w.value))){l("Insufficient ETH balance");return}k(!0),m(null);try{console.log("💰 Making offer:",{listingId:r,offerAmount:a,duration:d}),await I({listingId:r,offerAmount:a,duration:d})}catch(v){console.error("❌ Error making offer:",v),m({type:"error",message:v instanceof Error?v.message:"Failed to make offer"}),k(!1)}};return!c||!t?null:e.jsx(wr,{$isOpen:c,onClick:T,children:e.jsxs(vr,{children:[e.jsxs(jr,{children:[e.jsx("h2",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:"💰 Make Offer"}),e.jsx($r,{onClick:O,disabled:s,children:"×"})]}),e.jsxs(Cr,{children:[p&&e.jsx(Br,{$type:p.type,children:p.message}),e.jsxs(Tr,{children:[e.jsx(Pr,{src:`https://img.pokemondb.net/artwork/large/${t.name.split(" ")[0].toLowerCase().replace(/[^a-z]/g,"")}.jpg`,alt:t.name,onError:B=>{B.currentTarget.src="/assets/images/pokeball.png"}}),e.jsx(Sr,{children:t.name})]}),e.jsxs(Ar,{children:[e.jsxs(ut,{children:[e.jsx(gt,{children:"Your ETH Balance:"}),e.jsx(xt,{children:w?`${parseFloat(oe(w.value)).toFixed(4)} ETH`:"Loading..."})]}),t.userQuantity&&e.jsxs(ut,{children:[e.jsx(gt,{children:"You Own:"}),e.jsxs(xt,{children:[t.userQuantity," NFT",t.userQuantity!==1?"s":""]})]})]}),e.jsxs(Fr,{onSubmit:N,children:[e.jsxs(ct,{children:[e.jsx(dt,{children:"Offer Amount (ETH) *"}),e.jsx(Er,{type:"text",placeholder:"0.1",value:a,onChange:B=>A(B.target.value),disabled:s||S||F,required:!0}),x&&e.jsx(Mr,{children:x}),e.jsx(pt,{children:"Your offer will be held in escrow until accepted or expired"})]}),e.jsxs(ct,{children:[e.jsx(dt,{children:"Offer Duration *"}),e.jsxs(Lr,{value:d,onChange:B=>f(parseInt(B.target.value)),disabled:s||S||F,required:!0,children:[e.jsx("option",{value:1,children:"1 day"}),e.jsx("option",{value:3,children:"3 days"}),e.jsx("option",{value:7,children:"7 days"}),e.jsx("option",{value:14,children:"14 days"}),e.jsx("option",{value:30,children:"30 days"})]}),e.jsx(pt,{children:"Your offer will automatically expire after this duration"})]}),e.jsx(Ir,{type:"submit",disabled:s||S||F||!a||!!x,children:S||F||s?e.jsxs(e.Fragment,{children:[e.jsx(Dr,{}),S?"Submitting offer...":F?"Waiting for confirmation...":"Processing..."]}):"💰 Submit Offer"})]})]})]})})}const Nr=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1002; // Higher than PokemonDetailModal
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
  }
`,zr=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`,Rr=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`,Wr=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Gr=n.div`
  padding: 20px;
`,_r=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`,Ur=n.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`,Hr=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Vr=n.div`
  background: ${t=>t.$isExpired?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.1)"};
  border: 1px solid ${t=>t.$isExpired?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
  padding: 16px;
  opacity: ${t=>t.$isExpired?.6:1};
`,qr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,Yr=n.div`
  font-size: 20px;
  font-weight: bold;
  color: #10B981;
`,Kr=n.div`
  background: ${t=>t.$status==="active"?"linear-gradient(135deg, #10B981, #059669)":"linear-gradient(135deg, #6B7280, #4B5563)"};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`,Qr=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,_e=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`,Ue=n.span`
  opacity: 0.8;
`,ft=n.span`
  font-weight: 600;
`,Jr=n.span`
  font-family: 'Courier New', monospace;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
`,Xr=n.button`
  background: linear-gradient(135deg, #10B981, #059669);
  border: 2px solid #10B981;
  border-radius: 8px;
  color: white;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,ht=n.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Zr=n.div`
  background: ${t=>t.$type==="success"?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)"};
  border: 1px solid ${t=>t.$type==="success"?"#10B981":"#EF4444"};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: white;
`,ea=n.div`
  text-align: center;
  padding: 40px 20px;
  opacity: 0.7;
`,ta=n.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;function na({pokemon:t,listingId:r,isOpen:c,onClose:u,onOfferAccepted:i}){const[a,o]=g.useState(null),[d,f]=g.useState(null),{quickAuthToken:s}=re(),{address:k}=ne(),{data:p,isLoading:m,refetch:x}=Ft(r),{acceptOffer:l,hash:b,isPending:$,error:y}=Kn(),{data:w,isLoading:I}=te(b);g.useEffect(()=>{c&&(o(null),f(null),r&&x())},[c,r]),g.useEffect(()=>{w&&(w.status==="success"?(o({type:"success",message:"Offer accepted successfully!"}),i&&i({offerId:d,hash:b}),x(),setTimeout(()=>{L()},2e3)):w.status==="reverted"&&o({type:"error",message:"Accept offer transaction failed. Transaction was reverted."}),f(null))},[w]),g.useEffect(()=>{y&&(o({type:"error",message:`Contract error: ${y.message}`}),f(null))},[y]);const L=()=>{d===null&&(o(null),u())},S=T=>{T.target===T.currentTarget&&d===null&&L()},P=async T=>{if(!t||!s||!k){o({type:"error",message:"Missing required data or authentication"});return}f(T),o(null);try{console.log("✅ Accepting offer:",T),await l(T)}catch(A){console.error("❌ Error accepting offer:",A),o({type:"error",message:A instanceof Error?A.message:"Failed to accept offer"}),f(null)}},E=T=>`${T.slice(0,6)}...${T.slice(-4)}`,F=T=>{const A=Math.floor(Date.now()/1e3),N=Number(T)-A;if(N<=0)return"Expired";const B=Math.floor(N/(24*60*60)),z=Math.floor(N%(24*60*60)/(60*60));return B>0?`${B}d ${z}h remaining`:z>0?`${z}h remaining`:`${Math.floor(N%3600/60)}m remaining`},O=T=>{const A=Math.floor(Date.now()/1e3);return Number(T)<=A};return!c||!t?null:e.jsx(Nr,{$isOpen:c,onClick:S,children:e.jsxs(zr,{children:[e.jsxs(Rr,{children:[e.jsx("h2",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:"👁️ View Offers"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(ta,{onClick:()=>x(),disabled:m,children:m?"⟳":"🔄"}),e.jsx(Wr,{onClick:L,disabled:d!==null,children:"×"})]})]}),e.jsxs(Gr,{children:[a&&e.jsx(Zr,{$type:a.type,children:a.message}),e.jsx(_r,{children:e.jsx(Ur,{children:t.name})}),m?e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"40px",gap:"12px"},children:[e.jsx(ht,{}),"Loading offers..."]}):!p||p.length===0?e.jsxs(ea,{children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"💰"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px"},children:"No offers yet"}),e.jsx("div",{style:{fontSize:"14px"},children:"When users make offers on your listing, they'll appear here."})]}):e.jsx(Hr,{children:p.map(T=>{const A=O(T.expiresAt),N=d===Number(T.offerId);return e.jsxs(Vr,{$isExpired:A,children:[e.jsxs(qr,{children:[e.jsxs(Yr,{children:[oe(T.amount)," ETH"]}),e.jsx(Kr,{$status:A?"expired":"active",children:A?"Expired":"Active"})]}),e.jsxs(Qr,{children:[e.jsxs(_e,{children:[e.jsx(Ue,{children:"From:"}),e.jsx(Jr,{children:E(T.buyer)})]}),e.jsxs(_e,{children:[e.jsx(Ue,{children:"Expires:"}),e.jsx(ft,{children:F(T.expiresAt)})]}),e.jsxs(_e,{children:[e.jsx(Ue,{children:"Created:"}),e.jsx(ft,{children:new Date(Number(T.createdAt)*1e3).toLocaleDateString()})]})]}),!A&&T.active&&e.jsx(Xr,{onClick:()=>P(Number(T.offerId)),disabled:N||d!==null,children:N?e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),$?"Accepting...":I?"Confirming...":"Processing..."]}):"✅ Accept Offer"})]},Number(T.offerId))})})]})]})})}const ra=n.div`
  position: relative;
  display: inline-block;
`,aa=n.button`
  background: linear-gradient(135deg, #10B981, #059669);
  border: 2px solid #10B981;
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  opacity: ${t=>t.$loading?.7:1};
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #059669, #047857);
    border-color: #059669;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,mt=n.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-top: 1.5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 6px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,ia=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$show?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1002;
  padding: 20px;
`,sa=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  color: white;
  text-align: center;
`,oa=n.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px 0;
  color: white;
`,la=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: left;
`,pe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }
`,ca=n.div`
  display: flex;
  gap: 12px;
`,bt=n.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid ${t=>t.$variant==="secondary"?"#6B7280":"#10B981"};
  background: ${t=>t.$variant==="secondary"?"transparent":"linear-gradient(135deg, #10B981, #059669)"};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${t=>t.$variant==="secondary"?"rgba(255, 255, 255, 0.1)":"linear-gradient(135deg, #059669, #047857)"};
    transform: translateY(-1px);
  }
`,da=n.div`
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid #EF4444;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  color: #FCA5A5;
  font-size: 14px;
`,pa=n.div`
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10B981;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  color: #10B981;
  font-size: 14px;
  text-align: center;
`;function ua({listingId:t,priceEth:r,sellerAddress:c,pokemonName:u,onSuccess:i,onError:a}){const[o,d]=g.useState(!1),[f,s]=g.useState("idle"),[k,p]=g.useState(null),{address:m}=ne(),{data:x}=Ct({address:m}),{purchaseListing:l,hash:b,isPending:$,error:y}=Vn(),{data:w,isLoading:I}=te(b),{calculatePlatformFee:L}=$e(),S=x?parseFloat(oe(x.value))>=parseFloat(r):!1,P=L(r),E=parseFloat(r)+parseFloat(P);g.useEffect(()=>{w&&(w.status==="success"?(s("success"),i?.({listingId:t,priceEth:r,transactionHash:b,pokemonName:u}),setTimeout(()=>{d(!1),s("idle")},3e3)):(s("error"),p("Transaction failed"),a?.({message:"Transaction failed"})))},[w,b,t,r,u,i,a]),g.useEffect(()=>{y&&(s("error"),p(y.message),a?.(y))},[y,a]);const F=()=>{if(!m){p("Please connect your wallet first");return}if(!S){p(`Insufficient balance. You need ${r} ETH`);return}if(m.toLowerCase()===c.toLowerCase()){p("Cannot buy your own listing");return}d(!0),p(null)},O=async()=>{try{s("pending"),await l(t,r)}catch(B){s("error"),p(B instanceof Error?B.message:"Purchase failed")}},T=()=>{d(!1),s("idle"),p(null)},A=$||I||f==="pending",N=A||!m||!S||f==="success";return e.jsxs(e.Fragment,{children:[e.jsxs(ra,{children:[e.jsxs(aa,{onClick:F,disabled:N,$loading:A,children:[A&&e.jsx(mt,{}),f==="success"?"✅ Purchased":`💰 Buy ${r} ETH`]}),k&&!o&&e.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"rgba(239, 68, 68, 0.9)",color:"white",padding:"8px",borderRadius:"4px",fontSize:"11px",marginTop:"4px",zIndex:1e3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:k})]}),e.jsx(ia,{$show:o,children:e.jsxs(sa,{children:[e.jsx(oa,{children:f==="success"?"🎉 Purchase Successful!":f==="pending"?"⏳ Processing Purchase...":"Confirm Purchase"}),f==="success"&&e.jsxs(pa,{children:["You successfully purchased ",u,"!",e.jsx("br",{}),e.jsxs("small",{children:["Transaction: ",b?.slice(0,10),"...",b?.slice(-8)]})]}),f==="error"&&k&&e.jsx(da,{children:k}),f==="idle"&&e.jsxs(e.Fragment,{children:[e.jsxs(la,{children:[e.jsxs(pe,{children:[e.jsx("span",{children:"Pokemon:"}),e.jsx("span",{children:u})]}),e.jsxs(pe,{children:[e.jsx("span",{children:"Price:"}),e.jsxs("span",{children:[r," ETH"]})]}),e.jsxs(pe,{children:[e.jsx("span",{children:"Platform Fee (2.5%):"}),e.jsxs("span",{children:[P," ETH"]})]}),e.jsxs(pe,{children:[e.jsx("span",{children:"Total Cost:"}),e.jsxs("span",{children:[E.toFixed(6)," ETH"]})]}),e.jsxs(pe,{children:[e.jsx("span",{children:"Your Balance:"}),e.jsxs("span",{children:[x?oe(x.value).slice(0,8):"0"," ETH"]})]})]}),e.jsxs(ca,{children:[e.jsx(bt,{$variant:"secondary",onClick:T,children:"Cancel"}),e.jsx(bt,{onClick:O,disabled:!S,children:S?"Confirm Purchase":"Insufficient Balance"})]})]}),f==="pending"&&e.jsxs("div",{style:{padding:"20px 0"},children:[e.jsx(mt,{style:{width:"24px",height:"24px",margin:"0 auto 12px"}}),e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.8},children:$?"Please confirm the transaction in your wallet...":"Waiting for blockchain confirmation..."})]})]})})]})}const ga=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${t=>t.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
  }
`,xa=n.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`,fa=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`,ha=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,ma=n.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,ba=n.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 12px;
`,ya=n.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,ka=n.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${t=>{switch(t.$rarity.toLowerCase()){case"legendary":return"linear-gradient(45deg, #FFD700, #FFA500)";case"rare":return"linear-gradient(45deg, #9333EA, #C084FC)";case"starter":return"linear-gradient(45deg, #059669, #10B981)";case"uncommon":return"linear-gradient(45deg, #2563EB, #60A5FA)";default:return"linear-gradient(45deg, #6B7280, #9CA3AF)"}}};
  margin-bottom: 12px;
`,wa=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
`,yt=n.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
`,kt=n.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`,wt=n.div`
  font-size: 12px;
  opacity: 0.8;
  text-transform: uppercase;
`,va=n.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 16px 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`,ja=n.div`
  padding: 0 20px 20px;
`,$a=n.div`
  background: ${t=>t.$hasActiveListings?"linear-gradient(135deg, #059669 0%, #10B981 100%)":t.$isCurrentUser?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border: ${t=>t.$hasActiveListings?"2px solid #10B981":t.$isCurrentUser?"2px solid #3B82F6":"1px solid rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  position: relative;
  cursor: ${t=>t.$hasActiveListings?"pointer":"default"}; // Future: clickable if has listings
  transition: all 0.2s ease;
  
  &:hover {
    background: ${t=>t.$hasActiveListings?"linear-gradient(135deg, #047857 0%, #059669 100%)":t.$isCurrentUser?"rgba(59, 130, 246, 0.4)":"rgba(255, 255, 255, 0.15)"};
  }
`,Ca=n.div`
  font-family: 'Courier New', monospace;
  font-size: 14px;
  margin-bottom: 8px;
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ta=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,Sa=n.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
`,Pa=n.div`
  background: #3B82F6;
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
`,Fa=n.div`
  background: #10B981;
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
`,Ea=n.div`
  background: #F59E0B;
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 4px;
`,ue=n.button`
  background: ${t=>{switch(t.$variant){case"secondary":return"linear-gradient(135deg, #3B82F6, #1D4ED8)";case"primary":default:return"linear-gradient(135deg, #10B981, #059669)"}}};
  border: 2px solid ${t=>{switch(t.$variant){case"secondary":return"#3B82F6";case"primary":default:return"#10B981"}}};
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    background: ${t=>{switch(t.$variant){case"secondary":return"linear-gradient(135deg, #1D4ED8, #1E40AF)";case"primary":default:return"linear-gradient(135deg, #059669, #047857)"}}};
    border-color: ${t=>{switch(t.$variant){case"secondary":return"#1D4ED8";case"primary":default:return"#059669"}}};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${t=>{switch(t.$variant){case"secondary":return"rgba(59, 130, 246, 0.3)";case"primary":default:return"rgba(16, 185, 129, 0.3)"}}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,La=n.div`
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
`,Ma=n.div`
  font-size: 12px;
  font-weight: 600;
  color: #10B981;
  margin-bottom: 6px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
`,ve=n.div`
  font-size: 11px;
  opacity: 0.9;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,vt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,Aa=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-size: 16px;
  
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 12px;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Ia=n.div`
  text-align: center;
  padding: 20px;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  color: white;
  margin: 20px;
`,Da=t=>`${t.slice(0,6)}...${t.slice(-4)}`,jt=({contractListingId:t})=>{const{data:r,isLoading:c}=Ft(t);if(c||!t||!r||r.length===0)return null;const u=r.filter(i=>{const a=Math.floor(Date.now()/1e3);return i.active&&Number(i.expiresAt)>a});return u.length===0?null:e.jsxs(Ea,{children:["💰 ",u.length," Offer",u.length!==1?"s":""]})};function Ba({pokemon:t,isOpen:r,onClose:c,onDataRefresh:u}){const[i,a]=g.useState(null),[o,d]=g.useState(!1),[f,s]=g.useState(null),[k,p]=g.useState(!1),[m,x]=g.useState(!1),[l,b]=g.useState(null),[$,y]=g.useState(!1),[w,I]=g.useState(!1),[L,S]=g.useState(!1),[P,E]=g.useState(void 0),{quickAuthToken:F}=re(),{address:O}=ne(),T=()=>i?i.ownershipDistribution.find(D=>D.isCurrentUser)?.tokenIds||[]:[],A=async h=>{if(F){y(!0);try{const D="https://api.gummybera.com",j=await ee.authenticatedFetch(`${D}/api/marketplace/my-listings/${h}`,{method:"GET",headers:{"Content-Type":"application/json"}},F,1),M=await j.json();console.log("🔍 [PokemonDetailModal] fetchUserListing response:",{status:j.status,ok:j.ok,data:M,url:`${D}/api/marketplace/my-listings/${h}`}),j.ok&&M.success?b(M.data):(console.warn("Failed to fetch user listing:",M.error),b({hasActiveListing:!1,listing:null}))}catch(D){console.error("Error fetching user listing:",D),b({hasActiveListing:!1,listing:null})}finally{y(!1)}}};g.useEffect(()=>{if(!r||!t){a(null),b(null),s(null);return}(async()=>{d(!0),s(null);try{if(!F)throw new Error("Authentication required");const D=t.id,j="https://api.gummybera.com",M=new URLSearchParams;O&&M.append("walletAddress",O);const W=await ee.authenticatedFetch(`${j}/api/marketplace/pokemon/${D}/details?${M}`,{method:"GET",headers:{"Content-Type":"application/json"}},F,1),C=await W.json();if(!W.ok)throw new Error(C.error||`Failed to fetch Pokemon details: ${W.statusText}`);if(!C.success)throw new Error(C.error||"Failed to fetch Pokemon details");a(C.data),await A(D)}catch(D){console.error("Error fetching Pokemon details:",D),s(D instanceof Error?D.message:"Failed to load Pokemon details")}finally{d(!1)}})()},[r,t,F,O]);const N=h=>{h.target===h.currentTarget&&c()},B=h=>{h.hasActiveListings&&console.log("Future: Open purchase modal for owner:",h.address)},z=async h=>{if(console.log("🚀 [PokemonDetailModal] Listing created successfully:",h),p(!1),u&&u(),console.log("🔄 [PokemonDetailModal] REFRESHING OWNERSHIP DATA for Pokemon:",t?.id),t){const D=async()=>{if(!(!F||!t))try{console.log("🔄 [PokemonDetailModal] Fetching fresh ownership data...");const M="https://api.gummybera.com",W=new URLSearchParams;O&&W.append("walletAddress",O),W.append("forceRefresh","true");const C=await ee.authenticatedFetch(`${M}/api/marketplace/pokemon/${t.id}/details?${W}`,{method:"GET",headers:{"Content-Type":"application/json"}},F,1),_=await C.json();C.ok&&_.success?(console.log("✅ [PokemonDetailModal] Fresh ownership data received:",_.data),a(_.data)):console.warn("❌ [PokemonDetailModal] Failed to refresh ownership data:",_.error)}catch(M){console.error("❌ [PokemonDetailModal] Error refreshing ownership data:",M)}},j=async()=>{console.log("🔄 [PokemonDetailModal] Refreshing user listing data..."),await A(t.id)};await Promise.all([D(),j()]),setTimeout(async()=>{console.log("🔄 [PokemonDetailModal] Retry refresh after 2s for Pokemon:",t.id),await Promise.all([D(),j()])},2e3),setTimeout(async()=>{console.log("🔄 [PokemonDetailModal] Final retry refresh after 5s for Pokemon:",t.id),await Promise.all([D(),j()])},5e3)}},v=()=>{if(!t||!i)return;if(!i.ownershipDistribution.find(D=>D.isCurrentUser)){console.warn("User does not own this Pokemon");return}p(!0)},R=()=>{!t||!l?.listing||x(!0)},G=async h=>{console.log("Listing cancelled successfully:",h),t&&await A(t.id),u&&u()},H=async h=>{console.log("Listing updated successfully:",h),t&&await A(t.id)},Q=h=>{E(h),I(!0)},le=h=>{E(h),S(!0)},ie=h=>{console.log("Offer submitted successfully:",h),I(!1),E(void 0)},ce=h=>{console.log("Offer accepted successfully:",h),u&&u(),t&&A(t.id),S(!1),E(void 0)};return!r||!t?null:e.jsxs(ga,{$isOpen:r,onClick:N,children:[e.jsxs(xa,{children:[e.jsxs(fa,{children:[e.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:"Pokemon Details"}),e.jsx(ha,{onClick:c,children:"×"})]}),o&&e.jsx(Aa,{children:"Loading Pokemon details..."}),f&&e.jsxs(Ia,{children:[f,e.jsx("button",{onClick:()=>window.location.reload(),style:{marginLeft:"12px",padding:"4px 8px",background:"rgba(255, 255, 255, 0.2)",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",color:"white",cursor:"pointer"},children:"Retry"})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs(ma,{children:[e.jsx(ba,{src:i.pokemonInfo.image,alt:i.pokemonInfo.name,onError:h=>{h.currentTarget.src="/assets/images/pokeball.png"}}),e.jsx(ya,{children:i.pokemonInfo.name}),e.jsx(ka,{$rarity:i.pokemonInfo.rarity,children:i.pokemonInfo.rarity}),e.jsxs(wa,{children:[e.jsxs(yt,{children:[e.jsx(kt,{children:i.totalMinted}),e.jsx(wt,{children:"Total Minted"})]}),e.jsxs(yt,{children:[e.jsx(kt,{children:i.marketData.totalHolders}),e.jsx(wt,{children:"Unique Owners"})]})]}),i.marketData.hasActiveListings&&e.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.2)",border:"1px solid #10B981",borderRadius:"8px",padding:"12px",marginTop:"12px"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"4px"},children:"🔥 Active Listings Available"}),e.jsxs("div",{style:{fontSize:"12px",opacity:"0.9"},children:["Floor: ",i.marketData.floorPrice," ETH • ",i.marketData.totalListings," listings"]})]})]}),e.jsxs(va,{children:["👥 Current Owners (",i.ownershipDistribution.length,")",i.ownershipDistribution.length===0&&e.jsx("span",{style:{fontSize:"12px",opacity:"0.7",marginLeft:"8px"},children:"(Data synchronizing...)"})]}),e.jsxs(ja,{children:[i.ownershipDistribution.length===0&&i.marketData.hasActiveListings&&e.jsxs("div",{style:{padding:"20px",background:"rgba(255, 193, 7, 0.2)",border:"1px solid rgba(255, 193, 7, 0.3)",borderRadius:"12px",marginBottom:"20px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px"},children:"🔄 Ownership Data Synchronizing"}),e.jsx("div",{style:{fontSize:"12px",opacity:"0.9",marginBottom:"8px"},children:"This Pokemon has active listings but ownership data is still being synchronized from the blockchain."}),e.jsxs("div",{style:{fontSize:"11px",opacity:"0.8"},children:[i.marketData.totalListings," active listing",i.marketData.totalListings!==1?"s":""," • Floor: ",i.marketData.floorPrice," ETH"]}),e.jsx("div",{style:{fontSize:"11px",opacity:"0.7",marginTop:"8px"},children:"Please check back in a few minutes or try refreshing the page."})]}),i.ownershipDistribution.map(h=>e.jsxs($a,{$isCurrentUser:h.isCurrentUser,$hasActiveListings:h.hasActiveListings,onClick:()=>B(h),children:[e.jsxs(Ca,{children:[Da(h.address),h.isCurrentUser&&e.jsx(Pa,{children:"You"}),h.hasActiveListings&&e.jsx(Fa,{children:"🏪 Has Listings"}),h.isCurrentUser&&l?.hasActiveListing&&l.listing?.contractListingId&&e.jsx(jt,{contractListingId:l.listing.contractListingId}),!h.isCurrentUser&&h.listings&&h.listings[0]?.contractListingId&&e.jsx(jt,{contractListingId:h.listings[0].contractListingId})]}),h.hasActiveListings&&e.jsxs(La,{children:[e.jsxs(Ma,{children:["🏪 ",h.isCurrentUser?"Your Active Listing":"Active Listing",h.listings&&h.listings.length>1?"s":""]}),h.isCurrentUser&&l?.hasActiveListing&&l.listing?e.jsxs(e.Fragment,{children:[e.jsxs(ve,{children:["Total Listed: ",l.listing.totalListedQuantity," NFT",l.listing.totalListedQuantity!==1?"s":"",l.listing.totalActiveListings>1&&` (${l.listing.totalActiveListings} separate listings)`]}),e.jsxs(ve,{children:["Latest: ",l.listing.pricePerNFT," ETH each (",l.listing.quantity," NFT",l.listing.quantity!==1?"s":"",")"]}),e.jsx(ve,{children:l.listing.daysRemaining>0?`${l.listing.daysRemaining} day${l.listing.daysRemaining!==1?"s":""} remaining`:`${l.listing.hoursRemaining} hour${l.listing.hoursRemaining!==1?"s":""} remaining`})]}):h.listings&&h.listings.map((D,j)=>e.jsxs(ve,{children:["💰 ",D.pricePerNFT," ETH each (",D.quantity," NFT",D.quantity!==1?"s":"",")",h.listings&&h.listings.length>1&&` • Listing ${j+1}`]},j))]}),e.jsxs(Ta,{children:[e.jsxs(Sa,{children:[h.quantity," NFT",h.quantity!==1?"s":""]}),h.hasActiveListings&&!h.isCurrentUser?h.listings&&h.listings[0]&&e.jsxs(vt,{children:[e.jsx(ua,{listingId:h.listings[0].contractListingId||1,priceEth:h.listings[0].pricePerNFT,sellerAddress:h.address,pokemonName:i.pokemonInfo.name,onSuccess:D=>{console.log("Purchase successful:",D),u&&u(),t&&window.location.reload()},onError:D=>{console.error("Purchase failed:",D)}}),h.listings[0].contractListingId&&e.jsx(ue,{$variant:"secondary",onClick:()=>Q(h.listings[0].contractListingId),children:"💰 Make Offer"})]}):h.isCurrentUser?e.jsx(vt,{children:l?.hasActiveListing?e.jsxs(e.Fragment,{children:[e.jsx(ue,{$variant:"secondary",onClick:R,disabled:$,children:"✏️ Edit Listing"}),l.listing?.contractListingId&&e.jsx(ue,{$variant:"secondary",onClick:()=>le(l.listing.contractListingId),disabled:$,children:"👁️ View Offers"}),l.listing&&h.quantity>l.listing.totalListedQuantity&&e.jsxs(ue,{$variant:"primary",onClick:v,disabled:$,children:["📝 List More (",h.quantity-l.listing.totalListedQuantity," left)"]})]}):e.jsx(ue,{$variant:"primary",onClick:v,disabled:$,children:"🏪 List for Sale"})}):null]})]},h.address))]})]})]}),t&&i&&e.jsx(sr,{pokemon:t,isOpen:k,onClose:()=>p(!1),onListingCreated:z,availableTokenIds:T()}),t&&l?.listing&&e.jsx(kr,{pokemon:t,currentListing:l.listing,isOpen:m,onClose:()=>x(!1),onListingCancelled:G,onListingUpdated:H}),t&&P&&e.jsx(Or,{pokemon:t,listingId:P,isOpen:w,onClose:()=>{I(!1),E(void 0)},onSuccess:ie}),t&&P&&e.jsx(na,{pokemon:t,listingId:P,isOpen:L,onClose:()=>{S(!1),E(void 0)},onOfferAccepted:ce})]})}function Oa(t={}){const{user:r,quickAuthToken:c,isAuthenticated:u}=re(),[i,a]=g.useState(!1),[o,d]=g.useState("disconnected"),f=g.useRef(null),s=g.useRef(0),k=5,p=g.useRef(null),m=g.useRef(null),x=g.useRef(Date.now()),l=g.useRef(t);l.current=t;const b=g.useCallback(()=>{if(!u||!c||!r?.fid){console.warn("[Marketplace WS] Cannot connect: Authentication required"),d("disconnected");return}if(f.current&&(f.current.readyState===WebSocket.OPEN||f.current.readyState===WebSocket.CONNECTING))return;p.current&&clearTimeout(p.current),d("connecting");const I=`wss://api.pokeframe.me/marketplace?${new URLSearchParams({token:c,service:"marketplace",userId:r.fid.toString()}).toString()}`;console.log(`[Marketplace WS] Connecting to: ${I}`);const L=new WebSocket(I);f.current=L,L.onopen=()=>{console.log("[Marketplace WS] Connected successfully"),a(!0),d("connected"),s.current=0,x.current=Date.now(),L.send(JSON.stringify({type:"subscribe_marketplace",payload:{userId:r.fid}})),m.current&&clearInterval(m.current),m.current=setInterval(()=>{L.readyState===WebSocket.OPEN&&(L.send(JSON.stringify({type:"ping"})),Date.now()-x.current>48e4&&(console.warn("[Marketplace WS] Keep-alive timeout, reconnecting..."),L.close(4e3,"Keep-alive timeout")))},3e5)},L.onmessage=S=>{try{const P=JSON.parse(S.data),E=l.current;if(P.type==="marketplace_listing_created"||P.type==="marketplace_listing_updated"||P.type==="marketplace_listing_cancelled"){const F=P;console.log("[Marketplace WS] Listing event received:",F.type,F.payload),E.onListingEvent&&E.onListingEvent(F),E.onMarketplaceEvent&&E.onMarketplaceEvent(F)}else if(P.type==="marketplace_offer_made"||P.type==="marketplace_offer_accepted"||P.type==="marketplace_offer_cancelled"){const F=P;console.log("[Marketplace WS] Offer event received:",F.type,F.payload),E.onOfferEvent&&E.onOfferEvent(F),E.onMarketplaceEvent&&E.onMarketplaceEvent(F)}else if(P.type==="marketplace_purchase_completed"){const F=P;console.log("[Marketplace WS] Purchase event received:",F.payload),E.onPurchaseEvent&&E.onPurchaseEvent(F),E.onMarketplaceEvent&&E.onMarketplaceEvent(F)}else P.type==="subscription_confirmed"?console.log("[Marketplace WS] Marketplace subscription confirmed"):P.type==="pong"?x.current=Date.now():P.type==="error"&&(console.error("[Marketplace WS] Server error:",P.payload),d("error"))}catch(P){console.error("[Marketplace WS] Error parsing message:",P,S.data)}},L.onerror=S=>{console.error("[Marketplace WS] WebSocket error:",S),d("error")},L.onclose=S=>{if(console.log(`[Marketplace WS] Connection closed. Code: ${S.code}, Reason: ${S.reason||"No reason"}`),a(!1),d("disconnected"),f.current=null,m.current&&(clearInterval(m.current),m.current=null),u&&c&&r?.fid&&S.code!==1e3&&s.current<k){s.current++;const E=Math.pow(2,s.current)*1e3,F=Math.random()*1e3,O=Math.min(3e4,E+F);console.log(`[Marketplace WS] Reconnecting attempt ${s.current}/${k} in ${(O/1e3).toFixed(1)}s...`),d("connecting"),p.current=setTimeout(b,O)}else s.current>=k&&(console.error("[Marketplace WS] Max reconnect attempts reached. Connection abandoned."),d("error"),setTimeout(()=>{s.current=0,console.log("[Marketplace WS] Reconnect attempts reset")},6e4))}},[u,c,r?.fid]),$=g.useCallback(()=>{p.current&&clearTimeout(p.current),m.current&&clearInterval(m.current),f.current&&(f.current.close(1e3,"Client disconnect"),f.current=null),a(!1),d("disconnected"),s.current=0},[]);g.useEffect(()=>(u&&c&&r?.fid?b():$(),()=>{$()}),[u,c,r?.fid]);const y=g.useCallback(()=>{f.current&&f.current.close(),s.current=0,b()},[b]);return{isConnected:i,connectionStatus:o,reconnect:y,disconnect:$}}function Na(t={}){const r=g.useRef(0),c=g.useRef(Date.now()),u=g.useCallback(s=>{switch(r.current++,c.current=Date.now(),console.log(`[Marketplace Sync] Event #${r.current}:`,s.type,s.payload),s.type){case"marketplace_listing_created":t.onListingCreated&&t.onListingCreated(s.payload.pokemonId,s.payload.newFloorPrice),t.onPokemonMarketDataChanged&&t.onPokemonMarketDataChanged(s.payload.pokemonId);break;case"marketplace_listing_updated":t.onListingUpdated&&t.onListingUpdated(s.payload.pokemonId,s.payload.listingId),t.onPokemonMarketDataChanged&&t.onPokemonMarketDataChanged(s.payload.pokemonId);break;case"marketplace_listing_cancelled":t.onListingCancelled&&t.onListingCancelled(s.payload.pokemonId,s.payload.listingId),t.onPokemonMarketDataChanged&&t.onPokemonMarketDataChanged(s.payload.pokemonId);break;case"marketplace_offer_made":t.onOfferMade&&s.payload.listingId&&t.onOfferMade(s.payload.pokemonId,s.payload.listingId,s.payload.activeOfferCount);break;case"marketplace_offer_accepted":t.onOfferAccepted&&s.payload.listingId&&t.onOfferAccepted(s.payload.pokemonId,s.payload.listingId),t.onPokemonMarketDataChanged&&t.onPokemonMarketDataChanged(s.payload.pokemonId);break;case"marketplace_offer_cancelled":break;case"marketplace_purchase_completed":t.onPurchaseCompleted&&t.onPurchaseCompleted(s.payload.pokemonId,s.payload.buyerUserId,s.payload.sellerUserId),t.onPokemonMarketDataChanged&&t.onPokemonMarketDataChanged(s.payload.pokemonId);break}["marketplace_listing_created","marketplace_listing_cancelled","marketplace_purchase_completed","marketplace_offer_accepted"].includes(s.type)&&t.onMarketplaceDataChanged&&setTimeout(()=>{t.onMarketplaceDataChanged?.()},500)},[t.onListingCreated,t.onListingUpdated,t.onListingCancelled,t.onOfferMade,t.onOfferAccepted,t.onPurchaseCompleted,t.onPokemonMarketDataChanged,t.onMarketplaceDataChanged]),{isConnected:i,connectionStatus:a,reconnect:o}=Oa({onMarketplaceEvent:u});g.useEffect(()=>{if(a==="error"){console.log("[Marketplace Sync] Connection error detected, will retry...");const s=setTimeout(()=>{console.log("[Marketplace Sync] Auto-retrying connection..."),o()},3e4);return()=>clearTimeout(s)}},[a,o]);const d=g.useCallback(()=>{console.log("[Marketplace Sync] Force refresh requested"),t.onMarketplaceDataChanged&&t.onMarketplaceDataChanged()},[t.onMarketplaceDataChanged]),f=g.useCallback(()=>({eventsReceived:r.current,lastEventTime:c.current,isConnected:i,connectionStatus:a,uptime:Date.now()-(c.current||Date.now())}),[i,a]);return{isConnected:i,connectionStatus:a,reconnect:o,forceRefresh:d,getStats:f,eventsReceived:r.current}}const za=n.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Ra=n.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Wa=n.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,Ga=n.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,_a=n.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,Ua=n.div`
  text-align: center;
  padding: 20px;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  color: white;
  margin-bottom: 20px;
`,Ha=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  opacity: 0.8;
  color: ${t=>{switch(t.$status){case"connected":return"#10B981";case"connecting":return"#F59E0B";case"error":return"#EF4444";default:return"#6B7280"}}};
`,Va=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>{switch(t.$status){case"connected":return"#10B981";case"connecting":return"#F59E0B";case"error":return"#EF4444";default:return"#6B7280"}}};
  animation: ${t=>t.$status==="connecting"?"pulse 1.5s infinite":"none"};
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;function Ya(){It();const{isMiniApp:t}=Dt(),[r,c]=g.useState(!1),[u,i]=g.useState("my-collection"),[a,o]=g.useState("pokemon"),[d,f]=g.useState("id"),[s,k]=g.useState(He),[p,m]=g.useState(!1),[x,l]=g.useState(null),[b,$]=g.useState(!1);g.useEffect(()=>{u==="browse-all"&&a==="games"&&o("pokemon")},[u,a]);const y=Ot(),w=Wt(),I=Na({onMarketplaceDataChanged:()=>{console.log("🔄 Marketplace data changed - refreshing..."),O()},onPokemonMarketDataChanged:v=>{console.log(`🔄 Pokemon #${v} market data changed - refreshing...`),O()},onListingCreated:(v,R)=>{console.log(`📝 New listing created for Pokemon #${v}${R?` - Floor price: ${R} ETH`:""}`)},onOfferMade:(v,R,G)=>{console.log(`💰 New offer made on Pokemon #${v}${G?` - Total offers: ${G}`:""}`)},onPurchaseCompleted:(v,R,G)=>{console.log(`🎉 Purchase completed! Pokemon #${v} sold from user ${G} to user ${R}`)}}),L=u==="my-collection",S=u==="browse-all",P=L?y:w,{isLoading:E,error:F}=P,O=()=>{L?y.refetch():w.refetch()};g.useEffect(()=>((async()=>{if(t&&de)try{const G=(await de.getCapabilities()).includes("back");c(G),G?(await de.back.enableWebNavigation(),console.log("🔙 Farcaster back navigation enabled")):console.log("🔙 Farcaster back navigation not available")}catch(R){console.warn("Failed to initialize Farcaster back navigation:",R)}})(),()=>{t&&de&&r&&de.back.disableWebNavigation?.().catch(console.warn)}),[t,r]);const T=()=>{window.location.href="/"},A=U.useMemo(()=>L?a==="games"?y.games:y.pokemon:S&&w.data?w.data.nfts.filter(v=>a==="games"?v.type==="games":v.type==="pokemon"):[],[L,S,a,y.games,y.pokemon,w.data]);U.useMemo(()=>L?y.games.length+y.pokemon.length:S&&w.data?w.data.totalCount:0,[L,S,y.games.length,y.pokemon.length,w.data]);const N=bn(A,s,a),B=v=>{console.log("NFT clicked:",v),v.type==="pokemon"?(l(v),$(!0)):console.log("Game NFT details coming soon:",v.name)},z=(v,R)=>{console.log("NFT action:",R,v),R==="mint"&&v.type==="pokemon"?console.log("Mint Pokemon:",v.name):R==="purchase"&&v.type==="games"?console.log("Purchase Game:",v.name):R==="view"&&console.log("View NFT:",v.name)};return e.jsxs(za,{children:[e.jsxs(Ra,{children:[e.jsxs("div",{children:[e.jsx(Wa,{children:"🏪 PokeFrame Marketplace"}),e.jsxs(Ha,{$status:I.connectionStatus,children:[e.jsx(Va,{$status:I.connectionStatus}),I.connectionStatus==="connected"&&"Live data",I.connectionStatus==="connecting"&&"Connecting...",I.connectionStatus==="disconnected"&&"Offline",I.connectionStatus==="error"&&"Connection error",I.eventsReceived>0&&` • ${I.eventsReceived} updates`]})]}),e.jsx(Ga,{onClick:T,children:"← Back"})]}),e.jsxs(_a,{children:[e.jsx(Ut,{activeScope:u,onScopeChange:i,myCollectionCount:L?A.length:y.games.length+y.pokemon.length,totalCount:S&&w.data?w.data.totalCount:0}),e.jsx(qt,{activeCollection:a,onCollectionChange:v=>{p||v===a||S&&v==="games"||(m(!0),o(v),k(He),setTimeout(()=>m(!1),300))},gameCount:L?y.games.length:w.data?.collections.games||0,pokemonCount:L?y.pokemon.length:w.data?.collections.pokemon||0,isBrowseAll:S}),L&&e.jsx(mn,{nfts:A,filteredNfts:N,activeCollection:a}),e.jsx(on,{activeCollection:a,filters:s,onFiltersChange:k,resultCount:N.length}),F&&e.jsxs(Ua,{children:[F,e.jsx("button",{onClick:O,style:{marginLeft:"12px",padding:"4px 8px",background:"rgba(255, 255, 255, 0.2)",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",color:"white",cursor:"pointer"},children:"Retry"})]}),e.jsx(Rn,{nfts:N,isLoading:E,sortBy:d,onSortChange:f,onNFTClick:B,onNFTAction:z})]}),e.jsx(Ba,{pokemon:x,isOpen:b,onClose:()=>{$(!1),l(null)},onDataRefresh:O})]})}export{Ya as default};
