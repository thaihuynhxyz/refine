"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>x,frontMatter:()=>h,metadata:()=>b,toc:()=>k});var i=n(87462),o=(n(67294),n(3905)),a=n(12179),r=n(76638),s=n(26089),l=n(38474),p=n(21474),c=n(94248),m=n(73178),u=n(62790),d=n(13910);const h={title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",slug:"neumorphic-css",authors:"joel_adewole",tags:["neumorphism","css","UI","neumorphic","design"],image:"/img/blog/2022-08-20-neumorphic-css/social.png",hide_table_of_contents:!1},g=void 0,b={permalink:"/blog/neumorphic-css",source:"@site/blog/2022-08-20-neumorphic-css.md",title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",date:"2022-08-20T00:00:00.000Z",formattedDate:"August 20, 2022",tags:[{label:"neumorphism",permalink:"/blog/tags/neumorphism"},{label:"css",permalink:"/blog/tags/css"},{label:"UI",permalink:"/blog/tags/ui"},{label:"neumorphic",permalink:"/blog/tags/neumorphic"},{label:"design",permalink:"/blog/tags/design"}],readingTime:8.44,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://media-exp1.licdn.com/dms/image/C4D03AQEe9WMRgmUP-A/profile-displayphoto-shrink_800_800/0/1661127238637?e=1666828800&v=beta&t=Bvpzz5mN5PudGFbtV29l9lPvtbmqJ9hq-3SXhFpAQWo",key:"joel_adewole"}],frontMatter:{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",slug:"neumorphic-css",authors:"joel_adewole",tags:["neumorphism","css","UI","neumorphic","design"],image:"/img/blog/2022-08-20-neumorphic-css/social.png",hide_table_of_contents:!1},prevItem:{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine"},nextItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},relatedPosts:[{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:9.385,date:"2022-09-01T00:00:00.000Z"},{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox",formattedDate:"August 30, 2022",authors:[{name:"Muhammed Arslan Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQHKaAhTXytlEw/profile-displayphoto-shrink_800_800/0/1643978601436?e=1666224000&v=beta&t=vM0ajc7YqtkLTEhxsLs-cIcc1bGnYwl8-Ct1bsCoUL0",key:"muhammed_arslan"}],readingTime:7.575,date:"2022-08-30T00:00:00.000Z"}],authorPosts:[{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://media-exp1.licdn.com/dms/image/C4D03AQEe9WMRgmUP-A/profile-displayphoto-shrink_800_800/0/1661127238637?e=1666828800&v=beta&t=Bvpzz5mN5PudGFbtV29l9lPvtbmqJ9hq-3SXhFpAQWo",key:"joel_adewole"}],readingTime:8.78,date:"2022-09-09T00:00:00.000Z"}]},f={authorsImageUrls:[void 0]},k=[{value:"Introduction",id:"introduction",level:2},{value:"What is Neumorphism?",id:"what-is-neumorphism",level:2},{value:"Neumorphism in User Interface",id:"neumorphism-in-user-interface",level:2},{value:"Neumorphism in Accessibility/User Experience",id:"neumorphism-in-accessibilityuser-experience",level:2},{value:"Neumorphism in CSS",id:"neumorphism-in-css",level:2},{value:"Buttons",id:"buttons",level:3},{value:"Normal State",id:"normal-state",level:4},{value:"Hover State",id:"hover-state",level:4},{value:"Cards",id:"cards",level:3},{value:"Form Inputs",id:"form-inputs",level:3},{value:"Text box",id:"text-box",level:4},{value:"Checkbox",id:"checkbox",level:4},{value:"Unchecked",id:"unchecked",level:5},{value:"Checked",id:"checked",level:5},{value:"Pros of using Neumorphism",id:"pros-of-using-neumorphism",level:2},{value:"Cons of using Neumorphism",id:"cons-of-using-neumorphism",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],A={toc:k};function x(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Many developers are still unaware of some design trends even after practicing web design for many years.\nIn a bid to maximize the aesthetic value of web page layouts, designers and developers have adopted various design trends.\nThe Parallax Effect, 3D graphics, Memphis design, Neo-brutalism, Visible boundaries, and Retro Revolutions are a few of these trends. "),(0,o.kt)("p",null,'"How do you know which to use?" is the question.'),(0,o.kt)("p",null,"In contemporary web design, designers and developers have adopted minimalism as a strategy for streamlining interface design by removing unnecessary components and focusing on performance. Design concepts like ",(0,o.kt)("a",{parentName:"p",href:"https://www.sketch.com/blog/2022/06/14/complete-guide-skeuomorphism/"},"skeuomorphic design"),", ",(0,o.kt)("a",{parentName:"p",href:"https://elementor.com/blog/flat-design/"},"flat design"),", and neomorphic design can be used to accomplish this. "),(0,o.kt)("p",null,"In this article, we'll talk about the Neumorphism trend, which emphasizes minimalism in design circles, and show you how to use it as a web developer in CSS. You'll need a basic understanding of CSS and HTML to follow along with the article."),(0,o.kt)("p",null,"Steps we\u2019ll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-neumorphism"},"What is Neumorphism?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#neumorphism-in-user-interface"},"Neumorphism in User Interface")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#neumorphism-in-accessibilityuser-experience"},"Neumorphism in Accessibility/User Experience")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#neumorphism-in-css"},"Neumorphism in CSS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pros-of-using-neumorphism"},"Pros of using Neumorphism")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cons-of-using-neumorphism"},"Cons of using Neumorphism"))),(0,o.kt)("h2",{id:"what-is-neumorphism"},"What is Neumorphism?"),(0,o.kt)("p",null,"Neumorphism often referred to as Soft design, is a skeuomorphic design adaption coupled with flat design. It is a visual effect that mixes background colours, shadows, shapes, gradients, and highlights to achieve intense yet minimal real-life graphic effects on the user interface elements. "),(0,o.kt)("p",null,"Neumorphism has made a significant impact on web design, simplifying and improving the user interface while facilitating interaction for people who are colour-blind or visually impaired.\nNeumorphism's uniformity and scalability are additional advantages. "),(0,o.kt)("p",null,"Let's see how Neumorphism affects the user interface using what we know about it."),(0,o.kt)("h2",{id:"neumorphism-in-user-interface"},"Neumorphism in User Interface"),(0,o.kt)("p",null,"Neumorphism requires little or no use of flashy elements. The properties needed are shadows and lights.",(0,o.kt)("br",{parentName:"p"}),"\n","Neuomorphism makes UI elements appear inside or directly on the background layer, in contrast to other design trends that make items appear above the background."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:a.Z,alt:"card image"})),(0,o.kt)("a",{href:"https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6"},(0,o.kt)("i",null,"From: Neumorphism in user interfaces by Michal Malewicz")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The image below illustrates the simplest UI design template for Neumorphism; feel free to modify it as you see fit."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:r.Z,alt:"background image"})),(0,o.kt)("a",{href:"https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6"},(0,o.kt)("i",null,"From: Neumorphism in user interfaces by Michal Malewicz")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The following are crucial guidelines from this recipe: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elements have background colours that match the parent element's background."),(0,o.kt)("li",{parentName:"ul"},"Elements have almost transparent or no border. "),(0,o.kt)("li",{parentName:"ul"},"Shadows are in pairs, one with positive values and the other with negative values.")),(0,o.kt)("h2",{id:"neumorphism-in-accessibilityuser-experience"},"Neumorphism in Accessibility/User Experience"),(0,o.kt)("p",null,"The main issue Neumorphism has in terms of accessibility is contrast; you'll notice that most Neumorphic designs use a grey-on-white colour scheme making it challenging for people to see if not implemented well, especially in bright light. "),(0,o.kt)("p",null,"The image below displays an original Neumorphic design and the outcome under low vision."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:s.Z,alt:"background image"})),(0,o.kt)("a",{href:"https://axesslab.com/neumorphism/"},(0,o.kt)("i",null,"From: Neumorphism \u2013 the accessible and inclusive way by Hampus Sethfors")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Neumorphism's top accessibility rule is to comply with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"Web Content Accessibility Guidelines WCAG 2.1")," requirements on contrasts to make your design accessible to as many people as possible, including visually impaired users. "),(0,o.kt)("p",null,"Another issue is with clickable items; even though you're aiming for minimalism, don't abuse the flat design idea. When users interact with clickable objects like buttons and links, they need to change their appearance and should be obvious."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/pankod/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,o.kt)("h2",{id:"neumorphism-in-css"},"Neumorphism in CSS"),(0,o.kt)("p",null,"Now that you know how Neumorphism affects UI/UX let's look at how you as a developer might use it in actual projects."),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"You should consider the normal and hover/clicked state when making a Neumorphic button. I've demonstrated how to style a button using the Neumorphism technique in the code sample below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<button>Click me</button>\n<style>\nbody {\n  background: #ccc;\n  display: grid;\n  place-items: center;\n}\nbutton {\n  background: #ccc;\n  border: none;\n  padding: 20px 40px;\n  font-size: 20px;\n  box-shadow: 5px 5px 10px rgba(163,177,198,0.5), -5px -5px 10px rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  border-radius: 15px;\n}\n\nbutton:hover {\n  box-shadow: 5px 5px 10px rgba(163,177,198,0.7), -5px -5px 10px rgba(255, 255, 255, 0.4);\n  filter: brightness(1.05);\n}\n</style>\n")),(0,o.kt)("h4",{id:"normal-state"},"Normal State"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:m.Z,alt:"normal state"})),(0,o.kt)("h4",{id:"hover-state"},"Hover State"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:c.Z,alt:"hover state"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/wolz-codelife/pen/OJvaooK"},"codepen"),"."),(0,o.kt)("h3",{id:"cards"},"Cards"),(0,o.kt)("p",null,"Cards are a type of container used to display sections in grids or galleries. I've demonstrated how to style a card with a header and body using the Neumorphism technique in the code sample below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card">\n  <div class="header">Header</div>\n  <div class="body">Body</div>\n</div>\n\n<style>\nbody {\n  background: #ccc;\n  display: grid;\n  place-items: center;\n}\n.card {\n  width: 200px;\n  height: 200px;\n  background: #ccc;\n  border: none;\n  font-size: 20px;\n  box-shadow: 5px 5px 10px rgba(163,177,198,0.5), -5px -5px 10px rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.card .header {\n  box-shadow: 0px 1px 2px  rgba(163,177,198,0.5);\n  border-radius: 15px 15px 0px 0px;\n  padding: 10px;\n  height: 40px;\n}\n.card .body {\n  padding: 10px;\n  flex: 1;\n  border-radius: 0px 0px 15px 15px;\n}\n\n</style>\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:l.Z,alt:"cards"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/wolz-codelife/pen/vYRQVpE"},"codepen"),"."),(0,o.kt)("h3",{id:"form-inputs"},"Form Inputs"),(0,o.kt)("p",null,"The text box and checkbox are examples of form inputs which make up a form in HTML. I've demonstrated how to style an HTML text box and checkbox using Neumorphism in the code snippet below:"),(0,o.kt)("h4",{id:"text-box"},"Text box"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <label>Text box</label>\n  <input type="text" placeholder="Text Box" />\n</form>\n<style>\nbody {\n  background: #ccc;\n  display: grid;\n  place-items: center;\n}\nform {\n  width: 250px;\n  background: #ccc;\n  border: none;\n  box-shadow: 5px 5px 10px rgba(163, 177, 198, 0.5),\n    -5px -5px 10px rgba(255, 255, 255, 0.6);\n  padding: 20px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  padding: 10px 5px;\n}\nform input[type="text"] {\n  background: #ccc;\n  padding: 10px;\n  height: 30px;\n  border: none;\n  box-shadow: inset 5px 5px 10px rgba(163, 177, 198, 0.5),\n    inset -5px -5px 12px rgba(255, 255, 255, 0.8);\n  outline: none;\n  border-radius: 10px;\n}\n</style>\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:u.Z,alt:"textbox"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/wolz-codelife/pen/oNqQaav"},"codepen")),(0,o.kt)("h4",{id:"checkbox"},"Checkbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <label>Checkbox</label>\n  <div class="form_group">\n    <input type="checkbox" id="checkbox" />\n    <span class="span">\n      <i class="fa fa-home"></i>\n    </span>\n  </div>\n</form>\n<style>\nbody {\n  background: #ccc;\n  display: grid;\n  place-items: center;\n}\nform {\n  width: 250px;\n  background: #ccc;\n  border: none;\n  box-shadow: 5px 5px 10px rgba(163, 177, 198, 0.5),\n    -5px -5px 10px rgba(255, 255, 255, 0.6);\n  padding: 20px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  padding: 10px 5px;\n}\nform .form_group {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  margin-top: 5px;\n}\nform .form_group input {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  opacity: 0;\n  \n}\nform .form_group .span {\n  background: #ccc;\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  box-shadow: 2px 2px 5px rgba(163, 177, 198, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.8);\n  outline: none;\n  border-radius: 10px;\n}\n\nform .form_group .checked {\n  box-shadow: inset 2px 2px 5px rgba(163, 177, 198, 0.8),\n    inset -2px -2px 5px rgba(255, 255, 255, 0.8);\n}\n</style>\n<script>\n    let checkbox = document.querySelector("#checkbox")\n    let span = document.querySelector(".span")\n\n    checkbox.addEventListener("change", () => {\n    span.classList.toggle("checked")\n    })\n<\/script>\n')),(0,o.kt)("h5",{id:"unchecked"},"Unchecked"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:d.Z,alt:"unchecked"})),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"checked"},"Checked"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:p.Z,alt:"checked"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/wolz-codelife/pen/VwXqPQm"},"codepen"),"."),(0,o.kt)("h2",{id:"pros-of-using-neumorphism"},"Pros of using Neumorphism"),(0,o.kt)("p",null,"It is not sufficient to implement a concept; you also need to understand the requirements for using it. Neumorphism offers a variety of benefits and drawbacks that should be considered before adopting it."),(0,o.kt)("p",null,"When creating websites that demand users to interact with them for a long time, consider Neumorphism. Users dislike cluttered and complex user interfaces, and Neumorphism helps to keep things simple."),(0,o.kt)("p",null,"Neumorphism helps simplify decision-making when selecting colours. Additionally, since some people struggle with colour combinations, using Neumorphism reduces the chance of using conflicting colour schemes."),(0,o.kt)("p",null,"Elements resemble one another. It is easier to implement transitions without worrying about colour discrepancies.\nIt is easier to switch between light and dark mode because there are fewer colours to convert."),(0,o.kt)("h2",{id:"cons-of-using-neumorphism"},"Cons of using Neumorphism"),(0,o.kt)("p",null,"Neumorphism is a great option to consider when designing, but it has some limitations, which does not imply that you shouldn't use it; you may need to take additional measures to get the best outcome."),(0,o.kt)("p",null,"Because Neumorphism elements share the same colour as the background, the contrast ratio is the most important concern. You should therefore handle contrast more carefully to prevent straining users' eyes."),(0,o.kt)("p",null,"Another issue is spacing; elements have pairs of shadows, which takes up more space than usual. You will need to manage space since pairing the shadow is necessary."),(0,o.kt)("p",null,"Users tend to miss Call To Actions(CTA) when Neumorphism is poorly implemented."),(0,o.kt)("p",null,"Neumorphism streamlines your creative options. Designers need to follow specific guidelines when applying elements like shadows, colours, and so on."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Using Neumorphism appropriately can produce mind-blowing results. You will have realistic-looking 3D effects, which improve your users' experience. "),(0,o.kt)("p",null,"Visit this ",(0,o.kt)("a",{parentName:"p",href:"https://neumorphism.io/#55b9f3"},"Neumorphism Playground")," if you wish to experiment with different ideas using Neumorphism.\nAdditionally, you may learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://www.svgator.com/blog/neumorphism-origin-influence-design/"},"Neumorphism's history")," and how it combines flat and skeuomorphic design."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,o.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),", if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/pankod/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is an open source, React-based framework for building CRUD applications ",(0,o.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,o.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,o.kt)("strong",{parentName:"p"},"styling"),", ",(0,o.kt)("strong",{parentName:"p"},"customization")," and ",(0,o.kt)("strong",{parentName:"p"},"project workflow.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,o.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials and example projects."))}x.isMDXComponent=!0},76638:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/background-c0f8c1f0710c286c3a572ed2dfd82cd3.png"},12179:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/card-7e8604f5e21f66c6adbd576484ffd211.png"},38474:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cards-53ca3a015e0785e692828b62f95c7a4b.png"},21474:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/checked-d9e22a67d921d5492960ddeca2ebf564.png"},94248:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},73178:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/normal_state-e7cc818c022ecb0026e2dc2563bcf3be.png"},62790:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/textbox-2315fc0e964f7eee81749d964b0621cb.png"},13910:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unchecked-132691057a86cf150b2f3fda389404bb.png"},26089:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vision-8da48fb729af3041a9da333ee4e7046e.png"}}]);