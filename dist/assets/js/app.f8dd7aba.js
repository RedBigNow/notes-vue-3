(function(t){function e(e){for(var r,a,i=e[0],l=e[1],s=e[2],b=0,j=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&j.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(j.length)j.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2683:function(t,e,n){"use strict";n("ca10")},"2da9":function(t,e,n){"use strict";n("a3ab")},"2de0":function(t,e,n){"use strict";n("33e9")},"33e9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("6c02");function o(t,e,n,c,o,a){var i=Object(r["y"])("Form"),l=Object(r["y"])("List");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(i,{onOnSubmit:a.handleSubmit},null,8,["onOnSubmit"]),Object(r["j"])(l,{onOnRemove:a.handleRemove,items:o.notes},null,8,["onOnRemove","items"])],64)}n("a434");var a={class:"note-form__wrapper"},i=Object(r["g"])("button",{class:"btn btnPrimary",type:"submit"},"Add new note",-1);function l(t,e,n,c,o,l){var s=Object(r["y"])("TagList");return Object(r["t"])(),Object(r["f"])("div",a,[Object(r["g"])("form",{class:"note-form",onSubmit:e[1]||(e[1]=Object(r["G"])((function(){return l.onSubmit&&l.onSubmit.apply(l,arguments)}),["prevent"]))},[Object(r["F"])(Object(r["g"])("textarea",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.value=t}),required:"",placeholder:"Type ur note"},null,512),[[r["C"],o.value]]),Object(r["j"])(s,{onOnItemClick:l.handleTagClick,items:o.tags},null,8,["onOnItemClick","items"]),i],32)])}var s={class:"tag-list"},u=["onClick"];function b(t,e,n,c,o,a){return Object(r["t"])(),Object(r["f"])("div",s,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.items,(function(e){return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["p"])(["tag-item",{isPreview:n.isPreview}]),key:e,onClick:function(n){return t.$emit("onItemClick",e)}},[Object(r["g"])("span",null,Object(r["A"])(e),1)],10,u)})),128))])}var j={props:{items:{type:Array,required:!0},isPreview:{type:Boolean,default:!1}}},O=(n("2da9"),n("6b0d")),f=n.n(O);const d=f()(j,[["render",b]]);var p=d,v={components:{TagList:p},data:function(){return{value:"",tags:["home","work","travel"]}},methods:{onSubmit:function(){this.$emit("onSubmit",this.value),this.value=""},handleTagClick:function(t){console.log(t)}}};n("2683");const m=f()(v,[["render",l]]);var g=m,h={class:"notes-list"},y={class:"note-header"},k=["onClick"],w={class:"note-footer"};function S(t,e,n,c,o,a){var i=Object(r["y"])("TagList");return Object(r["t"])(),Object(r["f"])("div",h,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.items,(function(e,n){return Object(r["t"])(),Object(r["f"])("div",{class:"note-item",key:n},[Object(r["g"])("div",y,[Object(r["g"])("p",null,Object(r["A"])(e.title),1),Object(r["g"])("span",{style:{cursor:"pointer"},onClick:function(e){return t.$emit("onRemove",n)}},"✕",8,k)]),Object(r["g"])("div",w,[e.tags&&e.tags.length>0?(Object(r["t"])(),Object(r["d"])(i,{key:0,isPreview:"",items:e.tags},null,8,["items"])):Object(r["e"])("",!0)])])})),128))])}var x={components:{TagList:p},props:{items:{type:Array,required:!0}}};n("2de0");const C=f()(x,[["render",S]]);var P=C,T={components:{Form:g,List:P},data:function(){return{notes:[{title:"Learn Vue 3",tags:["work"]},{title:"Work Vue 3",tags:["work","home"]},{title:"Test test",tags:[]}]}},mounted:function(){this.getNotes()},watch:{notes:{handler:function(t){localStorage.setItem("notes",JSON.stringify(t))},deep:!0}},methods:{getNotes:function(){var t=localStorage.getItem("notes");t&&(this.notes=JSON.parse(t))},handleSubmit:function(t){var e={title:t,tags:[]};this.notes.push(e)},handleRemove:function(t){this.notes.splice(t,1)}}};const _=f()(T,[["render",o]]);var A=_,L={class:"md-body"},V=Object(r["h"])('<h1>В этом приложении:</h1><ul><li>Полная настройка шаблона на Vue CLI</li><li>Установка и настройка Vue-router для Vue.js 3</li><li>Динамическая перерисовка без перезагрузки страницы</li><li>Динамичный навбар и ссылки</li><li>Обработка несуществующих роутов</li><li>Хеши и моды для роутера</li><li>Настройка общего конфига</li></ul><p>Сделано на курсе <a href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/">&quot;Vue.js 3 c нуля до результата&quot;</a></p>',3),F=[V];function I(t,e){return Object(r["t"])(),Object(r["f"])("div",L,F)}const q={},N=f()(q,[["render",I]]);var R=N,J={class:"title"};function M(t,e){return Object(r["t"])(),Object(r["f"])("h1",J,"404 Not Found")}const z={},E=f()(z,[["render",M]]);var H=E,$=Object(c["b"])(),B=Object(c["a"])({history:$,routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:R},{path:"/:CatchAll(.*)",name:"404",component:H}]}),G=B,U={class:"wapper"},W={class:"wrapper-content"},D={class:"container"};function K(t,e,n,c,o,a){var i=Object(r["y"])("Header"),l=Object(r["y"])("router-view"),s=Object(r["y"])("Footer");return Object(r["t"])(),Object(r["f"])("div",U,[Object(r["j"])(i),Object(r["g"])("div",W,[Object(r["g"])("div",D,[Object(r["j"])(l)])]),Object(r["j"])(s)])}var Q={class:"navbar"},X={class:"container"},Y={class:"navbar-content"},Z={class:"navbar-list"};function tt(t,e,n,c,o,a){var i=Object(r["y"])("router-link");return Object(r["t"])(),Object(r["f"])("header",null,[Object(r["g"])("div",Q,[Object(r["g"])("div",X,[Object(r["g"])("div",Y,[Object(r["j"])(i,{class:"navbar-logo",to:"/"},{default:Object(r["E"])((function(){return[Object(r["i"])(Object(r["A"])(o.title),1)]})),_:1}),Object(r["g"])("ul",Z,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.links,(function(t){return Object(r["t"])(),Object(r["f"])("li",{class:"navbar-item",key:t.alias},[Object(r["j"])(i,{class:"navbar-link",to:t.url},{default:Object(r["E"])((function(){return[Object(r["i"])(Object(r["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])])])}var et={title:"Template"},nt=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}],rt={data:function(){return{title:et.title,links:nt}}};const ct=f()(rt,[["render",tt]]);var ot=ct,at={class:"footer"},it={class:"container"},lt={class:"navbar-list"},st=Object(r["g"])("ul",{class:"navbar-list",style:{"margin-top":"14px"}},[Object(r["g"])("li",{class:"navbar-item",style:{opacity:"0.6","font-size":"14px"}},[Object(r["g"])("a",{href:"https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/",class:"navbar-link"},'Сделано на курсе "Vue.js 3 c нуля до результата"')])],-1);function ut(t,e,n,c,o,a){var i=Object(r["y"])("router-link");return Object(r["t"])(),Object(r["f"])("footer",at,[Object(r["g"])("div",it,[Object(r["g"])("ul",lt,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.links,(function(t){return Object(r["t"])(),Object(r["f"])("li",{class:"navbar-item",key:t.alias},[Object(r["j"])(i,{class:"navbar-link",to:t.url},{default:Object(r["E"])((function(){return[Object(r["i"])(Object(r["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))]),st])])}var bt={data:function(){return{links:nt}}};const jt=f()(bt,[["render",ut]]);var Ot=jt,ft={components:{Header:ot,Footer:Ot}};const dt=f()(ft,[["render",K]]);var pt=dt,vt=(n("c1c3"),Object(r["c"])(pt));vt.use(G),vt.mount("#app")},a3ab:function(t,e,n){},c1c3:function(t,e,n){},ca10:function(t,e,n){}});