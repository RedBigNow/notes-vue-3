(function(t){function e(e){for(var c,o,a=e[0],s=e[1],l=e[2],b=0,j=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&j.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);u&&u(e);while(j.length)j.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},r={app:0},i=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22e2":function(t,e,n){},"3d33":function(t,e,n){},4457:function(t,e,n){"use strict";n("4517")},4517:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("6c02");function i(t,e,n,r,i,o){var a=Object(c["y"])("Form"),s=Object(c["y"])("List");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(a,{onOnSubmit:o.handleSubmit},null,8,["onOnSubmit"]),Object(c["j"])(s,{onOnRemove:o.handleRemove,items:i.notes},null,8,["onOnRemove","items"])],64)}n("a434");var o={class:"note-form__wrapper"},a=Object(c["g"])("button",{class:"btn btnPrimary",type:"submit"},"Add new note",-1);function s(t,e,n,r,i,s){var l=Object(c["y"])("TagList");return Object(c["t"])(),Object(c["f"])("div",o,[Object(c["g"])("form",{class:"note-form",onSubmit:e[1]||(e[1]=Object(c["G"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(c["F"])(Object(c["g"])("textarea",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return i.value=t}),required:"",placeholder:"Type ur note"},null,512),[[c["C"],i.value]]),Object(c["j"])(l,{onOnItemClick:s.handleTagClick,items:i.tags},null,8,["onOnItemClick","items"]),a],32)])}n("4de4"),n("159b");var l={class:"tag-list"},u=["onClick"];function b(t,e,n,r,i,o){return Object(c["t"])(),Object(c["f"])("div",l,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(n.items,(function(e){return Object(c["t"])(),Object(c["f"])("div",{class:Object(c["p"])(["tag-item",[{isActive:e.isActive},{isPreview:n.isPreview}]]),key:e.title,onClick:function(n){return t.$emit("onItemClick",e)}},[Object(c["g"])("span",null,Object(c["A"])(e.title),1)],10,u)})),128))])}var j={props:{items:{type:Array,required:!0},isPreview:{type:Boolean,default:!1}}},O=(n("91e1"),n("6b0d")),f=n.n(O);const v=f()(j,[["render",b]]);var d=v,p={components:{TagList:d},data:function(){return{value:"",tags:[{title:"home",isActive:!1},{title:"work",isActive:!1},{title:"travel",isActive:!1}],activeTags:[]}},methods:{onSubmit:function(){this.activeTags=this.tags.filter((function(t){return!0===t.isActive})),this.$emit("onSubmit",{title:this.value,tags:this.activeTags}),this.value="",this.tags.forEach((function(t){t.isActive=!1}))},handleTagClick:function(t){t.isActive=!t.isActive}}};n("4457");const m=f()(p,[["render",s]]);var g=m,h={class:"notes-list"},y={class:"note-header"},k=["onClick"],w={class:"note-footer"};function A(t,e,n,r,i,o){var a=Object(c["y"])("TagList");return Object(c["t"])(),Object(c["f"])("div",h,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(n.items,(function(e,n){return Object(c["t"])(),Object(c["f"])("div",{class:"note-item",key:n},[Object(c["g"])("div",y,[Object(c["g"])("p",null,Object(c["A"])(e.title),1),Object(c["g"])("span",{style:{cursor:"pointer"},onClick:function(e){return t.$emit("onRemove",n)}},"✕",8,k)]),Object(c["g"])("div",w,[e.tags&&e.tags.length>0?(Object(c["t"])(),Object(c["d"])(a,{key:0,isPreview:"",items:e.tags},null,8,["items"])):Object(c["e"])("",!0)])])})),128))])}var S={components:{TagList:d},props:{items:{type:Array,required:!0}}};n("a151");const x=f()(S,[["render",A]]);var C=x,P={components:{Form:g,List:C},data:function(){return{notes:[{title:"Learn Vue 3",tags:[{title:"home"}]},{title:"Work Vue 3",tags:[{title:"home"},{title:"work"}]},{title:"Lore Vue 3",tags:[]}]}},mounted:function(){this.getNotes()},watch:{notes:{handler:function(t){localStorage.setItem("notes",JSON.stringify(t))},deep:!0}},methods:{getNotes:function(){var t=localStorage.getItem("notes");t&&(this.notes=JSON.parse(t))},handleSubmit:function(t){var e={title:t.title,tags:t.tags};this.notes.push(e)},handleRemove:function(t){this.notes.splice(t,1)}}};const T=f()(P,[["render",i]]);var _=T,V={class:"md-body"},L=Object(c["h"])('<h1>В этом приложении:</h1><ul><li>Полная настройка шаблона на Vue CLI</li><li>Установка и настройка Vue-router для Vue.js 3</li><li>Динамическая перерисовка без перезагрузки страницы</li><li>Динамичный навбар и ссылки</li><li>Обработка несуществующих роутов</li><li>Хеши и моды для роутера</li><li>Настройка общего конфига</li></ul><h2>И мелочи:</h2><ul><li>Полное настройка для переиспользования шаблона</li><li>Универсальный компонент списка и форм</li><li>Универсальный компонент Тегов для будущих проектов</li></ul><p>Сделано на курсе <a href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/">Vue.js 3 c нуля до результата</a></p>',5),F=[L];function I(t,e){return Object(c["t"])(),Object(c["f"])("div",V,F)}const N={},R=f()(N,[["render",I]]);var E=R,J={class:"title"};function M(t,e){return Object(c["t"])(),Object(c["f"])("h1",J,"404 Not Found")}const q={},z=f()(q,[["render",M]]);var H=z,$=Object(r["b"])(),B=Object(r["a"])({history:$,routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:E},{path:"/:CatchAll(.*)",name:"404",component:H}]}),G=B,U={class:"wapper"},W={class:"wrapper-content"},D={class:"container"};function K(t,e,n,r,i,o){var a=Object(c["y"])("Header"),s=Object(c["y"])("router-view"),l=Object(c["y"])("Footer");return Object(c["t"])(),Object(c["f"])("div",U,[Object(c["j"])(a),Object(c["g"])("div",W,[Object(c["g"])("div",D,[Object(c["j"])(s)])]),Object(c["j"])(l)])}var Q={class:"navbar"},X={class:"container"},Y={class:"navbar-content"},Z={class:"navbar-list"};function tt(t,e,n,r,i,o){var a=Object(c["y"])("router-link");return Object(c["t"])(),Object(c["f"])("header",null,[Object(c["g"])("div",Q,[Object(c["g"])("div",X,[Object(c["g"])("div",Y,[Object(c["j"])(a,{class:"navbar-logo",to:"/"},{default:Object(c["E"])((function(){return[Object(c["i"])(Object(c["A"])(i.title),1)]})),_:1}),Object(c["g"])("ul",Z,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.links,(function(t){return Object(c["t"])(),Object(c["f"])("li",{class:"navbar-item",key:t.alias},[Object(c["j"])(a,{class:"navbar-link",to:t.url},{default:Object(c["E"])((function(){return[Object(c["i"])(Object(c["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])])])}var et={title:"Notes Vue 3"},nt=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}],ct={data:function(){return{title:et.title,links:nt}}};const rt=f()(ct,[["render",tt]]);var it=rt,ot={class:"footer"},at={class:"container"},st={class:"navbar-list"},lt=Object(c["g"])("ul",{class:"navbar-list",style:{"margin-top":"14px"}},[Object(c["g"])("li",{class:"navbar-item",style:{opacity:"0.6","font-size":"14px"}},[Object(c["g"])("a",{href:"https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/",class:"navbar-link"},'Сделано на курсе "Vue.js 3 c нуля до результата"')])],-1);function ut(t,e,n,r,i,o){var a=Object(c["y"])("router-link");return Object(c["t"])(),Object(c["f"])("footer",ot,[Object(c["g"])("div",at,[Object(c["g"])("ul",st,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.links,(function(t){return Object(c["t"])(),Object(c["f"])("li",{class:"navbar-item",key:t.alias},[Object(c["j"])(a,{class:"navbar-link",to:t.url},{default:Object(c["E"])((function(){return[Object(c["i"])(Object(c["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))]),lt])])}var bt={data:function(){return{links:nt}}};const jt=f()(bt,[["render",ut]]);var Ot=jt,ft={components:{Header:it,Footer:Ot}};const vt=f()(ft,[["render",K]]);var dt=vt,pt=(n("c1c3"),Object(c["c"])(dt));pt.use(G),pt.mount("#app")},"91e1":function(t,e,n){"use strict";n("3d33")},a151:function(t,e,n){"use strict";n("22e2")},c1c3:function(t,e,n){}});