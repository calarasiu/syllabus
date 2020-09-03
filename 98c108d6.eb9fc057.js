(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(235)),l={id:"learning-objectives",title:"Learning Objectives",sidebar_label:"Learning Objectives"},c={unversionedId:"react/week-2/learning-objectives",id:"react/week-2/learning-objectives",isDocsHomePage:!1,title:"Learning Objectives",description:"React Week 2",source:"@site/docs/react/week-2/learning-objectives.md",slug:"/react/week-2/learning-objectives",permalink:"/react/week-2/learning-objectives",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-2/learning-objectives.md",version:"current",sidebar_label:"Learning Objectives",sidebar:"React",previous:{title:"Instructor Notes",permalink:"/react/week-1/instructors"},next:{title:"React - Week 2",permalink:"/react/week-2/lesson"}},o=[{value:"React Week 2",id:"react-week-2",children:[{value:"Event Handlers",id:"event-handlers",children:[]},{value:"Re-rendering components",id:"re-rendering-components",children:[]},{value:"State",id:"state",children:[]}]}],u={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-week-2"},"React Week 2"),Object(i.b)("h3",{id:"event-handlers"},"Event Handlers"),Object(i.b)("p",null,"Able to handle user interaction via events."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Explain why calling event handlers in JSX (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"onClick={handleClick()}"),") is incorrect"),Object(i.b)("li",{parentName:"ul"},"Able to pass functions to event handlers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Able to log to the console when a button is clicked"),Object(i.b)("li",{parentName:"ul"},"Able to pass as props")))),Object(i.b)("h3",{id:"re-rendering-components"},"Re-rendering components"),Object(i.b)("p",null,"Explain that React handles updating the DOM when components are re-rendered."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Explain that this makes code more understandable, as we don't need to worry about managing the DOM")),Object(i.b)("h3",{id:"state"},"State"),Object(i.b)("p",null,"Create a simple counter component, demonstrating knowledge of React state."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Able to import ",Object(i.b)("inlineCode",{parentName:"li"},"useState")," from the React package"),Object(i.b)("li",{parentName:"ul"},"Able to use state variables",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Initialise with a value with ",Object(i.b)("inlineCode",{parentName:"li"},"useState(initialValue)")),Object(i.b)("li",{parentName:"ul"},"Destructure state variable into ",Object(i.b)("inlineCode",{parentName:"li"},"[stateValue, setStateValue]")),Object(i.b)("li",{parentName:"ul"},"Render state variables to the view"),Object(i.b)("li",{parentName:"ul"},"Update with a new value with ",Object(i.b)("inlineCode",{parentName:"li"},"setStateValue(newValue)")))),Object(i.b)("li",{parentName:"ul"},"Identify when to use props or state")))}b.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);