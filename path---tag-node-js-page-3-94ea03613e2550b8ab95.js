webpackJsonp([57],{"./node_modules/json-loader/index.js!./.cache/json/tag-node-js-page-3.json":function(n,a){n.exports={pathContext:{posts:[{excerpt:"I haven't really gotten into  React.js  yet, even though I have heard about it about a year ago. It was this video,  about react-native  and how you can build native iOS apps  with Javascript, that really got me thinking. So, I started searching...",html:'<p>I haven\'t really gotten into <a href="https://facebook.github.io/react/">React.js</a> yet, even though I have heard about it about a year ago. It was this video, <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4">about react-native</a> and how you can build native iOS apps  with Javascript, that really got me thinking.</p>\n<p>So, I started searching around, reading the <a href="https://facebook.github.io/react/docs/getting-started.html">docs</a>, reading what others <a href="http://blog.reverberate.org/2014/02/react-demystified.html">think</a> <a href="http://blog.andrewray.me/reactjs-for-stupid-people/">of it</a> and playing with this <a href="https://github.com/RickWong/react-isomorphic-starterkit">amazing piece of code</a>. But before you go too deep, let me straighten out some facts for you.</p>\n<h2>What React isn\'t</h2>\n<p>React is not a complete framework, kit or anything else. From the homepage:</p>\n<blockquote>\n<p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>\n</blockquote>\n<p>You won\'t be able to use it on it\'s own. React is a library. People refer to it as the <a href="http://blog.codinghorror.com/understanding-model-view-controller/"><strong>V</strong></a> from the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"><strong>MVC</strong></a>. But even as is, it does a hell of amazing job. Here\'s why.</p>\n<h2>React Components</h2>\n<p>React consists of components. You may have already heard about <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> that  allow us to create custom HTML tags and include them anywhere on the outside world as easile as we include an <code>H1</code> tag. React components work just like this but can only be used inside the React ecosystem.</p>\n<p>Furthermore, Facebook implemented a <a href="http://facebook.github.io/jsx/">new syntax language</a> based on XML in order to compile their new XML based Components into vanilla Javascript. By doing this, we are able to write HTML inside Javascript and not being worry about it.</p>\n<p>What? Did I just say HTML inside Javascript? Isn\'t that against the whole MVC movement? Well sort of... But React\'s team thinks this wa,y we will be able to maintain our code more easily since it exists on fewer files. Newcomers will get their hands on our code more quickly.The new language JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lets talk a little bit more about the components. A component is basically a Javascript class that only knows how to render itself. A component can also contain child components it communicates with. This can help us write more modular code.</p>\n<p>Think of a <code>List</code> element. We will write a List component that will contain a <code>ListItem</code> component. Every time we need to display it, the <code>List</code> component will render a <code>&#x3C;ul/></code> tag with a bunch of <code>ListItem</code> components,, and each of these <code>ListItem</code>s will render <code>&#x3C;li/></code>, each with their information.</p>\n<p>But wait? Did you said... render... every time? Like every time someone adds something in the list we will rerender it?</p>\n<h2>Reconciliation</h2>\n<p>Enter the <a href="https://facebook.github.io/react/docs/reconciliation.html">Virtual DOM magic, or in React\'s terms, the Reconciliation</a>. The essence of React. React will not render directly to the DOM every time something changes. Instead, it will render to its own internal DOM (the Virtual DOM) and then  compute diffs on the real DOM. React makes only the appropriate changes to the DOM to reflect the new changes. We never have to interact with the DOM again. We may never even have to write external stylesheets. React <a href="http://facebook.github.io/react/tips/inline-styles.html">has you covered</a>.</p>\n<h2>Conclusion</h2>\n<p>I would suggest getting your hands on the React\'s documentation as fast as possible. There are a lot of concepts you need to understand in order to grasp its full potential.</p>\n<p>As I said, in the beginning, it was <a href="https://github.com/facebook/react-native">react-native</a> that forced me to play with React. But there are a <a href="http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/">lot</a> <a href="https://facebook.github.io/flux/">more</a> goodies to explore and I haven\'t play with all of them yet.\nUntil next time, take care!</p>\n<p><em>Please let me know if I missed or misunderstood something, since it\'s my second day using React. If you liked my article please share it. :)</em></p>\n<p><em>I have to thank <a href="http://mplewis.com/">Matthew Lewis</a> for reviewing this article. Thank you Matt.</em></p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/hands-on-react-js/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-03-29T17:25:06.000Z",path:"/hands-on-react-js",tags:"reactjs, javascript, node.js",title:"Hands on React.js"}},{excerpt:"Hasn't been a long time when i started working with  Wearetech.io  and my first challenge was on. Sweet! If you want to learn more about Wearetech.io, check the  site  and our  Github repo . Now on the fun part. We have a use case where an individual...",html:'<p>Hasn\'t been a long time when i started working with <a title="Wearetech.io" href="http://wearetech.io" target="_blank">Wearetech.io</a> and my first challenge was on. Sweet!</p>\n<p>If you want to learn more about Wearetech.io, check the <a title="Wearetech.io" href="http://wearetech.io" target="_blank">site</a> and our <a title="Wearetech.io on Github" href="https://github.com/WeAreTech/wearetech.io" target="_blank">Github repo</a>.</p>\n<p>Now on the fun part. We have a use case where an individual would be able to register on our site as a City Curator.</p>\n<p>He could search for his City and if he wouldn’t find it in our database he would register it. When the next candidate comes in, he searches for his place and if it would be inside a 10 kilometers range of an already registered city we would deny it, since we wouldn’t want to have city calendars overlapping with each other.</p>\n<p>When <a title="Thanasis Polychronakis on Twitter" href="http://twitter.com/thanpolas" target="_blank">Thanasis </a>started building Wearetech.io he decided to go with MongoDB. So in order to create the above scenario, <a title="MongoDB Geospatial Queries" href="http://docs.mongodb.org/manual/applications/geospatial-indexes/" target="_blank">MongoDB Geospatial Queries</a> to the rescue!</p>\n<p>MongoDB supports two types of <a title="Geospatial Queries on Wikipedia" href="http://en.wikipedia.org/wiki/Spatial_query" target="_blank">Geospatial Queries</a> indexing.</p>\n<ul>\n\t<li>The spherical (<a title="2dSphere Indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2dsphere/" target="_blank">2dSphere</a>), that would allow you to store shapes made of points (coordinates) and then make comparisons with them like intersection, etc.</li>\n\t<li>The flat (<a title="2d indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2d/" target="_blank">2d</a>), that would store single points and then come up with their distances.</li>\n</ul>\nYour choice will affect your development a lot down the road, so think wisely.\n<p>Now on the code side, we will use Mongoose to shape our models. Here\'s the most simple one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose     <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Schema     <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> CitySchema   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  geo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    index<span class="token punctuation">:</span> <span class="token string">\'2d\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">\'City\'</span><span class="token punctuation">,</span> CitySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we can start populating our DB like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> City <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app/models/city\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> cityModel     <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">City</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>geo    <span class="token operator">=</span> <span class="token punctuation">[</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng <span class="token punctuation">]</span><span class="token punctuation">;</span> \n\ncityModel<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And now on the fun part</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">6371</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> query <span class="token operator">=</span> City<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">\'geo\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  $near<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  $maxDistance<span class="token punctuation">:</span> distance\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Cant save: Found city:\'</span> <span class="token operator">+</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our distance is in radians metric system and you can find more on how to calculate it <a title="Convert to radians" href="http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/" target="_blank">here</a>.</p>\n<p><em>Due to recent Heroku pricing changes, this demo has broke. Still haven\'t find the time to fix it. :(</em>\nHere is a <a title="MongoDB Geospatial Queries PoC" href="https://damp-everglades-7521.herokuapp.com/" target="_blank">demo </a>of it. Try searching your City. If it\'s available register it and then try to find a place inside a 10 kilometers range of your previeus registered City.</p>\n<p>Hope you will find it interesting. Comments?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/geospatial-query-with-mongodb-and-node-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-10-30T18:16:00.000Z",path:"/geospatial-query-with-mongodb-and-node-js",tags:"node.js, mongodb, wearetech.io",title:"Geospatial Query with MongoDB and Node.js"}}],tag:"node.js",pagesSum:3,page:3}}}});
//# sourceMappingURL=path---tag-node-js-page-3-94ea03613e2550b8ab95.js.map