(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{100:function(t,n,e){"use strict";n.a=function(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}},101:function(t,n,e){"use strict";var r=e(196);n.a=function(t){return Object(r.b)(t[t.length-1])}},102:function(t,n,e){"use strict";function r(){}e.d(n,"a",(function(){return r}))},113:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(91),i=e(87),o=Symbol("implicit");function a(){var t=new Map,n=[],e=[],u=o;function c(r){var i=r+"",a=t.get(i);if(!a){if(u!==o)return u;t.set(i,a=n.push(r))}return e[(a-1)%e.length]}return c.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;var i,o=Object(r.a)(e);try{for(o.s();!(i=o.n()).done;){var a=i.value,u=a+"";t.has(u)||t.set(u,n.push(a))}}catch(f){o.e(f)}finally{o.f()}return c},c.range=function(t){return arguments.length?(e=Array.from(t),c):e.slice()},c.unknown=function(t){return arguments.length?(u=t,c):u},c.copy=function(){return a(n,e).unknown(u)},i.b.apply(c,arguments),c}},117:function(t,n,e){"use strict";n.a=function(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}},136:function(t,n,e){t.exports=e(176)},137:function(t,n,e){"use strict";function r(t,n){t&&o.hasOwnProperty(t.type)&&o[t.type](t,n)}var i={Feature:function(t,n){r(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,i=-1,o=e.length;++i<o;)r(e[i].geometry,n)}},o={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){a(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)a(e[r],n,0)},Polygon:function(t,n){u(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)u(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,i=-1,o=e.length;++i<o;)r(e[i],n)}};function a(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function u(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)a(t[e],n,1);n.polygonEnd()}n.a=function(t,n){t&&i.hasOwnProperty(t.type)?i[t.type](t,n):r(t,n)}},138:function(t,n,e){"use strict";var r=e(102),i=1/0,o=i,a=-i,u=a,c={point:function(t,n){t<i&&(i=t);t>a&&(a=t);n<o&&(o=n);n>u&&(u=n)},lineStart:r.a,lineEnd:r.a,polygonStart:r.a,polygonEnd:r.a,result:function(){var t=[[i,o],[a,u]];return a=u=-(o=i=1/0),t}};n.a=c},139:function(t,n,e){"use strict";n.a=function(t){return t}},166:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(78),i=e(167),o=e(87),a=e(113);function u(){var t,n,e=Object(a.a)().unknown(void 0),c=e.domain,f=e.range,s=0,l=1,h=!1,d=0,p=0,v=.5;function g(){var e=c().length,r=l<s,o=r?l:s,a=r?s:l;t=(a-o)/Math.max(1,e-d+2*p),h&&(t=Math.floor(t)),o+=(a-o-t*(e-d))*v,n=t*(1-d),h&&(o=Math.round(o),n=Math.round(n));var u=Object(i.a)(e).map((function(n){return o+t*n}));return f(r?u.reverse():u)}return delete e.unknown,e.domain=function(t){return arguments.length?(c(t),g()):c()},e.range=function(t){var n,e;return arguments.length?(n=t,e=Object(r.a)(n,2),s=e[0],l=e[1],s=+s,l=+l,g()):[s,l]},e.rangeRound=function(t){var n,e;return n=t,e=Object(r.a)(n,2),s=e[0],l=e[1],s=+s,l=+l,h=!0,g()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(h=!!t,g()):h},e.padding=function(t){return arguments.length?(d=Math.min(1,p=+t),g()):d},e.paddingInner=function(t){return arguments.length?(d=Math.min(1,t),g()):d},e.paddingOuter=function(t){return arguments.length?(p=+t,g()):p},e.align=function(t){return arguments.length?(v=Math.max(0,Math.min(1,t)),g()):v},e.copy=function(){return u(c(),[s,l]).round(h).paddingInner(d).paddingOuter(p).align(v)},o.b.apply(g(),arguments)}},167:function(t,n,e){"use strict";n.a=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}},176:function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,n,e,r){var i=n&&n.prototype instanceof s?n:s,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return j()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var u=m(a,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=c(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),o}function c(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var f={};function s(){}function l(){}function h(){}var d={};d[i]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(M([])));v&&v!==n&&e.call(v,i)&&(d=v);var g=h.prototype=s.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function y(t,n){var r;this._invoke=function(i,o){function a(){return new n((function(r,a){!function r(i,o,a,u){var f=c(t[i],t,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"===typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(f.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function m(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,m(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=c(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function w(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function M(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return l.prototype=g.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new y(u(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),g[a]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;x(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:M(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},177:function(t,n,e){"use strict";function r(t,n,e,r,i,o,a){try{var u=t[o](a),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)}))}}e.d(n,"a",(function(){return i}))},178:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return l}));var r=e(119),i=e(95),o=e(87);function a(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function u(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function c(t){return t<0?-t*t:t*t}function f(t){var n=t(i.c,i.c),e=1;function o(){return 1===e?t(i.c,i.c):.5===e?t(u,c):t(a(e),a(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,o()):e},Object(r.b)(n)}function s(){var t=f(Object(i.d)());return t.copy=function(){return Object(i.a)(t,s()).exponent(t.exponent())},o.b.apply(t,arguments),t}function l(){return s.apply(null,arguments).exponent(.5)}},194:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return f}));var r=function(t){return t},i=function(t){if(null==t)return r;var n,e,i=t.scale[0],o=t.scale[1],a=t.translate[0],u=t.translate[1];return function(t,r){r||(n=e=0);var c=2,f=t.length,s=new Array(f);for(s[0]=(n+=t[0])*i+a,s[1]=(e+=t[1])*o+u;c<f;)s[c]=t[c],++c;return s}},o=function(t,n){return"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return a(t,n)}))}:a(t,n)};function a(t,n){var e=n.id,r=n.bbox,i=null==n.properties?{}:n.properties,o=u(t,n);return null==e&&null==r?{type:"Feature",properties:i,geometry:o}:null==r?{type:"Feature",id:e,properties:i,geometry:o}:{type:"Feature",id:e,bbox:r,properties:i,geometry:o}}function u(t,n){var e=i(t.transform),r=t.arcs;function o(t,n){n.length&&n.pop();for(var i=r[t<0?~t:t],o=0,a=i.length;o<a;++o)n.push(e(i[o],o));t<0&&function(t,n){for(var e,r=t.length,i=r-n;i<--r;)e=t[i],t[i++]=t[r],t[r]=e}(n,a)}function a(t){return e(t)}function u(t){for(var n=[],e=0,r=t.length;e<r;++e)o(t[e],n);return n.length<2&&n.push(n[0]),n}function c(t){for(var n=u(t);n.length<4;)n.push(n[0]);return n}function f(t){return t.map(c)}return function t(n){var e,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(t)};case"Point":e=a(n.coordinates);break;case"MultiPoint":e=n.coordinates.map(a);break;case"LineString":e=u(n.arcs);break;case"MultiLineString":e=n.arcs.map(u);break;case"Polygon":e=f(n.arcs);break;case"MultiPolygon":e=n.arcs.map(f);break;default:return null}return{type:r,coordinates:e}}(n)}var c=function(t,n){var e={},r={},i={},o=[],a=-1;function u(t,n){for(var r in t){var i=t[r];delete n[i.start],delete i.start,delete i.end,i.forEach((function(t){e[t<0?~t:t]=1})),o.push(i)}}return n.forEach((function(e,r){var i,o=t.arcs[e<0?~e:e];o.length<3&&!o[1][0]&&!o[1][1]&&(i=n[++a],n[a]=e,n[r]=i)})),n.forEach((function(n){var e,o,a=function(n){var e,r=t.arcs[n<0?~n:n],i=r[0];t.transform?(e=[0,0],r.forEach((function(t){e[0]+=t[0],e[1]+=t[1]}))):e=r[r.length-1];return n<0?[e,i]:[i,e]}(n),u=a[0],c=a[1];if(e=i[u])if(delete i[e.end],e.push(n),e.end=c,o=r[c]){delete r[o.start];var f=o===e?e:e.concat(o);r[f.start=e.start]=i[f.end=o.end]=f}else r[e.start]=i[e.end]=e;else if(e=r[c])if(delete r[e.start],e.unshift(n),e.start=u,o=i[u]){delete i[o.end];var s=o===e?e:o.concat(e);r[s.start=o.start]=i[s.end=e.end]=s}else r[e.start]=i[e.end]=e;else r[(e=[n]).start=u]=i[e.end=c]=e})),u(i,r),u(r,i),n.forEach((function(t){e[t<0?~t:t]||o.push([t])})),o},f=function(t){return u(t,s.apply(this,arguments))};function s(t,n,e){var r,i,o;if(arguments.length>1)r=l(t,n,e);else for(i=0,r=new Array(o=t.arcs.length);i<o;++i)r[i]=i;return{type:"MultiLineString",arcs:c(t,r)}}function l(t,n,e){var r,i=[],o=[];function a(t){var n=t<0?~t:t;(o[n]||(o[n]=[])).push({i:t,g:r})}function u(t){t.forEach(a)}function c(t){t.forEach(u)}return function t(n){switch(r=n,n.type){case"GeometryCollection":n.geometries.forEach(t);break;case"LineString":u(n.arcs);break;case"MultiLineString":case"Polygon":c(n.arcs);break;case"MultiPolygon":!function(t){t.forEach(c)}(n.arcs)}}(n),o.forEach(null==e?function(t){i.push(t[0].i)}:function(t){e(t[0].g,t[t.length-1].g)&&i.push(t[0].i)}),i}var h=new ArrayBuffer(16);new Float64Array(h),new Uint32Array(h);Math.PI,Math.abs,Math.atan2,Math.cos,Math.sin},222:function(t,n,e){"use strict";n.a=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e}},223:function(t,n,e){"use strict";var r=e(100),i=e(101),o=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r.a);n.a=Object(i.a)(o)},224:function(t,n,e){"use strict";var r=e(100),i=e(101),o=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r.a);n.a=Object(i.a)(o)},225:function(t,n,e){"use strict";var r=e(100),i=e(101),o=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r.a);n.a=Object(i.a)(o)},226:function(t,n,e){"use strict";var r=e(100),i=e(101),o=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r.a);n.a=Object(i.a)(o)},227:function(t,n,e){"use strict";var r=e(100),i=e(101),o=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r.a);n.a=Object(i.a)(o)},228:function(t,n,e){"use strict";function r(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(204!==t.status&&205!==t.status)return t.json()}n.a=function(t,n){return fetch(t,n).then(r)}},232:function(t,n,e){"use strict";var r=e(90),i=e(102);function o(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}var a=function(t,n,e,i,a){var c,f,s=[],l=[];if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,i,u,f=t[0],h=t[n];if(i=f,u=h,Object(r.a)(i[0]-u[0])<r.d&&Object(r.a)(i[1]-u[1])<r.d){if(!f[2]&&!h[2]){for(a.lineStart(),c=0;c<n;++c)a.point((f=t[c])[0],f[1]);return void a.lineEnd()}h[0]+=2*r.d}s.push(e=new o(f,t,null,!0)),l.push(e.o=new o(f,null,e,!1)),s.push(e=new o(h,t,null,!1)),l.push(e.o=new o(h,null,e,!0))}})),s.length){for(l.sort(n),u(s),u(l),c=0,f=l.length;c<f;++c)l[c].e=e=!e;for(var h,d,p=s[0];;){for(var v=p,g=!0;v.v;)if((v=v.n)===p)return;h=v.z,a.lineStart();do{if(v.v=v.o.v=!0,v.e){if(g)for(c=0,f=h.length;c<f;++c)a.point((d=h[c])[0],d[1]);else i(v.x,v.n.x,1,a);v=v.n}else{if(g)for(h=v.p.z,c=h.length-1;c>=0;--c)a.point((d=h[c])[0],d[1]);else i(v.x,v.p.x,-1,a);v=v.p}h=(v=v.o).z,g=!g}while(!v.v);a.lineEnd()}}};function u(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}var c=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN};var f=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return c(n(t),e)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}(c);f.right,f.left;var s=Array.prototype;s.slice,s.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function l(t,n,e,o){function u(r,i){return t<=r&&r<=e&&n<=i&&i<=o}function c(r,i,a,u){var c=0,s=0;if(null==r||(c=f(r,a))!==(s=f(i,a))||l(r,i)<0^a>0)do{u.point(0===c||3===c?t:e,c>1?o:n)}while((c=(c+a+4)%4)!==s);else u.point(i[0],i[1])}function f(i,o){return Object(r.a)(i[0]-t)<r.d?o>0?0:3:Object(r.a)(i[0]-e)<r.d?o>0?2:1:Object(r.a)(i[1]-n)<r.d?o>0?1:0:o>0?3:2}function s(t,n){return l(t.x,n.x)}function l(t,n){var e=f(t,1),r=f(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(r){var f,l,h,d,p,v,g,b,y,m,w,x=r,E=function(){var t,n=[];return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:i.a,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}(),M={point:j,lineStart:function(){M.point=O,l&&l.push(h=[]);m=!0,y=!1,g=b=NaN},lineEnd:function(){f&&(O(d,p),v&&y&&E.rejoin(),f.push(E.result()));M.point=j,y&&x.lineEnd()},polygonStart:function(){x=E,f=[],l=[],w=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,r=l.length;e<r;++e)for(var i,a,u=l[e],c=1,f=u.length,s=u[0],h=s[0],d=s[1];c<f;++c)i=h,a=d,s=u[c],h=s[0],d=s[1],a<=o?d>o&&(h-i)*(o-a)>(d-a)*(t-i)&&++n:d<=o&&(h-i)*(o-a)<(d-a)*(t-i)&&--n;return n}(),e=w&&n,i=(f=function(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}(f)).length;(e||i)&&(r.polygonStart(),e&&(r.lineStart(),c(null,null,1,r),r.lineEnd()),i&&a(f,s,n,c,r),r.polygonEnd());x=r,f=l=h=null}};function j(t,n){u(t,n)&&x.point(t,n)}function O(r,i){var a=u(r,i);if(l&&h.push([r,i]),m)d=r,p=i,v=a,m=!1,a&&(x.lineStart(),x.point(r,i));else if(a&&y)x.point(r,i);else{var c=[g=Math.max(-1e9,Math.min(1e9,g)),b=Math.max(-1e9,Math.min(1e9,b))],f=[r=Math.max(-1e9,Math.min(1e9,r)),i=Math.max(-1e9,Math.min(1e9,i))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,f,t,n,e,o)?a&&(x.lineStart(),x.point(r,i),w=!1):(y||(x.lineStart(),x.point(c[0],c[1])),x.point(f[0],f[1]),a||x.lineEnd(),w=!1)}g=r,b=i,y=a}return M}}var h=e(139);function d(t){return function(n){var e=new p;for(var r in t)e[r]=t[r];return e.stream=n,e}}function p(){}p.prototype={constructor:p,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var v=e(137),g=e(138);function b(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Object(v.a)(e,t.stream(g.a)),n(g.a.result()),null!=r&&t.clipExtent(r),t}function y(t,n,e){return b(t,(function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])}),e)}n.a=function(){var t,n,e,i,o,a,u,c=1,f=0,s=0,p=1,v=1,g=0,m=null,w=1,x=1,E=d({point:function(t,n){var e=O([t,n]);this.stream.point(e[0],e[1])}}),M=h.a;function j(){return w=c*p,x=c*v,a=u=null,O}function O(e){var r=e[0]*w,i=e[1]*x;if(g){var o=i*t-r*n;r=r*t+i*n,i=o}return[r+f,i+s]}return O.invert=function(e){var r=e[0]-f,i=e[1]-s;if(g){var o=i*t+r*n;r=r*t-i*n,i=o}return[r/w,i/x]},O.stream=function(t){return a&&u===t?a:a=E(M(u=t))},O.postclip=function(t){return arguments.length?(M=t,m=e=i=o=null,j()):M},O.clipExtent=function(t){return arguments.length?(M=null==t?(m=e=i=o=null,h.a):l(m=+t[0][0],e=+t[0][1],i=+t[1][0],o=+t[1][1]),j()):null==m?null:[[m,e],[i,o]]},O.scale=function(t){return arguments.length?(c=+t,j()):c},O.translate=function(t){return arguments.length?(f=+t[0],s=+t[1],j()):[f,s]},O.angle=function(e){return arguments.length?(g=e%360*r.e,n=Object(r.f)(g),t=Object(r.b)(g),j()):g*r.c},O.reflectX=function(t){return arguments.length?(p=t?-1:1,j()):p<0},O.reflectY=function(t){return arguments.length?(v=t?-1:1,j()):v<0},O.fitExtent=function(t,n){return y(O,t,n)},O.fitSize=function(t,n){return function(t,n,e){return y(t,[[0,0],n],e)}(O,t,n)},O.fitWidth=function(t,n){return function(t,n,e){return b(t,(function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])}),e)}(O,t,n)},O.fitHeight=function(t,n){return function(t,n,e){return b(t,(function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])}),e)}(O,t,n)},O}},235:function(t,n,e){"use strict";var r=e(139),i=e(137),o=function(){return new a};function a(){this.reset()}a.prototype={constructor:a,reset:function(){this.s=this.t=0},add:function(t){c(u,t,this.t),c(this,u.s,this.s),this.s?this.t+=u.t:this.s=u.t},valueOf:function(){return this.s}};var u=new a;function c(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var f,s,l,h,d=e(90),p=e(102),v=o(),g=o(),b={point:p.a,lineStart:p.a,lineEnd:p.a,polygonStart:function(){b.lineStart=y,b.lineEnd=x},polygonEnd:function(){b.lineStart=b.lineEnd=b.point=p.a,v.add(Object(d.a)(g)),g.reset()},result:function(){var t=v/2;return v.reset(),t}};function y(){b.point=m}function m(t,n){b.point=w,f=l=t,s=h=n}function w(t,n){g.add(h*t-l*n),l=t,h=n}function x(){w(f,s)}var E,M,j,O,_=b,S=e(138),k=0,L=0,N=0,P=0,A=0,F=0,G=0,R=0,T=0,q={point:I,lineStart:z,lineEnd:J,polygonStart:function(){q.lineStart=B,q.lineEnd=H},polygonEnd:function(){q.point=I,q.lineStart=z,q.lineEnd=J},result:function(){var t=T?[G/T,R/T]:F?[P/F,A/F]:N?[k/N,L/N]:[NaN,NaN];return k=L=N=P=A=F=G=R=T=0,t}};function I(t,n){k+=t,L+=n,++N}function z(){q.point=C}function C(t,n){q.point=Y,I(j=t,O=n)}function Y(t,n){var e=t-j,r=n-O,i=Object(d.g)(e*e+r*r);P+=i*(j+t)/2,A+=i*(O+n)/2,F+=i,I(j=t,O=n)}function J(){q.point=I}function B(){q.point=U}function H(){W(E,M)}function U(t,n){q.point=W,I(E=j=t,M=O=n)}function W(t,n){var e=t-j,r=n-O,i=Object(d.g)(e*e+r*r);P+=i*(j+t)/2,A+=i*(O+n)/2,F+=i,G+=(i=O*t-j*n)*(j+t),R+=i*(O+n),T+=3*i,I(j=t,O=n)}var X=q;function Z(t){this._context=t}Z.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,d.h)}},result:p.a};var D,K,Q,V,$,tt=o(),nt={point:p.a,lineStart:function(){nt.point=et},lineEnd:function(){D&&rt(K,Q),nt.point=p.a},polygonStart:function(){D=!0},polygonEnd:function(){D=null},result:function(){var t=+tt;return tt.reset(),t}};function et(t,n){nt.point=rt,K=V=t,Q=$=n}function rt(t,n){V-=t,$-=n,tt.add(Object(d.g)(V*V+$*$)),V=t,$=n}var it=nt;function ot(){this._string=[]}function at(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}ot.prototype={_radius:4.5,_circle:at(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=at(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};n.a=function(t,n){var e,o,a=4.5;function u(t){return t&&("function"===typeof a&&o.pointRadius(+a.apply(this,arguments)),Object(i.a)(t,e(o))),o.result()}return u.area=function(t){return Object(i.a)(t,e(_)),_.result()},u.measure=function(t){return Object(i.a)(t,e(it)),it.result()},u.bounds=function(t){return Object(i.a)(t,e(S.a)),S.a.result()},u.centroid=function(t){return Object(i.a)(t,e(X)),X.result()},u.projection=function(n){return arguments.length?(e=null==n?(t=null,r.a):(t=n).stream,u):t},u.context=function(t){return arguments.length?(o=null==t?(n=null,new ot):new Z(n=t),"function"!==typeof a&&o.pointRadius(a),u):n},u.pointRadius=function(t){return arguments.length?(a="function"===typeof t?t:(o.pointRadius(+t),+t),u):a},u.projection(t).context(n)}},248:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(170),i=e(132),o=e(115);function a(t,n,e){var r=t[n];t[n]=t[e],t[e]=r}var u=e(136),c=e.n(u),f=e(91),s=c.a.mark(l);function l(t,n){var e,r,i,o,a,u,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(void 0!==n){c.next=21;break}e=Object(f.a)(t),c.prev=2,e.s();case 4:if((r=e.n()).done){c.next=11;break}if(!(null!=(i=r.value)&&(i=+i)>=i)){c.next=9;break}return c.next=9,i;case 9:c.next=4;break;case 11:c.next=16;break;case 13:c.prev=13,c.t0=c.catch(2),e.e(c.t0);case 16:return c.prev=16,e.f(),c.finish(16);case 19:c.next=40;break;case 21:o=-1,a=Object(f.a)(t),c.prev=23,a.s();case 25:if((u=a.n()).done){c.next=32;break}if(l=u.value,!(null!=(l=n(l,++o,t))&&(l=+l)>=l)){c.next=30;break}return c.next=30,l;case 30:c.next=25;break;case 32:c.next=37;break;case 34:c.prev=34,c.t1=c.catch(23),a.e(c.t1);case 37:return c.prev=37,a.f(),c.finish(37);case 40:case"end":return c.stop()}}),s,null,[[2,13,16,19],[23,34,37,40]])}function h(t,n,e){if(u=(t=Float64Array.from(l(t,e))).length){if((n=+n)<=0||u<2)return Object(i.a)(t);if(n>=1)return Object(r.a)(t);var u,c=(u-1)*n,f=Math.floor(c),s=Object(r.a)(function t(n,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.a;i>r;){if(i-r>600){var c=i-r+1,f=e-r+1,s=Math.log(c),l=.5*Math.exp(2*s/3),h=.5*Math.sqrt(s*l*(c-l)/c)*(f-c/2<0?-1:1),d=Math.max(r,Math.floor(e-f*l/c+h)),p=Math.min(i,Math.floor(e+(c-f)*l/c+h));t(n,e,d,p,u)}var v=n[e],g=r,b=i;for(a(n,r,e),u(n[i],v)>0&&a(n,r,i);g<b;){for(a(n,g,b),++g,--b;u(n[g],v)<0;)++g;for(;u(n[b],v)>0;)--b}0===u(n[r],v)?a(n,r,b):a(n,++b,i),b<=e&&(r=b+1),e<=b&&(i=b-1)}return n}(t,f).subarray(0,f+1));return s+(Object(i.a)(t.subarray(f+1))-s)*(c-f)}}},254:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(78),i=e(240),o=e(218),a=e(95),u=e(87),c=e(119);e(175);e(178);function f(){var t,n,e,u,c,f=0,s=1,l=a.c,h=!1;function d(n){return isNaN(n=+n)?c:l(0===e?.5:(n=(u(n)-t)*e,h?Math.max(0,Math.min(1,n)):n))}function p(t){return function(n){var e,i,o,a;return arguments.length?(e=n,o=(i=Object(r.a)(e,2))[0],a=i[1],l=t(o,a),d):[l(0),l(1)]}}return d.domain=function(i){var o,a;return arguments.length?(o=i,a=Object(r.a)(o,2),f=a[0],s=a[1],t=u(f=+f),n=u(s=+s),e=t===n?0:1/(n-t),d):[f,s]},d.clamp=function(t){return arguments.length?(h=!!t,d):h},d.interpolator=function(t){return arguments.length?(l=t,d):l},d.range=p(i.a),d.rangeRound=p(o.a),d.unknown=function(t){return arguments.length?(c=t,d):c},function(r){return u=r,t=r(f),n=r(s),e=t===n?0:1/(n-t),d}}function s(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function l(){var t=Object(c.b)(f()(a.c));return t.copy=function(){return s(t,l())},u.a.apply(t,arguments)}},90:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"h",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"e",(function(){return u})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return s})),e.d(n,"g",(function(){return l}));var r=1e-6,i=Math.PI,o=2*i,a=180/i,u=i/180,c=Math.abs,f=(Math.atan,Math.atan2,Math.cos),s=(Math.ceil,Math.exp,Math.floor,Math.log,Math.pow,Math.sin),l=(Math.sign,Math.sqrt);Math.tan}}]);
//# sourceMappingURL=10.d2b4e77f.chunk.js.map