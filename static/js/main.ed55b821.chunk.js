(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{21:function(e,a,s){},22:function(e,a,s){"use strict";s.r(a);var t=s(1),i=s.n(t),c=s(7),r=s.n(c),o=s(3),n=s(0),d=function(){var e=["Sobre-M\xed","Portafolio","Contacto"],a=Object(t.useState)(""),s=Object(o.a)(a,2),i=s[0],c=s[1],r=Object(t.useState)(""),d=Object(o.a)(r,2),b=d[0],j=d[1],l=Object(t.useState)(""),h=Object(o.a)(l,2),u=h[0],f=h[1];return Object(t.useEffect)((function(){window.addEventListener("scroll",(function(e){window.scrollY>0?j("fadeOut"):j("fadeIn")}))}),[]),Object(n.jsxs)("header",{className:""!==b?b:"",id:"Inicio",children:[Object(n.jsxs)("div",{className:"div-logo",children:[Object(n.jsx)("span",{className:"hover cursor",children:"<"}),Object(n.jsx)("span",{className:"hover cursor",children:"/>"})]}),Object(n.jsxs)("nav",{children:[Object(n.jsx)("ul",{id:"ul-visible",children:e.map((function(e,a){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{onMouseOver:function(e){return f(e.target.name)},onMouseOut:function(e){return f("")},href:"#".concat(e),name:e,className:"hover",children:[Object(n.jsx)("span",{className:u===e?"visible":"",children:"<"}),e,Object(n.jsx)("span",{className:u===e?"visible":"",children:"/>"})]})},a)}))}),Object(n.jsxs)("div",{id:"hamburguesa",onClick:function(){return c(""===i?"encendido":"")},children:[Object(n.jsx)("div",{className:""===i?"":"linea1"}),Object(n.jsx)("div",{className:""===i?"":"linea2"}),Object(n.jsx)("div",{className:""===i?"":"linea3"})]}),Object(n.jsx)("ul",{id:"ul-hamburguesa",className:"".concat(""===i?"no-visible":""),children:e.map((function(e,a){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#".concat(e),children:e})},a)}))})]})]})},b=s(2),j=s.n(b),l=function(){return Object(t.useEffect)((function(){j.a.init({duration:2500})}),[]),Object(n.jsxs)("div",{id:"parallax",children:[Object(n.jsx)("h1",{"data-aos":"fade-right",className:"hover cursor",children:"Brian Cabrera"}),Object(n.jsx)("h2",{"data-aos":"fade-left",className:"hover cursor",children:"Front-End Developer"})]})},h=function(){return Object(t.useEffect)((function(){j.a.init()}),[]),Object(n.jsxs)("section",{id:"Portafolio",className:"padding-section",children:[Object(n.jsx)("h1",{"data-aos":"fade-right",className:"hover cursor",children:"Portafolio"}),Object(n.jsx)("div",{"data-aos":"fade-left",className:"portafolios",children:[{proyecto:"https://brian432.github.io/Movies-App/",codigo:"https://github.com/brian432/Movies-App"},{proyecto:"https://brian432.github.io/weather-app/",codigo:"https://github.com/brian432/weather-app"},{proyecto:"https://brian432.github.io/api-countries/",codigo:"https://github.com/brian432/api-countries"},{proyecto:"https://brian432.github.io/job-listings/",codigo:"https://github.com/brian432/job-listings"},{proyecto:"https://brian432.github.io/ip-address-tracker/",codigo:"https://github.com/brian432/ip-address-tracker"},{proyecto:"https://brian432.github.io/rock-paper-scissors/",codigo:"https://github.com/brian432/rock-paper-scissors"}].map((function(e,a){return Object(n.jsxs)("div",{id:"div".concat(a),className:"div-filter",children:[Object(n.jsx)("a",{href:e.proyecto,target:"_blank",children:Object(n.jsx)("button",{className:"btn hover",children:"Ver proyecto"})}),Object(n.jsx)("a",{href:e.codigo,target:"_blank",children:Object(n.jsx)("button",{className:"btn hover",children:"Ver codigo"})})]},a)}))})]})},u=function(){return Object(t.useEffect)((function(){j.a.init()}),[]),Object(n.jsxs)("section",{id:"Sobre-M\xed",className:"padding-section",children:[Object(n.jsxs)("div",{"data-aos":"fade-up",className:"about",children:[Object(n.jsxs)("p",{id:"descripcion",className:"cursor",children:["Hola! Mi nombre es Brian Cabrera, soy desarrollador Front-End y futuro Full-Stack. Estoy en continuo aprendizaje. Las tecnologias que utilizo",Object(n.jsx)("i",{id:"arrow",className:"fas fa-arrow-down hover"})]}),Object(n.jsxs)("div",{id:"div-iconos",className:"cursor",children:[Object(n.jsx)("i",{id:"html5",className:"fab fa-html5"}),Object(n.jsx)("i",{id:"css3",className:"fab fa-css3-alt"}),Object(n.jsx)("i",{id:"js",className:"fab fa-js"}),Object(n.jsx)("i",{id:"react",className:"fab fa-react"}),Object(n.jsx)("i",{id:"bootstrap",className:"fab fa-bootstrap"}),Object(n.jsx)("i",{id:"sass",className:"fab fa-sass"})]})]}),Object(n.jsx)("h1",{className:"hover cursor","data-aos":"fade-down",children:"Sobre m\xed"})]})},f=s(4),m=function(){var e=Object(f.b)("xayarnjr"),a=Object(o.a)(e,2),s=a[0],i=a[1];return Object(t.useEffect)((function(){j.a.init()}),[]),Object(n.jsxs)("section",{id:"Contacto",className:"padding-section",children:[Object(n.jsxs)("div",{id:"div-form","data-aos":"fade-up",children:[Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Nombre",required:!0}),Object(n.jsx)(f.a,{prefix:"Name",field:"name",errors:s.errors}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",required:!0}),Object(n.jsx)(f.a,{prefix:"Email",field:"email",errors:s.errors}),Object(n.jsx)("textarea",{id:"message",name:"message",placeholder:"Mensaje...",required:!0}),Object(n.jsx)(f.a,{prefix:"Message",field:"message",errors:s.errors}),Object(n.jsx)("button",{type:"submit",disabled:s.submitting,className:"btn-form hover",children:"Enviar"})]}),Object(n.jsxs)("div",{id:"iconos-contacto",children:[Object(n.jsx)("a",{id:"enlace-linkedin",href:"https://www.linkedin.com/in/brian-cabrera-b94305226/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("i",{id:"linkedin",className:"fab fa-linkedin"})}),Object(n.jsx)("a",{id:"enlace-github",href:"https://github.com/brian432",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("i",{id:"github",className:"fab fa-github-square"})})]})]}),Object(n.jsx)("h1",{"data-aos":"fade-down",className:"hover cursor",children:"Contacto"}),Object(n.jsx)("a",{id:"arrow-up","data-aos":"fade",href:"Inicio",children:Object(n.jsx)("i",{className:"fas fa-arrow-up hover"})})]})};s(20);var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)(l,{}),Object(n.jsx)(u,{}),Object(n.jsx)(h,{}),Object(n.jsx)(m,{})]})};s(21);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ed55b821.chunk.js.map