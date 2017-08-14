webpackJsonp([103],{"./node_modules/json-loader/index.js!./.cache/json/page-9.json":function(n,a){n.exports={pathContext:{posts:[{excerpt:"Hasn't been a long time when i started working with  Wearetech.io  and my first challenge was on. Sweet! If you want to learn more about Wearetech.io, check the  site  and our  Github repo . Now on the fun part. We have a use case where an individual...",html:'<p>Hasn\'t been a long time when i started working with <a title="Wearetech.io" href="http://wearetech.io" target="_blank">Wearetech.io</a> and my first challenge was on. Sweet!</p>\n<p>If you want to learn more about Wearetech.io, check the <a title="Wearetech.io" href="http://wearetech.io" target="_blank">site</a> and our <a title="Wearetech.io on Github" href="https://github.com/WeAreTech/wearetech.io" target="_blank">Github repo</a>.</p>\n<p>Now on the fun part. We have a use case where an individual would be able to register on our site as a City Curator.</p>\n<p>He could search for his City and if he wouldn’t find it in our database he would register it. When the next candidate comes in, he searches for his place and if it would be inside a 10 kilometers range of an already registered city we would deny it, since we wouldn’t want to have city calendars overlapping with each other.</p>\n<p>When <a title="Thanasis Polychronakis on Twitter" href="http://twitter.com/thanpolas" target="_blank">Thanasis </a>started building Wearetech.io he decided to go with MongoDB. So in order to create the above scenario, <a title="MongoDB Geospatial Queries" href="http://docs.mongodb.org/manual/applications/geospatial-indexes/" target="_blank">MongoDB Geospatial Queries</a> to the rescue!</p>\n<p>MongoDB supports two types of <a title="Geospatial Queries on Wikipedia" href="http://en.wikipedia.org/wiki/Spatial_query" target="_blank">Geospatial Queries</a> indexing.</p>\n<ul>\n\t<li>The spherical (<a title="2dSphere Indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2dsphere/" target="_blank">2dSphere</a>), that would allow you to store shapes made of points (coordinates) and then make comparisons with them like intersection, etc.</li>\n\t<li>The flat (<a title="2d indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2d/" target="_blank">2d</a>), that would store single points and then come up with their distances.</li>\n</ul>\nYour choice will affect your development a lot down the road, so think wisely.\n<p>Now on the code side, we will use Mongoose to shape our models. Here\'s the most simple one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose     <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Schema     <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> CitySchema   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  geo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    index<span class="token punctuation">:</span> <span class="token string">\'2d\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">\'City\'</span><span class="token punctuation">,</span> CitySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we can start populating our DB like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> City <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app/models/city\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> cityModel     <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">City</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>geo    <span class="token operator">=</span> <span class="token punctuation">[</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng <span class="token punctuation">]</span><span class="token punctuation">;</span> \n\ncityModel<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And now on the fun part</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">6371</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> query <span class="token operator">=</span> City<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">\'geo\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  $near<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  $maxDistance<span class="token punctuation">:</span> distance\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Cant save: Found city:\'</span> <span class="token operator">+</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our distance is in radians metric system and you can find more on how to calculate it <a title="Convert to radians" href="http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/" target="_blank">here</a>.</p>\n<p><em>Due to recent Heroku pricing changes, this demo has broke. Still haven\'t find the time to fix it. :(</em>\nHere is a <a title="MongoDB Geospatial Queries PoC" href="https://damp-everglades-7521.herokuapp.com/" target="_blank">demo </a>of it. Try searching your City. If it\'s available register it and then try to find a place inside a 10 kilometers range of your previeus registered City.</p>\n<p>Hope you will find it interesting. Comments?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/geospatial-query-with-mongodb-and-node-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-10-30T18:16:00.000Z",path:"/geospatial-query-with-mongodb-and-node-js",tags:"node.js, mongodb, wearetech.io",title:"Geospatial Query with MongoDB and Node.js",draft:null}},{excerpt:"Recently, my colleague  Yannis Rizos , tweeted me about a  book . Its title was somehow offensive and didn't look quite interesting at first. But once i started browsing it, i catch some really good points and decided to start from the beginning...",html:'<p>Recently, my colleague <a title="Yannis Rizos on Twitter.com" href="http://twitter.com/yrizos" target="_blank">Yannis Rizos</a>, tweeted me about a <a href="http://samizdat.mines.edu/howto/HowToBeAProgrammer.html" target="_blank" title="How to Be a Programmer">book</a>. Its title was somehow offensive and didn\'t look quite interesting at first.</p>\n<p>But once i started browsing it, i catch some really good points and decided to start from the beginning.</p>\n<p>Written by <a title="Robert L Read" href="http://c2.com/cgi/wiki?RobertlRead" target="_blank"><span class="firstname">Robert</span> <span class="othername">L</span> <span class="surname">Read</span></a>, it\'s a free essay, ~100 pages long.</p>\n<p>It is listing all the borrows and challenges a programmer will face and must pass in order to become a programmer.</p>\n<p>Starts with the most essential skill of a programmer, debugging. How to debug and some of the most trivial bugs you will eventually find in your code.</p>\n<p>It goes on with more skills like motivation, evolution, how to stress test, be a team player and communicate effectively with every type of people involved in this industry.</p>\n<p>It is divided in 3 chapters, Beginner, Intermediate and Advanced and every chapter contains a few paragraphs for every concept.</p>\n<p>I was really amazed by this essay and i would surely recommended to every beginner, junior, mid-senior professional programmer. I guess senior would already know these stuffs.</p>\n<p>What are you favorite recent reads?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/how-to-be-a-programmer-by-robert-l-read/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-10-25T10:54:21.000Z",path:"/how-to-be-a-programmer-by-robert-l-read",tags:"clean code, code, programmers, debugging",title:"How To Be A Programmer by Robert L Read",draft:null}},{excerpt:"The past few weeks, you would find Validation at  Github's PHP Trending projects. Validation  is a very flexible, fully customizable, loaded with tone of validators, engine that you can use on your PHP projects right away. Here is a great list why...",html:'<p>The past few weeks, you would find Validation at <a title="Github PHP Trending Projects" href="https://github.com/trending?l=php" target="_blank">Github\'s PHP Trending projects.</a></p>\n<p><a title="Respect/Validation on Github" href="https://github.com/Respect/Validation" target="_blank">Validation</a> is a very flexible, fully customizable, loaded with tone of validators, engine that you can use on your PHP projects right away.</p>\n<p>Here is a great list why this library it\'s actually awesome.</p>\n<p>From <a title="Respect/Validation on Reddit" href="http://www.reddit.com/r/PHP/comments/1telis/respectvalidation_the_most_awesome_validation/ce7emzs" target="_blank">Reddit</a>:</p>\n<blockquote>\n<ul>\n\t<li>The chain is not a simple chain (it is not just linear), it is a fluent builder for a composite structure. You can write almost any validation rule for any data structure and group it in a single object:v::key("name", v::string()-&gt;length(1, 32)) -&gt;key("birth", v::date(\'Y-m-d\')-&gt;minimumAge(18)) -&gt;assert($someArrayWithData);</li>\n\t<li>You can nest as many validators as you want.</li>\n\t<li>Each validator is an instance that you can reuse (even for composing new, more complex instances).</li>\n\t<li>Three kinds of validation reports (validate() returns true/false, check() stops on first error, assert() collect all errors).</li>\n\t<li>Nested reports implement RecursiveIteratorIterator AND RecursiveTreeIterator (that\'s where the ASCII tree report came from!)</li>\n\t<li>A selector API for finding messages in complex nested reports (findMessages(["user.address.street.length"])).</li>\n\t<li>Reports are only generated when needed (true/false validation doesn\'t even touch the reporting system).</li>\n\t<li>Really easy to extend (most rules have a single method).</li>\n\t<li>Really easy to make inline rules:v::callback(function ($input) { return $input == 42; });</li>\n\t<li>Logic operations on any validator:v::allOf(v::numeric(), v::hexa(), v::min(1)); // numeric, hexadecimal and at least 1 v::oneOf(v::nullValue(), v::numeric()); // null or numeric</li>\n\t<li>Integrates with ZF1, ZF2 and Symfony2 validators if needed. Dependency is optional.</li>\n\t<li>A full concrete API (not relying on magic methods or chains) that can be built using dependency injection.</li>\n\t<li>Straightforward to use on unit tests instead of the PHPUnit assertion library.</li>\n</ul>\n</blockquote>\nHere i wrote a simple User Model class where we can make our validation:\n<p><a href="https://gist.github.com/stakisko/dfba7e1b576954232cd5">https://gist.github.com/stakisko/dfba7e1b576954232cd5</a></p>\n<p>Validation will throw an exception when it fail and you can inform your users.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/valiation-the-most-awesome-validation-engine-ever-created-for-php/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-10-08T16:02:59.000Z",path:"//valiation-the-most-awesome-validation-engine-ever-created-for-php",tags:"php, validation, oop",title:"Valiation : The most awesome validation engine ever created for PHP",draft:null}},{excerpt:"I am introducing  Stargento.com  to the  Magento  community. I am looking forward for your thoughts and feedback. Hit me on  Twitter . This is a meta-post for a post i wrote on  Medium . Thoughts?",html:'<p>I am introducing <a title="Stargento is an online PHP Sandbox and a Magento playground" href="http://stargento.com" target="_blank">Stargento.com</a> to the <a title="Magento" href="http://magentocommerce.com/" target="_blank">Magento</a> community. I am looking forward for your thoughts and feedback.</p>\n<p>Hit me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter</a>.</p>\n<p>This is a meta-post for a post i wrote on <a href="https://medium.com/@kbariotis/introducing-stargento-com-d7b202f2a55d">Medium</a>. Thoughts?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/introducing-stargento-com/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-24T16:16:00.000Z",path:"/introducing-stargento-com",tags:"stargento.com, magento",title:"Introducing Stargento.com",draft:null}},{excerpt:"Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it's still the number one e-commerce solution. It's proven. So, i wanted to talk a little about how i maintaining my Magento projects. 1) I am keeping...",html:'<p>Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it\'s still the number one e-commerce solution. It\'s proven.</p>\n<p>So, i wanted to talk a little about how i maintaining my Magento projects.</p>\n<p><strong>1) I am keeping everything under version control</strong></p>\n<p>Magento\'s folder structure brings a lot of frustration. An extension can place it\'s files almost anywhere it\'s developer wants. It can be in base package theme either in package default theme. It can be in media folder for permanent files you want to keep under control either in /js folder for Javascript global libraries.</p>\n<p>Keeping a .gitignore with all the Project\'s specific files is almost impossible.</p>\n<p>Also, you can\'t carry with you your Project\'s modules, except using <a title="Composer with Magento" href="https://github.com/magento-hackathon/magento-composer-installer" target="_blank">Composer with Magento </a>which it\'s also complicate to work with. (Still struggling with it on Windows)</p>\n<p>So, what i do is keep everything under version control, except temporary files like cache, logs, etc. etc.</p>\n<p><strong>2) Never touch core files</strong></p>\n<p>By never touching core files like in folders:</p>\n<ul>\n\t<li>app/code/core</li>\n\t<li>app/locale/</li>\n\t<li>app/design/frontend/(base|default|rwd)</li>\n\t<li>app/design/adminhtml/</li>\n\t<li>js/ (initial folders only)</li>\n\t<li>lib/ (initial folders only)</li>\n\t<li>skin/frontend/(base|default|rwd)</li>\n\t<li>includes/</li>\n</ul>\nyou make sure that, when a feature release is out, you can just copy paste above you project and everything still works fine.\n<p>Keeping your Magento always up to date can save you from big disasters. I must make sure that feature releases wont be a pain to get.</p>\n<p><strong>3) Extend everything</strong></p>\n<p>In case you need to extend a Magento\'s core functionality or make it behave different, you are covered.</p>\n<p>Magento\'s team had a purpose and only one. To make the most extensible e-commerce framework out there. They even sacrifice performance on this purpose. Now, some may argue that that was stupid or they didn\'t success after all. I will have to disagree with both.</p>\n<p>Magento is a true PHP OOP project, powered by the most powerful framework, the <a title="Zend Framework" href="http://framework.zend.com/" target="_blank">Zend Framework</a>.</p>\n<p>As about performance, these days you have a lot of tools in order to create a fast website. You may be hosted at an AWS super server, use fast caching methods, etc, etc.</p>\n<p><strong>4) Keep a local Magento with stuff i use a lot</strong></p>\n<p>After a few projects, i realized that a lot of processes were repeated again and again. The same modules i will installed on every fresh Magento install, the same configuration i would do. So i keep a private(yet!) Magento repository were i have all of my Modules and a clean Database dump with my configuration set.</p>\n<p>How do you deal with your Magento projects? Share your tactics and technics with me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter </a>or bellow in the comments.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/maintaining-a-magento-code-base/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-09-08T17:23:58.000Z",path:"/maintaining-a-magento-code-base",tags:"magento, code base, e-commerce",title:"Maintaining a Magento code base",draft:null}}],page:9,pagesSum:14}}}});
//# sourceMappingURL=path---page-9-e2589715b8d4cb309ce5.js.map