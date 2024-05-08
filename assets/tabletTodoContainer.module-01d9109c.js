import{r as o,I as g,S as P,_ as M,c,a as S,j as e,E as O,H as F,C as D,b as h,d as R,B as L,R as V,L as W,u as k,F as q,e as K,f as Q,g as Y,h as J}from"./index-783f7d3d.js";import{B as X,U as Z,T as ee,M as f,S as T,g as te,a as ne,b as v,t as j,u as se,C as ie}from"./generateQueryParams-d26a52c4.js";var B=o.forwardRef(function(t,n){var s=t.size>=g.LARGE,a=s?g.LARGE:g.STANDARD,i="".concat(-1*a/.05/2),r={transformOrigin:"center"};return o.createElement(P,M({iconName:"arrow-left",ref:n},t),o.createElement("path",{d:s?"M360 220H88.2L174 305.8C177.8 309.4 180 314.4 180 320C180 331 171 340 160 340C154.4 340 149.4 337.8 145.8 334.2L25.8 214.2C22.2 210.6 20 205.6 20 200C20 194.4 22.2 189.4 25.8 185.8L145.8 65.8C149.4 62.2 154.4 60 160 60C171 60 180 69 180 80C180 85.6 177.8 90.6 174.2 94.2000000000001L88.2 180H360C371 180 380 189 380 200C380 211 371 220 360 220z":"M279.8 180.2H88.2L154 246C157.6 249.6 159.8 254.6 159.8 260.2C159.8 271.2 150.8 280.2 139.8 280.2C134.2 280.2 129.2 278 125.6 274.4L25.6 174.4C22 170.6 19.8 165.6 19.8 160.2S22 149.6 25.6 146L125.6 46C129.2 42.4 134.2 40.2 139.8 40.2C150.8 40.2 159.8 49.2 159.8 60.2000000000001C159.8 65.8 157.6 70.8 154 74.4L88.2 140.2H280C291 140.2 300 149.2 300 160.2S290.8 180.2 279.8 180.2z",fillRule:"evenodd",transform:"scale(0.05, -0.05) translate(".concat(i,", ").concat(i,")"),style:r}))});B.defaultProps={size:g.STANDARD};B.displayName="Blueprint5.Icon.ArrowLeft";var z=o.forwardRef(function(t,n){var s=t.size>=g.LARGE,a=s?g.LARGE:g.STANDARD,i="".concat(-1*a/.05/2),r={transformOrigin:"center"};return o.createElement(P,M({iconName:"arrow-right",ref:n},t),o.createElement("path",{d:s?"M374.2000000000001 214.2L254.2 334.2000000000001C250.6 337.8 245.6 340 240 340C229 340 220 331 220 320C220 314.4 222.2 309.4 225.8 305.8L311.8 220H40C29 220 20 211 20 200C20 189 29 180 40 180H311.8L226 94.2000000000001C222.2 90.6 220 85.6 220 80C220 69 229 60 240 60C245.6 60 250.6 62.2 254.2 65.8L374.2000000000001 185.8C377.8 189.4 380 194.4 380 200C380 205.6 377.8 210.6 374.2000000000001 214.2z":"M294 174.2L194 274.2C190.4 278 185.4 280.2 179.8 280.2C168.8 280.2 159.8 271.2 159.8 260.2C159.8 254.6 162 249.6 165.6 246L231.4 180.2H39.8C28.8 180.2 19.8 171.2 19.8 160.2S28.8 140.2 39.8 140.2H231.6L165.8 74.4C162.2 70.8 160 65.8 160 60.1999999999999C160 49.1999999999999 169 40.1999999999999 180 40.1999999999999C185.6 40.1999999999999 190.6 42.4 194.2 45.9999999999999L294.2000000000001 146C297.8 149.5999999999999 300 154.5999999999999 300 160.1999999999999S297.6 170.6 294 174.2z",fillRule:"evenodd",transform:"scale(0.05, -0.05) translate(".concat(i,", ").concat(i,")"),style:r}))});z.defaultProps={size:g.STANDARD};z.displayName="Blueprint5.Icon.ArrowRight";const oe=c`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`,ae=c`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 768px;
	padding: 0 15px;
	margin-bottom: 20px;
`,re=c`
	margin-left: auto;
	margin-right: 10px;
	width: 150px;
`,ce=c`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
`,le=c`
	position: absolute;
	width: 40px;
	height: 40px;
	background: ${S.arrowIconColor};
	border: 1px solid ☐ ${S.arrowIconColorBorder};
	cursor: pointer;
	border-radius: 50%;
	padding: 5px;
	transition: all 0.3s ease-in-out;
	z-index: 10;
	right: -50px;
	top: 40%;
	display: flex;
	justify-content: center;
	align-items: center;

	&:active {
		background: ${S.arrowIconColorActive};
		transition: background 0.3s ease-in-out;
	}
`,de=c`
	position: absolute;
	width: 40px;
	height: 40px;
	cursor: pointer;
	border-radius: 50%;
	background: ${S.arrowIconColor};
	border: 1px solid ☐ ${S.arrowIconColorBorder};
	padding: 5px;
	transition: all 0.3s ease-in-out;
	z-index: 10;
	left: -50px;
	top: 40%;
	display: flex;
	justify-content: center;
	align-items: center;

	&:active {
		background: ${S.arrowIconColorActive};
		transition: background 0.3s ease-in-out;
	}
`,ue=c`
	margin: auto;
	text-align: center;
`,pe=c`
	width: 70%;
	margin-top: 2%;
	margin-bottom: 2%;
	height: 350px;
	position: relative;
`,_=c`
	width: 100%;
	height: 310px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`,fe=c`
	display: flex;
	justify-content: center;
	width: 100%;
	height: auto;
	margin-left: 10px;
	margin-top: 15px;
`,H=c`
	flex-grow: 1;
	margin: 0 10px;
`,he=c`
	flex-grow: 1;
	margin: 10px 8px;
`,ge=c`
	word-wrap: break-word;
`,me=c`
	text-align: center;
	margin-top: 20px;
`,Ce=()=>e(D,{css:_,interactive:!0,elevation:O.TWO,children:e(F,{css:ue,children:"No todos found."})}),xe=({children:t,nextSlide:n,prevSlide:s,localCounter:a})=>h("div",{children:[e(B,{onClick:s,css:de}),e(z,{onClick:n,css:le}),t.map((i,r)=>e("div",{style:{display:r===a?"block":"none"},children:i},r))]}),Se=({todo:t,handleToggleStatus:n,handleDeleteTodo:s,getTodoById:a})=>h(D,{css:_,interactive:!0,elevation:O.TWO,children:[e(F,{children:t.title}),e("p",{css:ge,children:t.description}),h(X,{css:fe,minimal:!0,fill:!0,children:[e(L,{css:H,intent:t.status==="completed"?"success":"none",icon:e(R,{icon:"tick-circle"}),onClick:()=>n(t.id,t.status),children:"Complete"}),e(W,{to:`${V.TODO_DETAILS}=${+t.id}`,children:e(L,{css:he,intent:"success",icon:e(R,{icon:"eye-open"}),onClick:()=>a(t.id),children:"View"})}),e(L,{css:H,intent:"danger",icon:e(R,{icon:"trash"}),onClick:()=>s(t.id),children:"Delete"}),e(Z,{todoId:t.id,todoData:t})]})]}),be=({todos:t,localCounter:n,nextSlide:s,prevSlide:a,handleToggleStatus:i,handleDeleteTodo:r,getTodoById:l})=>e(xe,{localCounter:n,nextSlide:s,prevSlide:a,children:t.map(m=>e("div",{children:e(Se,{todo:m,handleToggleStatus:i,handleDeleteTodo:r,getTodoById:l})},m.id))}),we=({setLocalCounter:t,localCounter:n,requestCounter:s,setRequestCounter:a,setOffset:i})=>{const{deleteTodo:r,updateTodo:l,getTodoById:m,getAllTodos:b}=k(),{todos:u}=k(),C=u.length;o.useEffect(()=>{t(0)},[u]);const w=()=>{t(p=>u.length!==f&&p+1===u.length?0:p+1)},x=()=>{n===0&&s>0?(a(s-1),i(p=>p-f)):t(n===0?C-1:n-1)},A=async(p,E)=>{const I=E===T.completed?T.inProgress:T.completed;await l(p,{status:I}),await b({offset:0,limit:f,status:T.completed})},y=p=>r(p);return h(q,{children:[e(D,{css:pe,children:u.length>0?e(be,{todos:u,localCounter:n,nextSlide:w,prevSlide:x,handleToggleStatus:A,handleDeleteTodo:y,getTodoById:m}):e(Ce,{})}),e("div",{css:me,children:h(ee,{large:!0,minimal:!0,children:["Page: ",s+1]})})]})},N=async(t,n,s,a,i,r)=>{n(!0);const l=te(a);l.title=s,l.offset=i,l.limit=r,await t(l),n(!1)},ye=({handleTabChange:t,handleInputChange:n,input:s})=>h("div",{css:ae,children:[h(ne,{id:"Tabs",onChange:t,children:[e(v,{id:"all",title:"All"}),e(v,{id:"private",title:"Private"}),e(v,{id:"public",title:"Public"}),e(v,{id:"completed",title:"Completed"})]}),e("div",{css:re,children:e(K,{name:"filter",children:()=>e(Q,{value:s,onChange:n,type:"text",leftIcon:"search",placeholder:"Filter todos..."})})})]}),Le=()=>{const{todos:t,getAllTodos:n}=k(),[s,a]=o.useState(""),[i,r]=o.useState(j[0]),[l,m]=o.useState(!1),[b,u]=o.useState(0),[C,w]=o.useState(0),[x,A]=o.useState(0),y=se(s,300);o.useEffect(()=>{N(n,m,y,i,b,f)},[y,i,C,b]),o.useEffect(()=>{x%f===0&&x>0&&(w(C+1),u(d=>d+f))},[x]),o.useEffect(()=>{t.length===0&&C>0&&(u(d=>d-f),w(d=>d-1))},[t,C]);const p=d=>{a(d.target.value)},E=d=>{const G=j.find(U=>U.id===d);G&&r(G)},I=()=>{N(n,m,y,i,b,f)},$=()=>{n({offset:0,limit:f})};return e(Y,{onSubmit:I,render:({handleSubmit:d})=>e("form",{onSubmit:d,children:h("div",{css:oe,children:[e(ye,{handleTabChange:E,handleInputChange:p,input:s}),h("div",{css:ce,children:[e(ie,{}),e(L,{onClick:$,children:"Reload Todos"})]}),l&&e(J,{}),!l&&e(we,{setLocalCounter:A,localCounter:x,requestCounter:C,setRequestCounter:w,setOffset:u})]})})})};export{Le as default};