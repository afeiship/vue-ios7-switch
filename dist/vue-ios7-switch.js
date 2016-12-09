!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueIos7Switch=t():e.VueIos7Switch=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),o=i(s);t.default=o.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-ios7-switch",props:{cssClass:String,checked:Boolean,size:String,theme:{type:String,default:"green"}}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".vue-ios7-switch{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent}.vue-ios7-switch input{opacity:0;position:absolute}.vue-ios7-switch input+span{position:relative;display:inline-block;width:1.65em;height:1em;background:#fff;box-shadow:inset 0 0 0 .0625em #e9e9e9;border-radius:.5em;vertical-align:-.15em;transition:all .4s cubic-bezier(.17,.67,.43,.98)}.vue-ios7-switch:active+span,.vue-ios7-switch input+span:active{box-shadow:inset 0 0 0 .73em #e9e9e9}.vue-ios7-switch input+span:after{position:absolute;display:block;content:'';width:.875em;height:.875em;border-radius:.4375em;top:.0625em;left:.0625em;background:#fff;box-shadow:inset 0 0 0 .03em rgba(0,0,0,.1),0 0 .05em rgba(0,0,0,.05),0 .1em .2em rgba(0,0,0,.2);transition:all .25s ease-out}.vue-ios7-switch:active input+span:after,.vue-ios7-switch input+span:active:after{width:1.15em}.vue-ios7-switch input:checked+span:after{left:.7125em}.vue-ios7-switch:active input:checked+span:after,.vue-ios7-switch input:checked+span:active:after{left:.4375em}.vue-ios7-switch input:focus+span:after{box-shadow:inset 0 0 0 .03em rgba(0,0,0,.15),0 0 .05em rgba(0,0,0,.08),0 .1em .2em rgba(0,0,0,.3);background:#fff}.vue-ios7-switch input:focus+span{box-shadow:inset 0 0 0 .0625em #dadada}.vue-ios7-switch[data-theme=green] input:checked+span{box-shadow:inset 0 0 0 .73em #4cd964}.vue-ios7-switch[data-theme=green] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #2ac845}.vue-ios7-switch[data-theme=blue] input:checked+span{box-shadow:inset 0 0 0 .73em #26a2ff}.vue-ios7-switch[data-theme=blue] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #008af2}","",{version:3,sources:["/./src/components/VueIos7Switch.vue"],names:[],mappings:"AACA,iBAAiB,qBAAqB,kBAAkB,eAAe,yBAAyB,sBAAsB,qBAAqB,iBAAiB,wCAAwC,+BAA+B,CAClO,AACD,uBAAuB,UAAU,iBAAiB,CACjD,AACD,4BAA4B,kBAAkB,qBAAqB,aAAa,WAAW,gBAAiB,uCAAwC,mBAAoB,sBAAuB,gDAAwD,CACtP,AACD,gEAAgE,oCAAqC,CACpG,AACD,kCAAkC,kBAAkB,cAAc,WAAW,aAAc,cAAe,sBAAuB,YAAa,aAAc,gBAAiB,iGAAwG,4BAA6B,CACjT,AACD,kFAAkF,YAAY,CAC7F,AACD,0CAA0C,YAAa,CACtD,AACD,kGAAkG,YAAa,CAC9G,AACD,wCAAwC,kGAAyG,eAAe,CAC/J,AACD,kCAAkC,sCAAuC,CACxE,AACD,sDAAwD,oCAAqC,CAC5F,AACD,4DAA8D,oCAAqC,CAClG,AACD,qDAAuD,oCAAqC,CAC3F,AACD,2DAA6D,oCAAqC,CACjG",file:"VueIos7Switch.vue",sourcesContent:['\n.vue-ios7-switch{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent\n}\n.vue-ios7-switch input{opacity:0;position:absolute\n}\n.vue-ios7-switch input+span{position:relative;display:inline-block;width:1.65em;height:1em;background:white;box-shadow:inset 0 0 0 0.0625em #e9e9e9;border-radius:0.5em;vertical-align:-0.15em;transition:all 0.4s cubic-bezier(0.17, 0.67, 0.43, 0.98)\n}\n.vue-ios7-switch:active+span,.vue-ios7-switch input+span:active{box-shadow:inset 0 0 0 0.73em #e9e9e9\n}\n.vue-ios7-switch input+span:after{position:absolute;display:block;content:\'\';width:0.875em;height:0.875em;border-radius:0.4375em;top:0.0625em;left:0.0625em;background:white;box-shadow:inset 0 0 0 0.03em rgba(0,0,0,0.1),0 0 0.05em rgba(0,0,0,0.05),0 0.1em 0.2em rgba(0,0,0,0.2);transition:all 0.25s ease-out\n}\n.vue-ios7-switch:active input+span:after,.vue-ios7-switch input+span:active:after{width:1.15em\n}\n.vue-ios7-switch input:checked+span:after{left:0.7125em\n}\n.vue-ios7-switch:active input:checked+span:after,.vue-ios7-switch input:checked+span:active:after{left:0.4375em\n}\n.vue-ios7-switch input:focus+span:after{box-shadow:inset 0 0 0 0.03em rgba(0,0,0,0.15),0 0 0.05em rgba(0,0,0,0.08),0 0.1em 0.2em rgba(0,0,0,0.3);background:#fff\n}\n.vue-ios7-switch input:focus+span{box-shadow:inset 0 0 0 0.0625em #dadada\n}\n.vue-ios7-switch[data-theme="green"] input:checked+span{box-shadow:inset 0 0 0 0.73em #4cd964\n}\n.vue-ios7-switch[data-theme="green"] input:focus:checked+span{box-shadow:inset 0 0 0 0.73em #2ac845\n}\n.vue-ios7-switch[data-theme="blue"] input:checked+span{box-shadow:inset 0 0 0 0.73em #26a2ff\n}\n.vue-ios7-switch[data-theme="blue"] input:focus:checked+span{box-shadow:inset 0 0 0 0.73em #008af2\n}\n'],sourceRoot:"webpack://"}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var i,s;n(7),i=n(1);var o=n(5);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,e.exports=i},function(e,t){e.exports={render:function(){var e=this;return e._h("label",{class:["vue-ios7-switch",e.cssClass],style:{"font-size":e.size},attrs:{"data-theme":e.theme}},[e._h("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked}})," ",e._h("span")])},staticRenderFns:[]}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],s=d[i.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](i.parts[o]);for(;o<i.parts.length;o++)s.parts.push(u(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(u(i.parts[o],t));d[i.id]={id:i.id,refs:1,parts:a}}}}function s(e){for(var t=[],n={},i=0;i<e.length;i++){var s=e[i],o=s[0],a=s[1],r=s[2],u=s[3],c={css:a,media:r,sourceMap:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=l(),i=v[v.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e,t){var n,i,s;if(t.singleton){var o=m++;n=f||(f=r(t)),i=c.bind(null,n,o,!1),s=c.bind(null,n,o,!0)}else n=r(t),i=p.bind(null,n),s=function(){a(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}function c(e,t,n,i){var s=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,s);else{var o=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var n=t.css,i=t.media,s=t.sourceMap;if(i&&e.setAttribute("media",i),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},A=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),l=h(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,m=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=A()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var r=n[a],u=d[r.id];u.refs--,o.push(u)}if(e){var c=s(e);i(c,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete d[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{});i.locals&&(e.exports=i.locals)}])});
//# sourceMappingURL=vue-ios7-switch.js.map