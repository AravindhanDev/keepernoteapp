(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{42:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=n(38),u=n(21),i=n(34),m=n.n(i);var s=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null)," Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},E=n(36),p=n.n(E);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},b=n(25),d=n(32),g=n(37),O=n.n(g),h=n(71),j=n(72);var S=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],s=i[1];function f(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title",autoComplete:"off"}),l.a.createElement("textarea",{name:"content",onChange:f,value:m.content,onFocus:function(){c(!0)},placeholder:"Take a note...",rows:r?"3":"1"}),l.a.createElement(j.a,{in:r},l.a.createElement(h.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(O.a,null)))))};var k=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("notes"))||[]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return localStorage.setItem("notes",JSON.stringify(n)),l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(S,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b91b29d1.chunk.js.map