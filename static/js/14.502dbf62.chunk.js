(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{145:function(e,t,a){"use strict";var n=a(24),r=a(99),i=a(31),l=a(88),c=a(79),o=a.n(c),s=a(82),u=a.n(s),d=a(89),m=a(0),f=a.n(m),g=a(251),b=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},p=function(e,t){var a=void 0===t?{}:t,n=a.isPreventDefault,r=void 0===n||n,i=a.delay,l=void 0===i?300:i,c=Object(m.useRef)(),o=Object(m.useRef)(),s=Object(m.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",b,{passive:!1}),o.current=t.target),c.current=setTimeout((function(){return e(t)}),l)}),[e,l]),u=Object(m.useCallback)((function(){c.current&&clearTimeout(c.current),r&&o.current&&o.current.removeEventListener("touchend",b)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}};t.a=f.a.memo((function(e){var t=e.handleSort,a=e.sortData,c=e.setSortData,s=e.statistic,u=Object(g.a)().t,m=p((function(){a.sortColumn===s&&c(Object(d.a)(a,(function(e){e.delta=!a.delta})))}),{isPreventDefault:!1});return f.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,s)},m),a.sortColumn===s&&f.a.createElement("div",{className:o()("sort-icon",Object(n.a)({invert:a.isAscending},"is-".concat(s),a.delta))},f.a.createElement(l.e,{size:10})),f.a.createElement("div",null,u(Object(i.a)(s))),"other"===s&&f.a.createElement(r.a,{data:"Migrated cases or non-COVID deaths"},f.a.createElement(l.j,{size:14})))}),(function(e,t){return!!u()(e.sortData,t.sortData)}))},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(18),l=a.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,i=e.size,l=void 0===i?24:i,s=o(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Info",t.a=s},172:function(e,t,a){var n=a(173),r=["getDistricts"];e.exports=function(){var e=new Worker(a.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},173:function(e,t){e.exports=function(e,t){var a=0,n={};e.addEventListener("message",(function(t){var a=t.data;if("RPC"===a.type)if(a.id){var r=n[a.id];r&&(delete n[a.id],a.error?r[1](Object.assign(Error(a.error.message),a.error)):r[0](a.result))}else{var i=document.createEvent("Event");i.initEvent(a.method,!1,!1),i.data=a.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,l){var c=++a;n[c]=[i,l],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},246:function(e,t,a){"use strict";a.r(t);var n=a(94),r=a(78),i=a(145),l=a(0),c=a.n(l),o=a(92),s=function(){var e=window.innerWidth,t=e>769?448:e;return c.a.createElement("div",{className:"TableLoader"},c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},c.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},u=a(23),d=a(88),m=a(79),f=a.n(m),g=function(){var e=Object(l.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){var e=window.setTimeout((function(){n((function(e){return e===u.s.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:f()("is-".concat(u.s[a]))},c.a.createElement(d.e,{size:14})),c.a.createElement("p",null,"Sort by Delta [long press]"))},b=a(97),p=a(31),v=a(82),h=a.n(v),E=a(89),O=a(171),y=a(251),j=a(37),C=a(81),k=a(214),x=a(172),w=a.n(x),N=Object(l.lazy)((function(){return a.e(34).then(a.bind(null,247))}));t.default=c.a.memo((function(e){var t=this,a=e.data,o=e.regionHighlighted,m=e.setRegionHighlighted,v=e.expandTable,h=e.setExpandTable,x=Object(y.a)().t,T=Object(k.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),S=Object(r.a)(T,2),D=S[0],P=S[1],M=Object(l.useCallback)((function(e){D.sortColumn!==e?P(Object(E.a)(D,(function(t){t.sortColumn=e}))):P(Object(E.a)(D,(function(e){e.isAscending=!D.isAscending})))}),[D,P]),z=Object(C.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:C.b.wobbly}),H=Object(l.useState)(),R=Object(r.a)(H,2),L=R[0],A=R[1],I=Object(l.useState)("States"),U=Object(r.a)(I,2),q=U[0],B=U[1],W=Object(l.useState)(!1),F=Object(r.a)(W,2),G=F[0],J=F[1],K=Object(l.useState)(!1),_=Object(r.a)(K,2),V=_[0],X=_[1],Q=Object(l.useCallback)((function(e,t){if("regionName"!==D.sortColumn){var r=u.r[D.sortColumn],i=Object(n.a)(Object(n.a)({},r.options),{},{perMillion:G}),l=Object(p.j)((null===L||void 0===L?void 0:L[e])||a[e],D.delta?"delta":"total",r.key,i)||0,c=Object(p.j)((null===L||void 0===L?void 0:L[t])||a[t],D.delta?"delta":"total",r.key,i)||0;return D.isAscending?l-c:c-l}var o,s,d=(null===L||void 0===L||null===(o=L[e])||void 0===o?void 0:o.districtName)||u.q[e],m=(null===L||void 0===L||null===(s=L[t])||void 0===s?void 0:s.districtName)||u.q[t];return D.isAscending?d.localeCompare(m):m.localeCompare(d)}),[L,G,D.delta,D.isAscending,D.sortColumn,a]),Y=Object(l.useCallback)((function(){B((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(l.useEffect)((function(){var e=w()();e.getDistricts(a),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(A(t.data),e.terminate())}))}),[q,a]);var Z=Object(C.f)(V,null,{from:b.h,enter:b.g,leave:b.h}),$=v?u.t:u.s;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-top"},c.a.createElement(C.a.div,{className:f()("option-toggle",{"is-highlighted":"Districts"===q}),onClick:Y,style:z[0]},c.a.createElement(d.l,{size:14})),c.a.createElement(C.a.div,{className:f()("million-toggle",{"is-highlighted":G}),onClick:J.bind(this,!G),style:z[0]},c.a.createElement("span",null,"1M")),c.a.createElement(C.a.div,{className:f()("info-toggle",{"is-highlighted":V}),onClick:X.bind(this,!V),style:z[0]},c.a.createElement(d.n,{size:14})),c.a.createElement(C.a.div,{className:f()("expand-table-toggle",{"is-highlighted":v}),style:z[1],onClick:h.bind(this,!v)},c.a.createElement(d.f,{size:16}))),Z.map((function(e){var t=e.item,a=e.key,n=e.props;return t?c.a.createElement(C.a.div,{key:a,className:"table-helper",style:n},c.a.createElement("div",{className:"helper-top"},c.a.createElement("div",{className:"helper-left"},c.a.createElement("div",{className:"info-item"},c.a.createElement("span",null,c.a.createElement(d.l,{size:14})),c.a.createElement("p",null,"Toggle between States/Districts")),c.a.createElement("div",{className:"info-item"},c.a.createElement("h5",null,"1M"),c.a.createElement("p",null,"Per Million of Population")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement("span",null,c.a.createElement(d.e,{size:14})),c.a.createElement("p",null,"Sort by Descending")),c.a.createElement("div",{className:"info-item sort invert"},c.a.createElement("span",null,c.a.createElement(d.e,{size:14})),c.a.createElement("p",null,"Sort by Ascending")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement(g,null)),c.a.createElement("div",{className:"info-item notes"},c.a.createElement("span",null,c.a.createElement(O.a,{size:15})),c.a.createElement("p",null,"Notes")))),c.a.createElement("h5",{className:"text"},x("Compiled from State Govt. numbers"),","," ",c.a.createElement(j.b,{to:"/about"},x("know more"),"!"))):null})),c.a.createElement("div",{className:"table-container"},c.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat($.length+1,", auto)")}},c.a.createElement("div",{className:"row heading"},c.a.createElement("div",{className:"cell heading",onClick:M.bind(this,"regionName")},c.a.createElement("div",null,x("States"===q?"State/UT":"District")),"regionName"===D.sortColumn&&c.a.createElement("div",{className:f()("sort-icon",{invert:D.isAscending})},c.a.createElement(d.e,{size:10}))),$.map((function(e){return c.a.createElement(i.a,Object.assign({key:e},{statistic:e,sortData:D,setSortData:P},{handleSort:M.bind(t,e)}))}))),"States"===q&&Object.keys(a).filter((function(e){return"TT"!==e&&!(e===u.x&&G)})).sort((function(e,t){return Q(e,t)})).map((function(e){return c.a.createElement(N,Object.assign({key:e,data:a[e]},{stateCode:e,isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:v}))})),"Districts"===q&&!L&&c.a.createElement(s,null),"Districts"===q&&L&&Object.keys(L).sort((function(e,t){return Q(e,t)})).slice(0,u.d).map((function(e){return c.a.createElement(N,Object.assign({key:e,data:L[e],districtName:L[e].districtName},{isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:v}))})),c.a.createElement(N,Object.assign({key:"TT",data:a.TT,stateCode:"TT"},{isPerMillion:G,regionHighlighted:o,setRegionHighlighted:m,expandTable:v})))))}),(function(e,t){var a,n,r,i;return!!h()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.districtName,null===(n=t.regionHighlighted)||void 0===n?void 0:n.districtName)&&(!!h()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!h()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!h()(e.expandTable,t.expandTable)))}))},92:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,g=e.speed,b=e.style,p=e.title,v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),E=h+"-diff",O=h+"-animated-diff",y=h+"-aria",j=f?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",k=g+"s";return Object(n.createElement)("svg",r({"aria-labelledby":y,role:"img",style:r(r({},b),j)},v),p?Object(n.createElement)("title",{id:y},p):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+O+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:E},c),Object(n.createElement)("linearGradient",{id:O},Object(n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:k,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:k,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?Object(n.createElement)(i,r({},e)):Object(n.createElement)(c,r({},e))},c=function(e){return Object(n.createElement)(l,r({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=l},99:function(e,t,a){"use strict";var n=a(78),r=a(97),i=a(0),l=a.n(i),c=a(81);t.a=function(e){var t=e.data,a=e.children,o=Object(i.useState)(!1),s=Object(n.a)(o,2),u=s[0],d=s[1],m=Object(c.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return l.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},a,m.map((function(e){var a=e.item,n=e.key,r=e.props;return a?l.a.createElement(c.a.div,{key:n,style:r},l.a.createElement("div",{className:"message"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):l.a.createElement(c.a.div,{key:n})})))}}}]);
//# sourceMappingURL=14.502dbf62.chunk.js.map