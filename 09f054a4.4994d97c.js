(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{235:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=b(o),p=n,d=h["".concat(i,".").concat(p)]||h[p]||u[p]||a;return o?r.a.createElement(d,l(l({ref:t},s),{},{components:o})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},62:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(2),r=o(6),a=(o(0),o(235)),i={id:"git-desktop",title:"Github Desktop Workshop",sidebar_label:"Github Desktop Workshop"},l={unversionedId:"workshops/git-desktop",id:"workshops/git-desktop",isDocsHomePage:!1,title:"Github Desktop Workshop",description:"Learning Objectives",source:"@site/docs/workshops/git-desktop-workshop.md",slug:"/workshops/git-desktop",permalink:"/workshops/git-desktop",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/git-desktop-workshop.md",version:"current",sidebar_label:"Github Desktop Workshop"},c=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Setup",id:"setup",children:[]},{value:"What is the problem?",id:"what-is-the-problem",children:[]},{value:"What is Github?",id:"what-is-github",children:[{value:"Exercise",id:"exercise",children:[]}]},{value:"What is Github Desktop?",id:"what-is-github-desktop",children:[{value:"Exercise",id:"exercise-1",children:[]}]},{value:"What about working in Teams?",id:"what-about-working-in-teams",children:[]},{value:"Branching",id:"branching",children:[]},{value:"Exercise",id:"exercise-2",children:[]},{value:"Pull requests",id:"pull-requests",children:[{value:"Exercise",id:"exercise-3",children:[]}]},{value:"(Optional) What is Git?",id:"optional-what-is-git",children:[]},{value:"Quiz",id:"quiz",children:[]}],s={rightToc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You will be able to create a repository on Github"),Object(a.b)("li",{parentName:"ul"},"You will be able to clone a repository using Github Desktop"),Object(a.b)("li",{parentName:"ul"},"You will be able to make changes to a repository using Github Desktop"),Object(a.b)("li",{parentName:"ul"},"You can define what the differences between Git and Github are"),Object(a.b)("li",{parentName:"ul"},"You can use git to submit all your homeworks to Github")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"It is important that all of the attendees have access to the CodeYourFuture Github Teams. Make sure that they have all been added and if they haven't add them."),Object(a.b)("h2",{id:"what-is-the-problem"},"What is the problem?"),Object(a.b)("p",null,"When programmers work together it can be hard to stay in sync. This can be demonstrated by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Have one person write three words on a piece of paper"),Object(a.b)("li",{parentName:"ul"},"Give the paper to the teacher and the teacher makes a copy of it"),Object(a.b)("li",{parentName:"ul"},"Somebody else can request the paper from the teacher"),Object(a.b)("li",{parentName:"ul"},"Change a word on the paper and give it back to the teacher.")),Object(a.b)("p",null,"The teacher is the single source of truth for the project. This is fine so long as both people don't make a change at the same time."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Now both students change a word on their piece of paper"),Object(a.b)("li",{parentName:"ul"},"They then try to give both pieces of paper to the teacher",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"But the teacher doesn't know what to do! Which one is correct?")))),Object(a.b)("p",null,"This is why Git was invented!"),Object(a.b)("h2",{id:"what-is-github"},"What is Github?"),Object(a.b)("p",null,"Give an overview of Github including"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A Project Overview"),Object(a.b)("li",{parentName:"ul"},"Issues"),Object(a.b)("li",{parentName:"ul"},"Creating a repository"),Object(a.b)("li",{parentName:"ul"},"Changing a file in a repository")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Repository")," - A repository is like a folder on your computer. It can hold a lot of other files.\n",Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Commit")," - When you commit - you are saving the file to your repository"),Object(a.b)("h3",{id:"exercise"},"Exercise"),Object(a.b)("p",null,"All students should now complete the following steps"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'1. Create a repository called "Code Your Future".\n2. Create a file in their repository called `ReadMe.md`\n3. Edit the ReadMe.md inside Github to include their name.\n')),Object(a.b)("h2",{id:"what-is-github-desktop"},"What is Github Desktop?"),Object(a.b)("p",null,"Github Desktop is a way to edit files on your computer instead of editing them online."),Object(a.b)("p",null,"Give a demonstration of"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Cloning a repository"),Object(a.b)("li",{parentName:"ol"},"Making a change to a file in the repository"),Object(a.b)("li",{parentName:"ol"},"Committing the changes to our local repository"),Object(a.b)("li",{parentName:"ol"},"Pushing our changes to Github")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Clone")," - Clone means to create a copy of the repository on your laptop\n",Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Push")," - Push means to send your saved copy of the repository to Github\n",Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Fetch")," - Find out if there have been any changes to the repository\n",Object(a.b)("strong",{parentName:"p"},"Glossary")," - ",Object(a.b)("em",{parentName:"p"},"Pull")," - Get the latest changes from the repository"),Object(a.b)("h3",{id:"exercise-1"},"Exercise"),Object(a.b)("p",null,"The students should now complete the following steps"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'1. Clone their repository called `Code Your Future` to their computer\n2. Fetch to find out if there have been any changes on Github\n3. Pull the changes that have happened from Github recently\n4. Change the "ReadMe.md" file to also include the city they live in\n5. Commit the change they have made\n6. Push the change to Github\n')),Object(a.b)("p",null,"Each person in the group should try this"),Object(a.b)("h2",{id:"what-about-working-in-teams"},"What about working in Teams?"),Object(a.b)("p",null,"Github also makes it really easy to work in teams."),Object(a.b)("p",null,"One way that we could work in a team is by making a list of our favorite things."),Object(a.b)("p",null,"In your teams you should"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Each clone this repository to their computers",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/GitTeaching"}),"https://github.com/CodeYourFuture/GitTeaching")))),Object(a.b)("li",{parentName:"ol"},"Each team member should take it in turns changing one work in the ReadMe.md file in the project."),Object(a.b)("li",{parentName:"ol"},"Make a list of your favorite things. This can be food, hobbies or places. It's completely up to you!")),Object(a.b)("p",null,"Be careful! Don't all add words at the same time!"),Object(a.b)("h2",{id:"branching"},"Branching"),Object(a.b)("p",null,"Sometimes it can be useful to work on something for a long time before showing it to everyone. This is why we use branching."),Object(a.b)("p",null,"The teacher should"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Show how you can create a branch in Github Desktop"),Object(a.b)("li",{parentName:"ol"},"Show how moving between Master and the Branch keeps two versions of the file")),Object(a.b)("h2",{id:"exercise-2"},"Exercise"),Object(a.b)("p",null,"All students should now"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'1. Create a branch called "my-favorite-stuff"\n2. Edit a file to add something that is your favorite\n3. Commit your change to the file\n4. Push your commit and your new branch to Github\n')),Object(a.b)("h2",{id:"pull-requests"},"Pull requests"),Object(a.b)("p",null,"Branching is particularly helpful for using in Pull Requests"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The teacher should show how to make a Pull Request in Github"),Object(a.b)("li",{parentName:"ol"},"The teacher should show how to comment on a PR in Github"),Object(a.b)("li",{parentName:"ol"},"The teacher should show how to merge a pull request in Github")),Object(a.b)("h3",{id:"exercise-3"},"Exercise"),Object(a.b)("p",null,"Now the students should try this themselves"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"1. Each student should go to this repository\n   - https://github.com/CodeYourFuture/GitTeaching\n2. They should open a pull request\n3. Share the link to their pull request in Slack with the rest of the class\n")),Object(a.b)("h2",{id:"optional-what-is-git"},"(Optional) What is Git?"),Object(a.b)("p",null,"This is advanced!"),Object(a.b)("p",null,"The Github Desktop tool is actually built on top of something called Git. Git lives entirely in the command line."),Object(a.b)("p",null,"The teacher should show"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to clone a repository"),Object(a.b)("li",{parentName:"ul"},"How to make a commit"),Object(a.b)("li",{parentName:"ul"},"How to how to push to the repository")),Object(a.b)("p",null,"This is only to show students how it's done! We'll be doing more of this in the future."),Object(a.b)("h2",{id:"quiz"},"Quiz"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"What is a repository?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"A repository is like a"))),Object(a.b)("li",{parentName:"ol"},"What is Github?"),Object(a.b)("li",{parentName:"ol"},"What is git?")))}b.isMDXComponent=!0}}]);