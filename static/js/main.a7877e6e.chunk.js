(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var r,a,c,i=n(1),s=n.n(i),l=n(10),o=n.n(l),d=(n(22),n(4)),j=n(3),b=n(2),h=n(9),u=n(15),O=n.n(u),f=n(17),m=n(6),g=n(7),x=n(8),p=function(t,e,n){return Math.max(Math.min(t,n),e)},w=function(t){return Math.round(Math.random()*(t-1))},y=function(t){return function(e,n){return e*t+n}},S=n(0);!function(t){t[t.Filled=0]="Filled",t[t.Clear=1]="Clear",t[t.Start=2]="Start",t[t.End=3]="End"}(c||(c={}));var v,N,P,k,C,q,E,F,z,R,A,I,M,D,G,U,_,B,H,J,K,W,$,L,Q,T,V,X,Y,Z=function(t){var e,n=t.state,a=t.isPartOfShortestPath,i=void 0!==a&&a,s=t.handleClick,l=void 0===s?function(){}:s,o=t.className,d=t.children,h=Object(x.a)(t,["state","isPartOfShortestPath","handleClick","className","children"]),u=i&&![c.Start,c.End].includes(n)?"orange":(e={},Object(g.a)(e,c.Start,"lime"),Object(g.a)(e,c.End,"green"),Object(g.a)(e,c.Filled,"hsla(0, 0%, 90%, 1)"),Object(g.a)(e,c.Clear,"white"),e)[n]||"hsla(0, 0%, 90%, 1)";return Object(S.jsx)("button",Object(m.a)(Object(m.a)({type:"button"},h),{},{onClick:l,className:Object(b.b)(Object(b.a)(r||(r=Object(j.a)(["\n\t\t\t\t\tdisplay: flex;\n\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\n\t\t\t\t\tmin-width: 70px;\n\t\t\t\t\tmin-height: 70px;\n\n\t\t\t\t\t/* width: 100%;\n\t\t\t\t\theight: 100%; */\n\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\n\t\t\t\t\tbackground-color: ",";\n\n\t\t\t\t\tborder: 1px solid hsla(0, 0%, 50%, 0.5);\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground: ",";\n\t\t\t\t\t}\n\n\t\t\t\t\t&:active {\n\t\t\t\t\t\tbackground: hsla(0, 0%, 50%, 0.5);\n\t\t\t\t\t}\n\t\t\t\t"])),u,i||[c.Start,c.End,c.Filled].includes(n)?u:"hsla(0, 0%, 95%, 0.95)"),o),children:d}))},tt=function(t){var e=t.rows,n=t.children;return Object(S.jsx)(S.Fragment,{children:new Array(e).fill(0).map((function(t,e){return Object(S.jsx)("ul",{className:Object(b.a)(a||(a=Object(j.a)(["\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\n\t\t\t\t\tlist-style-type: none;\n\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t"]))),children:n(e)},e)}))})},et=function(t){var e=t.rows,n=t.cols,r=t.row,a=t.grid,c=t.indicesOfShortestPathSquares,i=Object(d.b)();return Object(S.jsx)(S.Fragment,{children:new Array(n).fill(0).map((function(t,s){var l=y(n)(r,s),o=a[l];return Object(S.jsx)("li",{children:Object(S.jsx)(Z,{state:o,isPartOfShortestPath:c.includes(l),handleClick:function(){return i(ut(e,n,o,r,s,a))}})},"".concat(r,"-").concat(s))}))})},nt=!1,rt=function(){var t=Object(f.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,33));case 2:e=t.sent,v=e.breadth_first_search_shortest_path,nt=!0,window.sp=v;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),at=function(t,e,n){if(t.filter((function(t){return t===c.Clear})).length<Math.min(e,n)-2)return console.log("skipping computation because impossible"),new Uint16Array;if(!nt)throw new Error("wasm not loaded yet");var r=function(e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;throw new Error("state not found")}(c.Start);return v(t,e,n,r)},ct=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Uint8Array(t*e),a=y(e),i=0;i<t;i++)for(var s=0;s<e;s++)r[a(i,s)]=n?c.Clear:c.Filled;return r[a(w(t),0)]=c.Start,r[a(w(t),e-1)]=c.End,r},it=function(){return{grid:ct(),rows:10,cols:10,dirtyRows:10,dirtyCols:10,hasShortestPath:!1,indicesOfShortestPathSquares:new Uint16Array,isInverted:!1}},st=it(),lt=Object(h.b)({name:"grid",initialState:st,reducers:{reset:function(){return it()},eventuallySetRows:function(t,e){t.dirtyRows=p(e.payload,1,20)},eventuallySetCols:function(t,e){t.dirtyCols=p(e.payload,1,20)},commitResize:function(t){t.rows=t.dirtyRows,t.cols=t.dirtyCols;var e=ct(t.dirtyRows,t.dirtyCols,t.isInverted);t.grid=e,t.hasShortestPath=!1,t.indicesOfShortestPathSquares=at(e,t.dirtyRows,t.dirtyCols)},invert:{reducer:function(t,e){t.isInverted=!t.isInverted,t.grid=e.payload.grid,t.indicesOfShortestPathSquares=e.payload.indicesOfShortestPathSquares,t.hasShortestPath=e.payload.hasShortestPath},prepare:function(t,e,n){var r=t.map((function(t){return t===c.Filled?c.Clear:t===c.Clear?c.Filled:t})),a=at(r,e,n);return window.grid=Array.from(r),{payload:{grid:r,indicesOfShortestPathSquares:a,hasShortestPath:a.length>0}}}},clickSquare:{reducer:function(t,e){var n=e.payload,r=n.grid,a=n.squareState,i=n.hasShortestPath,s=n.indicesOfShortestPathSquares;[c.Start,c.End].includes(a)||(t.grid=r,t.hasShortestPath=i,t.indicesOfShortestPathSquares=s)},prepare:function(t,e,n,r,a,i){var s=new Uint8Array(i),l=y(e)(r,a);if(window.grid=s,!s[l]&&0!==s[l])throw new Error("target not found when preparing `clickSquare`");if([c.Start,c.End].includes(n));else if(n===c.Filled)s[l]=c.Clear;else{if(n!==c.Clear)throw new Error('"invalid state", '.concat(n));s[l]=c.Filled}var o=at(s,t,e);return console.log("indicesOfShortestPathSquares",o),{payload:{squareState:n,grid:s,hasShortestPath:o.length>0,indicesOfShortestPathSquares:o}}}}}}),ot=lt.actions,dt=(ot.reset,ot.eventuallySetRows),jt=ot.eventuallySetCols,bt=ot.commitResize,ht=ot.invert,ut=ot.clickSquare,Ot=lt.reducer,ft=function(t){var e=t.children,n=Object(x.a)(t,["children"]);return Object(S.jsx)("button",Object(m.a)(Object(m.a)({type:"button"},n),{},{className:Object(b.b)(Object(b.a)(N||(N=Object(j.a)(["\n\t\t\t\t/* font-size: 1.5rem; */\n\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t/* padding: 0.4rem 1rem; */\n\t\t\t\tpadding: 0.6rem 1.5rem;\n\n\t\t\t\tletter-spacing: -0.02em;\n\t\t\t\tborder-radius: 8px;\n\n\t\t\t\tbackground-color: hsl(220, 100%, 60%);\n\t\t\t\tcolor: white;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: hsl(220, 100%, 75%);\n\t\t\t\t\ttransition: background-color 0.2s ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t&:focus {\n\t\t\t\t\tbackground-color: hsl(220, 100%, 35%);\n\t\t\t\t}\n\t\t\t"]))),n.className),children:e}))},mt=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.grid.grid})),n=Object(d.c)((function(t){return t.grid.rows})),r=Object(d.c)((function(t){return t.grid.cols})),a=Object(d.c)((function(t){return t.grid.dirtyRows})),c=Object(d.c)((function(t){return t.grid.dirtyCols})),i=Object(d.c)((function(t){return t.grid.indicesOfShortestPathSquares}));return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("article",{className:Object(b.a)(P||(P=Object(j.a)(["\n\t\t\t\t\tbackground-color: hsla(0, 0%, 85%, 0.69);\n\t\t\t\t\tpadding: 1.5rem 3rem;\n\t\t\t\t\tborder-radius: 0.5rem;\n\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: row;\n\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\talign-items: flex-end;\n\n\t\t\t\t\t& > * + * {\n\t\t\t\t\t\tmargin-left: 1rem;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:Object(S.jsxs)("table",{className:Object(b.a)(k||(k=Object(j.a)(["\n\t\t\t\t\t\ttext-align: left;\n\n\t\t\t\t\t\t/**\n\t\t\t\t\t\t * select items inside all <tr> children\n\t\t\t\t\t\t * to add margin, because margin does not apply\n\t\t\t\t\t\t * to <tr> itself\n\t\t\t\t\t\t *\n\t\t\t\t\t\t * & > (thead|tbody) > tr > all but not first (th|td) > some_itrem\n\t\t\t\t\t\t*/\n\t\t\t\t\t\t& > * > * > * + * > * {\n\t\t\t\t\t\t\tmargin-left: 1rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t"]))),children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:Object(S.jsx)("p",{className:Object(b.a)(C||(C=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t"]))),children:"Rows"})}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{})}),Object(S.jsx)("th",{children:Object(S.jsx)("p",{className:Object(b.a)(q||(q=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t"]))),children:"Columns"})}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{})})]})}),Object(S.jsx)("tbody",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(S.jsx)("input",{id:"rows",type:"number",value:a,onChange:function(e){return t(dt(Number(e.target.value)))},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t(bt()))},className:Object(b.a)(E||(E=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t\t\t\t\t\tpadding: 0.2rem 0.1rem;\n\t\t\t\t\t\t\t\t\t\tmax-width: 6rem;\n\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\tappearance: textfield;\n\t\t\t\t\t\t\t\t\t"])))})}),Object(S.jsx)("td",{children:Object(S.jsx)("p",{className:Object(b.a)(F||(F=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t"]))),children:"x"})}),Object(S.jsx)("td",{children:Object(S.jsx)("input",{id:"columns",type:"number",value:c,onChange:function(e){return t(jt(Number(e.target.value)))},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t(bt()))},className:Object(b.a)(z||(z=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t\t\t\t\t\tpadding: 0.2rem 0.1rem;\n\t\t\t\t\t\t\t\t\t\tmax-width: 6rem;\n\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\tappearance: textfield;\n\t\t\t\t\t\t\t\t\t"])))})}),Object(S.jsx)("td",{children:Object(S.jsx)(ft,{className:Object(b.a)(R||(R=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tmargin-left: 2rem;\n\t\t\t\t\t\t\t\t\t"]))),onClick:function(){return t(bt())},children:Object(S.jsx)("span",{className:Object(b.a)(A||(A=Object(j.a)([""]))),children:"Generate"})})}),Object(S.jsx)("td",{children:Object(S.jsx)(ft,{className:Object(b.a)(I||(I=Object(j.a)(["\n\t\t\t\t\t\t\t\t\t\tmargin-left: 2rem;\n\t\t\t\t\t\t\t\t\t"]))),onClick:function(){return t(ht(e,n,r))},children:Object(S.jsx)("span",{className:Object(b.a)(M||(M=Object(j.a)([""]))),children:"Invert"})})})]})})]})}),Object(S.jsx)("article",{className:Object(b.a)(D||(D=Object(j.a)(["\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\tmargin-right: auto;\n\n\t\t\t\t\tborder: 1px solid hsla(0, 0%, 50%, 0.5);\n\t\t\t\t"]))),children:Object(S.jsx)(tt,{rows:n,children:function(t){return Object(S.jsx)(et,{grid:e,rows:n,cols:r,row:t,indicesOfShortestPathSquares:i})}})})]})},gt=function(t){var e=t.children,n=(t.ref,Object(x.a)(t,["children","ref"]));return Object(S.jsx)("div",Object(m.a)(Object(m.a)({},n),{},{className:Object(b.b)(Object(b.a)(G||(G=Object(j.a)(["\n\t\t\t\tdisplay: flex;\n\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\n\t\t\t\t/* & > * {\n\t\t\t\tflex: 1;\n\t\t\t} */\n\t\t\t"]))),n.className),children:e}))},xt=function(t){var e=t.label,n=t.children;return Object(S.jsxs)("div",{className:Object(b.a)(U||(U=Object(j.a)(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\n\t\t\talign-items: flex-start;\n\n\t\t\t& > * + * {\n\t\t\t\tmargin-top: 0.25rem;\n\t\t\t}\n\t\t"]))),children:[Object(S.jsx)("p",{className:Object(b.a)(_||(_=Object(j.a)(["\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\n\t\t\t\tfont-size: 1.5rem;\n\n\t\t\t\tword-wrap: normal;\n\t\t\t"]))),children:e}),n]})},pt=function(){return Object(S.jsxs)("article",{children:[Object(S.jsx)("h2",{className:Object(b.a)(B||(B=Object(j.a)(["\n\t\t\t\ttext-align: left;\n\t\t\t"]))),children:"UI States"}),Object(S.jsxs)("div",{className:Object(b.a)(H||(H=Object(j.a)(["\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\n\t\t\t\t& > * + * {\n\t\t\t\t\tmargin-top: 3rem;\n\t\t\t\t}\n\t\t\t"]))),children:[Object(S.jsxs)(gt,{className:Object(b.a)(J||(J=Object(j.a)(["\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t& > * + * {\n\t\t\t\t\t\tmargin-left: 4rem;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:[Object(S.jsx)(xt,{label:"Default",children:Object(S.jsx)(ft,{children:"Generate"})}),Object(S.jsx)(xt,{label:"Hover",children:Object(S.jsx)(ft,{className:Object(b.a)(K||(K=Object(j.a)(["\n\t\t\t\t\t\t\tbackground-color: hsl(220, 100%, 75%);\n\t\t\t\t\t\t"]))),children:"Generate"})}),Object(S.jsx)(xt,{label:"Down",children:Object(S.jsx)(ft,{className:Object(b.a)(W||(W=Object(j.a)(["\n\t\t\t\t\t\t\tbackground-color: hsl(220, 100%, 35%);\n\t\t\t\t\t\t"]))),children:"Generate"})})]}),Object(S.jsxs)(gt,{className:Object(b.a)($||($=Object(j.a)(["\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t& > * + * {\n\t\t\t\t\t\tmargin-left: 4rem;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:[Object(S.jsx)(xt,{label:"Filled (default)",children:Object(S.jsx)(Z,{state:c.Filled})}),Object(S.jsx)(xt,{label:"Hover",children:Object(S.jsx)(Z,{state:c.Clear,className:Object(b.a)(L||(L=Object(j.a)(["\n\t\t\t\t\t\t\tbackground: hsla(0, 0%, 95%, 0.95);\n\t\t\t\t\t\t"])))})}),Object(S.jsx)(xt,{label:"Down",children:Object(S.jsx)(Z,{state:c.Filled,className:Object(b.a)(Q||(Q=Object(j.a)(["\n\t\t\t\t\t\t\tbackground: hsla(0, 0%, 50%, 0.5);\n\t\t\t\t\t\t"])))})}),Object(S.jsx)(xt,{label:"Clear",children:Object(S.jsx)(Z,{state:c.Clear})})]}),Object(S.jsxs)(gt,{className:Object(b.a)(T||(T=Object(j.a)(["\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t& > * + * {\n\t\t\t\t\t\tmargin-left: 4rem;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:[Object(S.jsx)(xt,{label:"Start point",children:Object(S.jsx)(Z,{state:c.Start})}),Object(S.jsx)(xt,{label:"End point",children:Object(S.jsx)(Z,{state:c.End})}),Object(S.jsx)(xt,{label:"Shortest path",children:Object(S.jsx)(Z,{state:c.Clear,isPartOfShortestPath:!0})})]})]})]})},wt=function(){return Object(S.jsx)("article",{className:Object(b.a)(V||(V=Object(j.a)(["\n\t\t\ttext-align: left;\n\t\t"]))),children:Object(S.jsx)("img",{src:"/assets/grid-logo.png",alt:"Grid logo"})})};function yt(){return Object(i.useEffect)((function(){rt()}),[]),Object(S.jsx)("div",{className:Object(b.a)(X||(X=Object(j.a)(["\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\n\t\t\t\tmin-height: 100vh;\n\n\t\t\t\tmargin-top: 2rem;\n\t\t\t\tmargin-bottom: 2rem;\n\n\t\t\t\ttext-align: center;\n\t\t\t"]))),children:Object(S.jsxs)("main",{className:Object(b.a)(Y||(Y=Object(j.a)(["\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\n\t\t\t\t\t& > * {\n\t\t\t\t\t\tmargin-top: 4rem;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:[Object(S.jsx)(wt,{}),Object(S.jsx)(mt,{}),Object(S.jsx)(pt,{})]})})}var St=Object(h.a)({reducer:{grid:Ot},middleware:Object(h.c)({serializableCheck:{ignoredActions:["grid/clickSquare","grid/invert"],ignoredPaths:["grid.grid","grid.indicesOfShortestPathSquares"]}})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(d.a,{store:St,children:Object(S.jsx)(yt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a7877e6e.chunk.js.map