webpackJsonp([92],{"./node_modules/json-loader/index.js!./.cache/json/state-of-client-side-js-frameworks.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."}},markdownRemark:{html:'<p>Client Side JS frameworks have come a long way. Since the rise of <a href="http://backbonejs.org/">Backbone.js</a> back at 2010, the way we write Javascript and everything about it has changed. A lot of frameworks have born, almost one for every need. But what does a Client Side JS framework consists of? Should I adopt one out of the wild or write my own? As always, it depends. And you should do your <a href="https://medium.com/@kbariotis/choosing-your-next-best-tool-fba96eb19a7f">homework</a> before choosing one or the other.</p>\n<p>I\'ve come up with a list of six concepts you should consider adopting on your next setup.</p>\n<h3>MV*</h3>\n<p>Whether it\'s MVC or any other convention, your framework should have a standard way of doing things, naming things and moving around things. Never write or mix JS inside HTML unless you know what you\'re doing. When you\'re in a seek for a file, you should know exactly where to look and it has to be there.</p>\n<p>A structure like that should help you organise your code. Keeping everything where it should be. Organise both by type and module, so many teams can work on different parts of the project and not having conflicts.</p>\n<p>Backbone.js first taught us how to organise our code, using the <a href="http://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/">MVP pattern</a>. Since then lots of conventions have come up.</p>\n<h3>Dependency Injection / Dependency Management</h3>\n<p>Modularizing everything is not only a current trend but a trend that our developers ancestor would like us to follow. It will allow you for much code reusability and less duplication. Modules are easy to share, as easy as is to use other\'s people modules.</p>\n<p>But those modules must be managed and be injected in the appropriated places and not everywhere. They should also be called by the modules that need them and not by a <code>script</code> tag or any other place, keeping also the required HTTP calls for dependencies at the greatest low.</p>\n<p>Your framework can do some sort of <a href="https://en.wikipedia.org/wiki/Dependency_injection">Dependency Injection</a>. Each place of your application, should load only the modules it needs. <a href="https://docs.angularjs.org/guide/di">Angular\'s powerful DI</a> system does lazy loading only the modules you need each time. From the docs:</p>\n<blockquote>\n<p>The Angular injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.</p>\n</blockquote>\n<h3>2 Way Data Bindings</h3>\n<p>I first saw this concept with <a href="https://docs.angularjs.org/guide/databinding">Angular</a>. I\'ve never encountered something like that before and I am not sure if it was exist. But that blew up my mind.</p>\n<p>Imagine a form with 10 input fields and an object that you just fetched from the server. Now you need to populate the form with that object so the user can edited, hit save and send the object back to the server.</p>\n<p>You start by selecting fields using a library like jQuery. One after the other and then put the appropriate field of the object into that field. You could also use a function that will take the name of each field in the form and seek that property inside the object.</p>\n<p>This is what I am talking about. All that, should be done by the framework. Not you. And it should be done in a clever, performant and robust way. Make sure your framework support this.</p>\n<h3>Virtual DOM diffing</h3>\n<p>Oh, the Virtual DOM. The sugar on top of everything. DOM manipulation is expensive. Even though computing resources are cheap and almost in saturation, still DOM is expensive. So what we do? Instead of talking to the DOM directly, we talk to a Virtual DOM, one that is in memory. When we done and we want to render, we compute a diff between the real DOM and the Virtual DOM. So we render only the changes. In other words, we apply a patch on top of the real DOM. Much like how git works.</p>\n<p><a href="http://kostasbariotis.com/hands-on-react-js/">React</a> works that way. By componetizing our DOM, we almost never compute the diff in the whole DOM, just inside the components we like to rerender.</p>\n<p>This is pretty much a safe technique and I would say although not a must, you should consider adopting it. Comes handy, especially on those, rich with data, UIs where frequently rerendering is required.</p>\n<h3>Client Side Routing</h3>\n<p>Doing Server requests while bouncing on a web site\'s pages is time expensive. What if we could only load the assets we need to render a specific page and let the browser know, so a User can hit the Back button and go the previous state? This is the Client Side routing which every major framework supports out of the box.</p>\n<p>This site runs with <a href="http://www.pixelstech.net/article/1366737736-What-is-pjax-and-why-we-should-use-it">pjax</a> the simplest client side routing technique. Open Developer Tools at the Network tab and see it your self.</p>\n<p>Although, Client Side routing hides troubles, especially with SEO, it\'s a neat technique.  Lots of big players, like Youtube and Twitter, are using for a long time now.</p>\n<p>And this brings me to the final feature:</p>\n<h3>Isomorphic / Universal Javascript</h3>\n<p><a href="https://www.meteor.com/">Meteor.js</a> first gave us the opportunity to run the same code both in the Server side and in the Client side. Imagine if we could allow a User to use the Client Side app while letting Users (or search engines) with no or limited Javascript support on their Browsers to use our Server Side app. This must be the real deal. (BTW, of course <a href="http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157">Google can understand Javascript</a>)</p>\n<p>After Meteor.js, Isomorphic Javascript got showed up everywhere while Airbnb\'s <a href="http://nerds.airbnb.com/weve-open-sourced-rendr-run-your-backbonejs-a/">Rendr</a> framework was introduced. Since then, <a href="http://isomorphic.net/">Isomorphic</a> evolved into the so called <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal Javascript</a> that made our apps <a href="http://techblog.netflix.com/2015/08/making-netflixcom-faster.html">even faster</a>.</p>\n<p>In case that you need the best of the two worlds, Server side and Client size, this must be the feature you need.</p>\n<h2>Closing</h2>\n<p>Client Side Javascript have become a trivial part of our every day\'s development life. Keeping it updated, organised and features full can guarantee a performant project and/or business.</p>\n<p>I will try, on a future post, to write an implementation of the above, using separate modules that I\'ve picked out of the wild. In cases where you can\'t/want to use a framework, building your own client side infrastructure is absolutely OK.</p>\n<p><strong>So, what are your favorite concepts of a Client Side Javascript framework?</strong></p>',frontmatter:{date:"September 19, 2015",path:"/state-of-client-side-js-frameworks",tags:"javascript, client-side, frameworks",title:"The road to Client Side Javascript"}}},pathContext:{prev:{excerpt:"I watch a lot of people on the Internet.  Authors ,  film makers ,  music producers . I often wonder where do these guys get inspiration and motivation. It came down to be one thing. Inspiration is like metabolism. You have to put it in work in order...",html:'<p>I watch a lot of people on the Internet. <a href="http://sethgodin.typepad.com">Authors</a>, <a href="https://www.youtube.com/user/caseyneistat">film makers</a>, <a href="https://www.youtube.com/user/Hopsintv">music producers</a>. I often wonder where do these guys get inspiration and motivation.</p>\n<p>It came down to be one thing.</p>\n<p>Inspiration is like metabolism. You have to put it in work in order to start working. It won\'t work by it\'s own. If you just sit and wait, it won\'t start working.</p>\n<p>Do. Be a doer. Regularly.</p>\n<blockquote>\n<h3><em>"The first rule of doing work that matters: Going to work on a regular basis."</em><br/><br/></h3>\n<p>Seth Godin</p>\n</blockquote>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/inspiration-motivation-action/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-09-30T07:03:28.000Z",path:"/inspiration-motivation-action",tags:"inspiration, motivation",title:"Action, Inspiration, Motivation",draft:null}},next:{excerpt:"There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects. To avoid this common pitfall we create immutable objects, those that no...",html:'<p>There is no way, by default, to ensure that your Javascript Object you passed into a function will stay as is nevertheless. And that creates a problem and a lot of side effects.</p>\n<p>To avoid this common pitfall we create immutable objects, those that no one can change during the app\'s lifecycle. By default, all Javascript types, except objects, define immutable values.</p>\n<p>Have you ever tried to alter an object, say to delete a property, but you couldn\'t? Say to delete a Mongoose document\'s property? Mongoose documents are immutable and their properties can\'t be alter in any way, except of altering their actual values that they\'re holding.</p>\n<h3>Cloning objects in Javascript</h3>\n<p>So what do we do when we need to alter them? We clone them.</p>\n<p>The most easy way to clone an object is the simple hack:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> firstname<span class="token punctuation">:</span> <span class="token string">\'Kostas\'</span><span class="token punctuation">,</span> lastname<span class="token punctuation">:</span> <span class="token string">\'Bariotis\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> clone <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That hack have been always working for me and I\'m using in every chance I\'ve got.</p>\n<p>For Node.js/jQuery users there are also the appropriate <code>extend</code> methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'util\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_extend<span class="token punctuation">;</span>\n<span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> clone <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There is also <a href="http://stackoverflow.com/a/728694/1955940">this</a> answer that covers a generic <code>clone</code> functionality.</p>\n<h3>Create immutable Javascript objects</h3>\n<p>There are two ways:</p>\n<ol>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.definePropety()</a>\nUsing Javascript\'s <code>defineProperty</code> we can create non configurable and/or hidden properties inside objects. This way we can be sure that a developer can\'t mess with our code or hide from them info about our structures that they don\'t have to know about. <strong><code>defineProperty</code> won\'t throw an error while you\'re trying to alter the object\'s properties and this can really be a PITA.</strong></p>\n</li>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.freeze()</a> / <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal">Object.seal()</a>\n<code>freeze</code> and <code>seal</code> are basically shorthands for the <code>defineProperty</code> and can both come in handy. Make sure that their compatibility tables meet your needs before you use them. <strong>Will throw an error and will save you hours of frustration.</strong></p>\n</li>\n</ol>\n<h2>The End</h2>\n<p>Next time you are writing a Javascript module and you are exposing objects that other developers may use, make sure that they have the exact needed permissions to alter your objects, otherwise they may broke your code without even realising it. Make sure also to document it.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/immutable-objects-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-09-14T13:51:58.000Z",path:"/immutable-objects-javascript",tags:"javascript, node.js",title:"Immutable Objects with Javascript",draft:null}}}}}});
//# sourceMappingURL=path---state-of-client-side-js-frameworks-f7ab277cf15d8c40d6ca.js.map