webpackJsonp([5],{"./src/components/TagsPagination.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./node_modules/react/react.js"),o=s(l),n=a("./node_modules/gatsby-link/index.js"),r=s(n),d=function(e){var t=e.tag,a=e.page,s=e.pagesSum;return o.default.createElement("header",{className:"header extra-pagination inner text-center"},o.default.createElement("nav",{className:"pagination",role:"navigation"},2===a&&o.default.createElement(r.default,{className:"newer-posts",to:"/tag/"+t+"/"},o.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),a>2&&o.default.createElement(r.default,{className:"newer-posts",to:"/tag/"+t+"/page/"+(a-1)+"/"},o.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),o.default.createElement("span",{className:"page-number"},"Page "+a+" of "+s),a<s&&o.default.createElement(r.default,{className:"older-posts",to:"/tag/"+t+"/page/"+(a+1)+"/"},"Older Posts ",o.default.createElement("span",{"aria-hidden":"true"},"→"))))};t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-env/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/Bariotis/Dev/develop/kostasbariotis.com/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tags.js':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.pathContext,a=t.posts,s=t.tag,l=t.pagesSum,o=t.page;return n.default.createElement("section",{className:"main-content"},n.default.createElement(j.default,{title:s+" - Kostas Bariotis",description:"All posts about "+s,tags:s,path:"/tag/"+s}),n.default.createElement(m.default,null),n.default.createElement("section",{className:"blog container tags-collection"},n.default.createElement("div",{className:"medium-8 medium-offset-2"},n.default.createElement("header",{className:"header"},n.default.createElement("h1",{className:"tag-title tag-page-title"},s)),n.default.createElement("section",{className:"tag-meta"},"A ",a.length," posts collection"),n.default.createElement("div",{className:"posts"},n.default.createElement(f.default,{page:o,pagesSum:l,tag:s}),n.default.createElement(b.default,null),n.default.createElement(u.default,{posts:a}),n.default.createElement(b.default,null),n.default.createElement(f.default,{page:o,pagesSum:l,tag:s})))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var o=a("./node_modules/react/react.js"),n=s(o),r=a("./node_modules/gatsby-link/index.js"),d=(s(r),a("./src/components/Link.js")),i=(s(d),a("./src/components/Posts.js")),u=s(i),c=a("./src/components/Menu.js"),m=s(c),p=a("./src/components/TagsPagination.js"),f=s(p),g=a("./src/components/Separator.js"),b=s(g),v=a("./src/components/MetaTags.js"),j=s(v);e.exports=t.default}});
//# sourceMappingURL=page-component---src-templates-tags-js-34d818c3b1c3b1d83dbf.js.map