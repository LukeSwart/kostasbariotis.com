webpackJsonp([4],{"./src/components/Pagination.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("./node_modules/react/react.js"),l=s(o),n=a("./node_modules/gatsby-link/index.js"),r=s(n),d=function(e){var t=e.page,a=e.pagesSum;return l.default.createElement("header",{className:"header extra-pagination inner text-center"},l.default.createElement("nav",{className:"pagination",role:"navigation"},t>0&&l.default.createElement(r.default,{className:"newer-posts",to:"/page/"+(t-1)+"/"},l.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),l.default.createElement("span",{className:"page-number"},"Page "+t+" of "+a),t<a&&l.default.createElement(r.default,{className:"older-posts",to:"/page/"+(t+1)+"/"},"Older Posts ",l.default.createElement("span",{"aria-hidden":"true"},"→"))))};t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-env/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/page.js':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.pathContext,a=t.posts,s=t.page,o=t.pagesSum;return n.default.createElement("section",{className:"main-content"},n.default.createElement(j.default,{title:"Kostas Bariotis",path:"/page/"+s,tags:"webdev, programming, javascript",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."}),n.default.createElement(g.default,null),n.default.createElement("section",{className:"blog container"},n.default.createElement("div",{className:"medium-8 medium-offset-2"},n.default.createElement("div",{className:"posts"},n.default.createElement(u.default,{page:s,pagesSum:o}),n.default.createElement(f.default,null),n.default.createElement(m.default,{posts:a}),n.default.createElement(f.default,null),n.default.createElement(u.default,{page:s,pagesSum:o})))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var l=a("./node_modules/react/react.js"),n=s(l),r=a("./node_modules/gatsby-link/index.js"),d=(s(r),a("./src/components/Link.js")),i=(s(d),a("./src/components/Pagination.js")),u=s(i),c=a("./src/components/Posts.js"),m=s(c),p=a("./src/components/Separator.js"),f=s(p),b=a("./src/components/MenuWithLogo.js"),g=s(b),v=a("./src/components/MetaTags.js"),j=s(v);e.exports=t.default}});
//# sourceMappingURL=page-component---src-templates-page-js-992ab2171b4b49710ff1.js.map