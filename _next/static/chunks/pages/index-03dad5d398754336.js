(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6561)}])},959:function(e,t,n){"use strict";var r=n(5893),i=n(1664),a=n(3288);t.Z=function(e){var t=e.href,n=e.isExternal,s=e.children;return(0,r.jsx)(i.default,{href:t,target:n?"_blank":void 0,rel:n?"noreferrer":void 0,children:(0,r.jsxs)("a",{className:"button-link",children:[s," ",(0,r.jsx)(a.Z,{})]})})}},7456:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(1664),s=n(9980),l=n.n(s),o=n(6010),c=n(5512),u=n(6724),d=n(9613),m=n(9036),f=n(3288),v=n(9255),h=n(8189),g=n(6040);t.Z=function(e){var t=e.event,n=e.reverseColumns,s=e.isFullPage,x=(0,c.h)().setAnimationStep,_=(0,o.Z)("event-detail",{"reverse-columns":n,"full-page":s});return(0,i.useEffect)((function(){x(7)}),[x]),(0,r.jsxs)("article",{className:_,children:[(0,r.jsxs)("div",{className:"event-detail__info",children:[(0,r.jsxs)("div",{className:"event-detail__meta",children:[(0,r.jsxs)("div",{className:"event-detail__column",children:[(0,r.jsx)(h.Z,{label:t.formattedDate.date}),(0,r.jsx)(m.Z,{type:t.type})]}),(0,r.jsx)(v.Z,{date:t.formattedDate.date,startTime:t.formattedDate.startTime,endTime:t.formattedDate.endTime})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{className:"event-detail__user",href:t.userLink,target:"_blank",rel:"noreferrer",children:t.userName}),s?(0,r.jsx)("h1",{className:"event-detail__title",children:t.title}):(0,r.jsx)(a.default,{href:u.Ks.linkTo({slug:t.slug}),children:(0,r.jsx)("a",{className:"event-detail__title",children:t.title})}),s?(0,r.jsx)("div",{className:"event-detail__text",dangerouslySetInnerHTML:{__html:l()().render(t.content)}}):null]}),s?null:(0,r.jsx)(g.Z,{href:t.linkUrl,children:(0,d.g)("event-button:".concat(t.type))})]}),s?(0,r.jsx)("div",{className:"event-detail__link-wrapper",children:(0,r.jsxs)("a",{className:"event-detail__link",href:t.linkUrl,target:"_blank",rel:"noreferrer",children:[(0,d.g)("event-button:".concat(t.type))," ",(0,r.jsx)(f.Z,{})]})}):null]})}},6561:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return A}});var r=n(5893),i=n(7294),a=n(9008),s=n(9613),l=n(959),o=n(6724),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n=(0,i.useState)(0),r=n[0],a=n[1];return(0,i.useEffect)((function(){var n=e.current;if(n){var r=function(){requestAnimationFrame((function(){var e=n.getBoundingClientRect().top,r=n.getBoundingClientRect().bottom;if(e<window.innerHeight&&r>0){var i=window.scrollY*t;a(i)}}))};return r(),window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}}),[t,e]),{translateY:r}},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.025,r=(0,i.useState)(0),a=r[0],s=r[1];return(0,i.useEffect)((function(){var r=e.current,i=t.current;if(r&&i){var a=function(){requestAnimationFrame((function(){var e=r.getBoundingClientRect().top,t=r.getBoundingClientRect().bottom;if(e<window.innerHeight&&t>0){var i=(100*t/window.innerHeight*n).toFixed(2);s(i)}}))};return a(),window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}}),[e,n,t]),{translateY:a}},d=function(e){var t=e.date,n=e.title,a=e.buttonText,d=(0,i.useRef)(null),m=(0,i.useRef)(null),f=c(m).translateY,v=u(m,d).translateY;return(0,r.jsx)("section",{className:"hero",children:(0,r.jsxs)("div",{className:"hero__grid",children:[(0,r.jsx)("div",{className:"hero__background",children:(0,r.jsx)("div",{className:"hero__image-wrapper",ref:m,style:{transform:"translateY(-".concat(f,"px)")},children:(0,r.jsx)("img",{className:"hero__image",ref:d,style:{transform:"scale(1.025) translateY(".concat(v,"%)")},src:"/images/opener.jpg",alt:(0,s.g)("hero:image-description")})})}),(0,r.jsxs)("div",{className:"hero__content",children:[(0,r.jsx)("p",{className:"hero__chip",children:t}),(0,r.jsx)("h1",{className:"hero__title",children:n}),(0,r.jsx)(l.Z,{href:o.$L.path,children:a})]})]})})},m=n(9980),f=n.n(m),v=function(e){var t=e.title,n=e.content,a=(0,i.useRef)(null),l=(0,i.useRef)(null),o=c(a,.01).translateY,u=c(l,.05).translateY;return(0,r.jsx)("section",{className:"about",children:(0,r.jsxs)("div",{className:"about__content",children:[(0,r.jsxs)("div",{className:"about__column",children:[(0,r.jsx)("h2",{className:"about__title",children:t}),(0,r.jsxs)("div",{className:"about__images",children:[(0,r.jsx)("img",{ref:a,style:{transform:"translateY(-".concat(o,"px)")},className:"about__image",src:"/images/about1.png",alt:(0,s.g)("hero:image-description")}),(0,r.jsx)("img",{ref:l,style:{transform:"translateY(-".concat(u,"px)")},className:"about__image--layer",src:"/images/about2.png",alt:(0,s.g)("hero:image-description")})]})]}),(0,r.jsx)("div",{className:"about__text",dangerouslySetInnerHTML:{__html:f()().render(n)}})]})})},h=n(3288),g=function(e){var t=e.title;return(0,r.jsx)("div",{className:"section-divider",children:(0,r.jsxs)("div",{className:"section-divider__content",children:[(0,r.jsx)("h3",{className:"section-divider__title",children:t}),(0,r.jsx)(h.Z,{})]})})},x=function(e){var t=e.image,n=e.imageDescription,a=e.title,s=(0,i.useRef)(null),l=c(s,.02).translateY;return(0,r.jsxs)("div",{className:"get-involved__example",ref:s,style:{transform:"translateY(-".concat(l,"px)")},children:[(0,r.jsx)("img",{className:"get-involved__image",src:t,alt:n}),(0,r.jsx)("p",{children:a})]})},_=function(e){var t=e.title,n=e.examplesTitle,i=e.examples,a=e.content;return(0,r.jsx)("section",{className:"get-involved",children:(0,r.jsxs)("div",{className:"get-involved__content",children:[(0,r.jsxs)("div",{className:"get-involved__header",children:[(0,r.jsx)("h2",{className:"get-involved__title",children:t}),(0,r.jsx)("div",{className:"get-involved__text",dangerouslySetInnerHTML:{__html:f()().render(a)}})]}),(0,r.jsx)(g,{title:n}),(0,r.jsx)("div",{className:"get-involved__examples",children:(0,r.jsx)("div",{className:"get-involved__list",children:i.map((function(e){var t=e.title,n=e.image,i=e.imageDescription;return(0,r.jsx)(x,{image:n,imageDescription:i,title:t},"example-".concat(t))}))})})]})})},p=n(7456),j=function(e){var t=e.title,n=e.buttonText,a=(0,i.useRef)(null),c=(0,i.useRef)(null),d=u(c,a,.05).translateY;return(0,r.jsxs)("div",{className:"connection",children:[(0,r.jsx)("div",{className:"connection__background",ref:c,children:(0,r.jsx)("img",{className:"connection__image",ref:a,style:{transform:"scale(1.1) translateY(".concat(d,"%)")},src:"/images/footer.jpg",alt:(0,s.g)("connection:image-description")})}),(0,r.jsxs)("div",{className:"connection__content",children:[(0,r.jsx)("h2",{className:"connection__title",children:t}),(0,r.jsx)("div",{className:"connection__button",children:(0,r.jsx)(l.Z,{href:o.$L.path,children:n})})]})]})};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(o){l=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){return(0,i.useMemo)((function(){return e.filter((function(e){var t=N(e.date.split("/").map((function(e){return parseInt(e)})),2),n=t[0],r=t[1],i=new Date,a=i.getUTCMonth()+1,s=i.getUTCDate();return n===a&&r>=s||n>a})).slice(0,3)}),[e])},y=function(e){var t=e.title,n=e.list,i=e.connectionTitle,a=e.connectionButtonText,s=b(n);return(0,r.jsxs)("section",{className:"events",children:[(0,r.jsxs)("div",{className:"events__content",children:[(0,r.jsx)(g,{title:t}),(0,r.jsx)("div",{className:"events__list",children:s.map((function(e,t){return(0,r.jsx)(p.Z,{event:e,reverseColumns:t%2!==0},e.slug)}))})]}),(0,r.jsx)(j,{title:i,buttonText:a})]})},T=n(6010),C=n(5512);var S=function(e){var t=window.pageYOffset,n=window.pageYOffset+window.innerHeight,r=e.getBoundingClientRect(),i=r.y+window.pageYOffset,a=r.y+r.height+window.pageYOffset;if(t>a||n<i)return 0;if(t<i&&n>a)return 100;if(i<t&&a>n)return 100;var s=r.height,l=s;i<t&&(l=s-(window.pageYOffset-i)),a>n&&(l-=a-n);var o=l/window.innerHeight*100;return Math.round(o)};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(e){var t=e.containerRef,n=(0,i.useState)({}),a=n[0],l=n[1],o=(0,C.h)(),c=o.setAnimationStep,u=o.animationStep,d=(0,i.useCallback)((function(e){var t=a[e].getBoundingClientRect().top+window.pageYOffset+-20;window.scrollTo({top:t,behavior:"smooth"})}),[a]);return(0,i.useEffect)((function(){var e=t.current.childNodes,n={};e.forEach((function(e){n[e.classList[0]]=e})),l(n);var r=function(){var t=Y(e).map((function(e){return S(e)})).findIndex((function(e){return e>=50}));c(t)};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[t]),(0,r.jsx)("div",{className:"anchor-navigation",children:Object.keys(a).map((function(e,t){return(0,r.jsx)("button",{className:(0,T.Z)("anchor-navigation__button",{active:u===t}),onClick:function(){return d(e,t)},children:(0,r.jsx)("span",{className:"anchor-navigation__text",children:(0,s.g)("anchor-nav:".concat(e))})},"anchor-".concat(e))}))})},L=!0;function A(e){var t=e.hero,n=e.about,l=e.getInvolved,o=e.events,c=e.connection,u=(0,i.useRef)(null),m=(0,C.h)().setAnimationStep;return(0,i.useEffect)((function(){m(0)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:(0,s.g)("meta:title")}),(0,r.jsx)("meta",{name:"description",content:(0,s.g)("meta:description")}),(0,r.jsx)("meta",{property:"og:title",content:(0,s.g)("meta:title")}),(0,r.jsx)("meta",{property:"og:description",content:(0,s.g)("meta:description")}),(0,r.jsx)("meta",{property:"og:image",content:"https://maintainermonth.github.com/images/og/generic.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:(0,s.g)("meta:title")}),(0,r.jsx)("meta",{name:"twitter:description",content:(0,s.g)("meta:description")}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://maintainermonth.github.com/images/og/generic.png"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(k,{containerRef:u}),(0,r.jsxs)("div",{ref:u,children:[(0,r.jsx)(d,{date:t.date,title:t.title,buttonText:t.buttonText}),(0,r.jsx)(v,{title:n.title,content:n.content}),(0,r.jsx)(_,{title:l.title,content:l.content,examplesTitle:l.examplesTitle,examples:l.examples}),(0,r.jsx)(y,{title:o.title,list:o.list,connectionTitle:c.title,connectionButtonText:c.buttonText})]})]})]})}},3288:function(e,t,n){"use strict";var r=n(5893);t.Z=function(){return(0,r.jsx)("svg",{className:"icon-arrow-right",width:"24",height:"24",fill:"none",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2197 19.0303C13.5126 19.3232 13.9874 19.3232 14.2803 19.0303L20.5303 12.7803C20.8232 12.4874 20.8232 12.0126 20.5303 11.7197L14.2803 5.46967C13.9874 5.17678 13.5126 5.17678 13.2197 5.46967C12.9268 5.76256 12.9268 6.23744 13.2197 6.53033L18.1893 11.5L3.75 11.5C3.33579 11.5 3 11.8358 3 12.25C3 12.6642 3.33579 13 3.75 13L18.1893 13L13.2197 17.9697C12.9268 18.2626 12.9268 18.7374 13.2197 19.0303Z",fill:"#24292E"})})}}},function(e){e.O(0,[187,583,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);