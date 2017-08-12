webpackJsonp([125],{"./node_modules/json-loader/index.js!./.cache/json/page-3.json":function(n,t){n.exports={pathContext:{posts:[{excerpt:"Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs. Here I will use a small function and the  Sinonjs  to try to test it. My...",html:'<p>Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs.</p>\n<p>Here I will use a small function and the <a href="http://sinonjs.org">Sinonjs</a> to try to test it. My function does some checks and finally an HTTP call to an external service while similar functions would hit a DB. But our intention is to test the actual function and we don\'t want to hit the external service.</p>\n<p>In case that you think: "No we should let it hit the external so we can test that too". Well no, remember, we are writing unit tests. You\'re talking about integration tests, where we test how multiple components interact with each other. Also, this is an external service and our test suite shouldn\'t test external services. This is a clean separation of concerns. It\'s not our test suite\'s responsibility to test anything else that itself.</p>\n<p>Here\'s a simple function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> createToDoItem <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://todo/items/endpoint\'</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        description<span class="token punctuation">:</span> description<span class="token punctuation">,</span>\n        completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">,</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the <code>createToDoItem</code> does two things. First it checks for the validity of the required parameter <code>description</code> and then contacts the external service that is responsible for storing Todo Items.</p>\n<p>Now we need to test that function as a unit, so we have to isolate it. We don\'t want to contact the external service.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'To Do Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Create Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'requires the description parameter\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>an<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'rejects on error from the remote service\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'resolves on succesfull creation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          _id<span class="token punctuation">:</span> <span class="token string">\'ITEM_ID\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">,</span>\n          completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'ITEM_ID\'</span><span class="token punctuation">)</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I hope the code to be self-documented. At first, we call our function without a parameter so the first condition will be true and an error will be thrown. Then we stub the <code>request</code> object so it will run the callback function with an error. This will trigger the second condition and reject our promise. Inside the <code>catch</code> function, we know that the promise has been rejected. For the end, we stub the callback to return with a null error and a body that will resolve the promise and we test that inside the <code>then</code> function. 100% code coverage.</p>\n<p>This way we have completely isolated our Unit Under Test and made it blazingly fast to run since we don\'t make any actual HTTP requests. We pretty much covered the <a href="https://pragprog.com/magazines/2012-01/unit-tests-are-first">F.I.R.S.T. principles of Unit Testing</a>.</p>\n<p>Unit tests should be completely isolated.</p>\n<p>Always remember the <a href="http://blogs.agilefaqs.com/2011/02/01/inverting-the-testing-pyramid/">inverted testing pyramid</a>. Invest in Unit Testing so to avoid manual system testing. It is expensive.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/isolated-unit-tests-with-sinonjs/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-03-05T21:02:37.000Z",path:"/isolated-unit-tests-with-sinonjs",tags:"TDD, javascript, node.js",title:"Isolated Unit Tests with Sinonjs"}},{excerpt:"I started playing with  Golang(or just Go)  this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won't be a great candidate for the job...",html:'<p>I started playing with <a href="http://golang.org">Golang(or just Go)</a> this week for the first time. Go is a compiled, statically typed language and I thought it would be a great fit for situations where Node.js, my primary go-to stack, won\'t be a great candidate for the job. For heavy processing and problems where concurrent-first solutions must be applied.</p>\n<p>The first thing I did was to check the <a href="https://tour.golang.org/welcome/1">online tour</a> on the official site. It\'s very well structured and has also some exercises to get you started. Wrapping my head around the language was very easy since it has a lot of well-known concepts like pointers and structs, similar to C.</p>\n<p>After playing a bit around I thought I would make something using my new learnings and Go. I found a <a href="https://github.com/willnorris/imageproxy">really cool project</a> and wanted to contribute to it. So I thought I will fork it and create a bootstrap application and try to import my fork. But that strange message appeared on my console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>package github.com/kbariotis/imageproxy: code in directory /Users/Bariotis/golang/src/github.com/kbariotis/imageproxy expects import "willnorris.com/go/imageproxy"</code></pre>\n      </div>\n<p>what this basically means is that my repo had an explicit [canonical import path]<a href="https://golang.org/cmd/go/#hdr-Import_path_checking">https://golang.org/cmd/go/#hdr-Import<em>path</em>checking</a>) set that was forcing the consumer to download it from a <a href="https://github.com/willnorris/imageproxy/blob/master/imageproxy.go#L17">particular place</a> and that was the original author\'s site.</p>\n<p><a href="https://texlution.com/post/golang-canonical-import-paths/">This post</a> explains even more how this works. Since the Go command allows one to import packages from remote servers and a package may live in various places or it can be moved from one place to another, the maintainer must explicitly set the default URL that others must use to import the library, in order to avoid the <a href="https://en.wikipedia.org/wiki/Link_rot">link rot</a>.</p>\n<p>But that confused me a bit since I do this all the time with <code>npm</code>. I can fork a library and import it from my fork directly.</p>\n<p>I searched a bit around and found that the simplest thing to do (and didn\'t think of it) was to import the original repository and the Go command will clone it into my $GOPATH/src directory. From there I could change the git remotes URLs and send any changes onto my fork. Then make a PR to the original repo or change the canonical import path annotation if I wanted to use my fork directly.</p>\n<p>Keep this in mind if you\'re just starting with the Go language. Btw, <a href="https://tour.golang.org/concurrency/1">Goroutines are awesome!</a></p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/go-canonical-import-paths-github-forks/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-02-27T15:49:31.000Z",path:"/go-canonical-import-paths-github-forks",tags:"Golang, Github",title:"Go canonical import paths & Github forks"}},{excerpt:"As of MongoDB 3.2, a  new feature  has been added that introduces a left outer join for the first time.  is part of the MongoDB aggregation pipeline. It's a separate stage and the syntax is really simple: The above command will fetch every document...",html:'<p>As of MongoDB 3.2, a <a href="https://docs.mongodb.org/manual/reference/operator/aggregation/lookup/">new feature</a> has been added that introduces a left outer join for the first time.</p>\n<p><code>$lookup</code> is part of the MongoDB aggregation pipeline. It\'s a separate stage and the syntax is really simple:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>db<span class="token punctuation">.</span>orders<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      $lookup<span class="token punctuation">:</span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token string">"inventory"</span><span class="token punctuation">,</span>\n          localField<span class="token punctuation">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>\n          foreignField<span class="token punctuation">:</span> <span class="token string">"sku"</span><span class="token punctuation">,</span>\n          <span class="token keyword">as</span><span class="token punctuation">:</span> <span class="token string">"inventory_docs"</span>\n        <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The above command will fetch every document from the orders collection with the inventory_docs field in each one of them, populated with the matched documents from the inventory collection.</p>\n<p>One will first notice that there is no way to specify matching conditions for the records to be joining the document. My hypothesis is that you\'re using an SQL data store in case you have many and complex relations between your entities. But in case that you are using a MongoDB data store while having that much relations, you will be disappointed.</p>\n<p>Mongo\'s <code>$lookup</code> stage isn\'t coming to a step closer to traditional SQL join. It seems like a nice tool to have in your aggregation toolbox, but it won\'t cover you full if you need to do relational queries.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/mongodb-aggregation-lookup-for-joins/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-01-28T17:15:54.000Z",path:"/mongodb-aggregation-lookup-for-joins",tags:"mongodb",title:"MongoDB Aggregation: $lookup for JOINs"}},{excerpt:"I gave a talk entitled  TDD with Node.js  in the  latest   SKGNode.js meetup . I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great. I didn't got into GUI testing and I saw a major...",html:'<p>I gave a talk entitled <a href="http://slides.com/kostasbariotis/tdd-nodejs">TDD with Node.js</a> in the <del>latest</del> <a href="https://www.meetup.com/Thessaloniki-Node-js-Meetup/">SKGNode.js meetup</a>. I explained the concept of TDD and described my tools of choice for integrating the TDD flow with Node.js. It was great.</p>\n<p>I didn\'t got into GUI testing and I saw a major interest on that. So I decided to take a look at the current state of GUI testing. Here are the main tools that I came up with:</p>\n<h2>Zombie.js</h2>\n<p><a href="http://zombie.js.org/">Zombie</a> uses <a href="https://github.com/tmpvar/jsdom">jsdom</a> to parse the required HTML and Javascript and then simulate the desired behaviour. I find it a great tool for testing basic functionality in small apps.</p>\n<p>JSDom will create an in memory representation of the DOM and execute any Javascript dependencies so you can do a real testing scenario. Since it doesn\'t uses a real browser engine you can\'t find abnormalities of real world situations. So you can\'t rely on it for cross browser compatibility.</p>\n<p>I got very frustrated while trying to test AJAX powered pages. For SPA apps, Zombie wouldn\'t be an ideal solution.</p>\n<h2>Casper.js</h2>\n<p><a href="http://casperjs.org/">Casper</a> on the other hand, is a wrapper around <a href="http://phantomjs.org/">Phantom.js</a> which utilises a <a href="https://webkit.org/">Webkit</a> headless browser and will do a full rendering of your web page in order to test it. Since you will have a full representation of your site you can even <a href="https://github.com/sindresorhus/pageres">take screenshots for easier QA</a>.</p>\n<p>Casper.js has neat documentation and it\'s API is really easy to follow and adopt.</p>\n<h2>Nightwatch.js</h2>\n<p>Now, on the heavy side, we have <a href="http://www.seleniumhq.org/">Selenium</a>. Selenium is a set of projects. It started off by auto running browsers and injecting code into them so we can test it. Since then, browsers vendors kept evolving and expose a full set of control over their browsers so Selenium has native support over those, with the <a href="http://www.seleniumhq.org/projects/webdriver/">Selenium WebDriver</a>.</p>\n<p>You will have to install all the browsers you need to test locally and then use Selenium to run tests on them. It\'s pretty basic.</p>\n<p>Selenium\'s internals and configuration is a bit overcomplicated and if you don\'t need it, you don\'t have to get into it. <a href="http://nightwatchjs.org/">Nightwatch</a> is a great layer of abstraction on top of Selenium that will do all the heavy work for you.</p>\n<h1>At the end</h1>\n<p>I am sure there are tone of other solutions out there. Although, you will have to do a research on your own before starting your GUI testing journey, at then end just pick one and start.</p>\n<p>Are you using something already? What\'s that?</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/automated-gui-testing-solutions/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-01-08T06:03:02.000Z",path:"/automated-gui-testing-solutions",tags:"GUI, javascript, Testing, node.js",title:"Automated GUI Testing Solutions"}},{excerpt:"Loved that article. So many insights. We all could gain a lot from each other's experiences. I truly believe that and that's why I started this blog in the first place. https://medium.com/@mitchellharper/28-things-i-d-do-differently-next-time-around...",html:"<p>Loved that article. So many insights. We all could gain a lot from each other's experiences. I truly believe that and that's why I started this blog in the first place.</p>\n<p><a href=\"https://medium.com/@mitchellharper/28-things-i-d-do-differently-next-time-around-f1f72d6a05ce\">https://medium.com/@mitchellharper/28-things-i-d-do-differently-next-time-around-f1f72d6a05ce</a></p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/28-things-id-do-differently-next-time-around/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-12-30T03:49:16.408Z",path:"/28-things-id-do-differently-next-time-around",tags:"Startups",title:"28 things I’d do differently next time around"}}],page:3,pagesSum:17}}}});
//# sourceMappingURL=path---page-3-7878d6b1162d73381a19.js.map