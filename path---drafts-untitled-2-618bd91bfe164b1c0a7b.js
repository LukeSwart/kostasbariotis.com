webpackJsonp([150],{"./node_modules/json-loader/index.js!./.cache/json/drafts-untitled-2.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."}},markdownRemark:{html:'<p>Static site generators are amazing tools, hands down! I love working with <a href="https://jekyllrb.com/">Jekyll</a> and here are some of the features you are missing if you aren\'t using one:</p>\n<ul>\n<li>Deduplication of common code blocks</li>\n</ul>\n<p>Write you code once, include it everywhere</p>\n<ul>\n<li>Template engine</li>\n</ul>\n<p>You know, for loops, if conditionals, etc</p>\n<ul>\n<li>Separated data stores</li>\n</ul>\n<p>Separation of concerns</p>\n<ul>\n<li>Configuration management</li>\n</ul>\n<p>Generate multiple versions of your site based on the environment or whatever</p>\n<p>I have been using Jekyll for a while now and I have to love it. I wouldn\'t say that it\'s the best since I\'ve never used some other but I would love to hear from someone that has features that are missing from Jekyll.</p>\n<p>So on this blog, I would like to present you with my minimal Jekyll configuration that I use on every site I work with. It has the form of a tutorial, so either follows steps below or grab directly the code from GitHub and start coding.</p>\n<h2>Generate a new site</h2>\n<p>Start by generating a new Jekyll project. Download and install <code>ruby</code>.</p>\n<p><code>jekyll new .</code></p>\n<h2>File and folders structure</h2>\n<p>At first, you will notice that there is no markup at all. By default, Jekyll uses a theme that hides all that from you. But we need to inject our custom markup. Let\'s first remove the line <code>theme: minima</code> from _config.yml.</p>\n<p>You will also notice a <code>_posts</code> folder with an example blog post inside. Let\'s not spend time on that. Maybe in another post. Delete the whole folder.</p>\n<p>Now, open <code>about.md</code> and <code>index.md</code>. Those are the main pages of our site the index page and the about page. Every file you put there, Jekyll will generate a new page with that page in that path.</p>\n<p>About\'s page content:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> page\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"About"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> /about/\n<span class="token punctuation">---</span>\n</code></pre>\n      </div>\n<p>Now, this is Jekyll\'s frontmatter. We are requesting here this page to be generated with the default layout, have that specific title and be the <code>index.html</code> in the root directory. Jekyll will either copy paste every HTML file as is inside the final folder or will generate HTML files as told. This is what we do here, we are instructing Jekyll to generate an <code>index.html</code> file in the root directory.</p>\n<p>Index page uses the home layout. But what are these layouts? Glad you finally asked. Those layouts were being hidden again by the default time. Let\'s write our own. Let\'s have one for start. Create the <code>_layouts/default.html</code> file and put inside:</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This is a basic HTML structure with the <code>{{content}}</code> directive. This directive will render everything from a page that has extend that layout.</p>\n<p>Great! Now we have a layout as well. I don\'t like HTML files laying around at the root directory. Let\'s have a separate folder for our pages. Create a <code>pages</code> folder in the root directory. The underscore demotes that this folder will be processed by Jekyll. Now we need an index page. Create an <code>index</code> folder inside <code>_pages</code> with an index.html file inside. Put inside the below snippet:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"WOW Jekyll"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> index.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Hello world&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>Do the same for the about page. This way, we will keep only configuration files in the root directory and have our content in respective folders.</p>\n<p>Let\'s proceed with the 404 page. Same thing, create a <code>pages/404/index.html</code> with contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"404 Not Found"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> 404.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Not found&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>And here\'s our 404 page that our HTTP server will server whenever doesn\'t find a corresponding route.</p>\n<p>Fire <code>jekyll serve</code> and open the displayed link in your browser. You will see our index page.</p>\n<p>Go to an undefined route and you will see our 404 page.</p>\n<h2>Webpack integration</h2>\n<p>Now that we have our basic file structure, we need a way to handle our frontend assets. I am using NPM for my JS dependencies. Same with CSS dependencies plus the SASS preprocessor. Let\'s first, create a folder to put all these there. Create a <code>_sources</code> folder and <code>js</code> and <code>sass</code> folders inside.</p>\n<p>Let\'s first initialize NPM.</p>\n<p><code>npm init</code></p>\n<p>follow the instructions until you are finished.</p>\n<p>Proceed with installing webpack and it\'s dependencies.</p>\n<p><code>npm i --save webpack style-loader file-loader extract-text-webpack-plugin css-loader postcss-loader webpack-dev-server sass-loader node-sass webpack</code></p>\n<p>Now let\'s install Bootstrap.</p>\n<p><code>npm i --save bootstrap-sass</code></p>\n<p>We are going to use a few Bootstrap\'s core modules like the typography and the grid. I am not going to use Bootstrap\'s JS modules since they require jQuery.</p>\n<p>We will use <code>webpack</code> to process the files from that folder and put them inside <code>assets</code> folder. Jekyll will copy that folder inside the final build.</p>\n<p>Create an <code>webpack.config.js</code> to the root directory. Put there the contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    main<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass/main.scss`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'index-page\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/js/index-page.js`</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">"/path.join(__dirname, ../static/\'),"</span>\n    publicpath<span class="token punctuation">:</span> <span class="token string">"/\'/\',"</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'js/[name].js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'postcss-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                plugins<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'precss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'css/style.css\'</span><span class="token punctuation">,</span>\n      allChunks<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  devtool<span class="token punctuation">:</span> <span class="token string">\'eval-cheap-module-source-map\'</span><span class="token punctuation">,</span>\n  devServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    inline<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    proxy<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">"**"</span><span class="token punctuation">:</span> <span class="token string">"http://localhost:4000"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    host<span class="token punctuation">:</span> <span class="token string">\'0.0.0.0\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So webpack will process our main <code>scss</code> file and put it into <code>assets/css/style.css</code>. Jekyll will be able to grab it from there. Also, JS files will be processed, be bundled and put into <code>assets/js</code> as a separate file for each of our pages.</p>\n<p>Last, we have enabled <code>webpack-dev-server</code> and make it a proxy to Jekyll\'s host and port. So, in order to use it and have all the good stuff like Hot module replacement we will use that server on development.</p>\n<p>All we need now is to include them into our layout file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>{{page.title || site.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  &lt;link rel="stylesheet" href../static/css/main.css">\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n&lt;script src../static/js/entry.js"><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Fire up webpack\'s dev server:</p>\n<p><code>./node_modules/.bin/webpack-dev-server --inline --hot</code></p>\n<h2>NPM Scripts</h2>\n<p>Now that everything is in place, we want to take advantage of webpack\'s cool dev features like hot module replacement, etc. To do this we need</p>\n<h2>Deployment</h2>',frontmatter:{date:"February 25, 2016",path:"/untitled-2",tags:null,title:"Jekyll + webpack = ❤️"}}},pathContext:{prev:{excerpt:"A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn...",html:"<p>A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn't aware of most of them.</p>\n<p>So I decided to write a similar post to let me clear my head on the subject.</p>\n<h1>Test Driven Development</h1>\n<p>The most common term you will meet in software is TDD. It's concept is actually simple. We write tests before start coding. <a href=\"http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530\">Kent Beck</a> describes it like this:</p>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Refactor</li>\n</ol>\n<p>We first write our tests based on our specifications. We run them and of course they won't succeed thus are going to be red. Then we write the smallest amount of code to make our tests pass and meet our requirements. Once we get the green flag we start refactoring and cleaning our code.</p>\n<h2>Unit Testing</h2>\n<p>Unit tests are the start of every test suite. Before starting to unit test, one must define what a unit is, which may vary from team to team. The well known rule is that a unit is the smallest piece of code that can be tested. Regardless of if it's a function, a class or even a whole system in some cases.</p>\n<p>Unit tests must run fast and run often. To achieve maximum speed,  they are being run in isolation. Thus mocking and stubbing of dependent units happens often. For example, a database can be mocked instead of actually hitting it.</p>\n<p>I like to have my unit tests independent from the whole test suite. I use a watch process to run them every time I change something in the code. This way I cannot forget to make sure that they are passing, before commit.</p>\n<h2>Components/Integration Testing</h2>\n<p>After writing our unit tests, next are Components Tests. Those are used to test units in combination. Units that are working together should be tested by Components Testing.</p>\n<p>We should mock external services that are not part of the requirement under testing.</p>\n<h2>End to End/System Testing</h2>\n<p>Finally, we are testing anythings, from the User Interface to the Database. Testing each intermediate component. To make sure that our system meets business requirements, System Testing happens by the user perspective.</p>\n<h1>Property Testing</h1>\n<p>An important concept in testing a system is Property Testing. Instead of taking certain test cases, we are instructing our system to take different values and test against them. This way we can even find cases that we didn't thought. Property testing can be applied at any level of our test suite.</p>\n<h1>How much to test</h1>\n<p>A question that usually shows up is \"How much should I be testing\". While a possible good answer could be \"As much as you can\" this is often not the case. Testing can't always be a priority. There is a point in the size of every test suite that once we pass it, there is no more the need to test. Unless new requirements are introduced, we are running the suite to be sure that nothing breaks.</p>\n<p>Before you try to answer the \"how much to test\", let's take a look into the \"what to test\". The concept says that to put minimum effort and investment into manual and GUI testing, we should invest into the lower levels. Manual is by default more expensive and more fault tolerant. Bugs are more possible to pass by manual tests than automated unit tests.</p>\n<p>We can't eliminate manual testing and surely we can't automate it. But we can be sure that having a stronger automated test foundation we leave fewer errors to be found in the upper levels of testing.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/testing/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2016-05-01T00:00:00.000Z",path:"/testing",tags:null,title:"Testing Software Systems",draft:!0}},next:{excerpt:"Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system. Searching in Google we didn't find any real world example either any useful...",html:"<p>Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system.</p>\n<p>Searching in Google we didn't find any real world example either any useful information as we expected. We had only our experience from the various systems we've used and how they are implementing such things. But again, we had never meet an isolated auditing service. That was our goal.</p>\n<p>Here are my notes from the meeting.</p>\n<ul>\n<li>Our goal was to track down actions happens anywhere in the system</li>\n<li>We should track the action, the actor of that action(whether it's an actual user or another service) and a lot of metadata about the action.</li>\n<li>Actions are application level logic. This means that each of our applications (otherwise services) define their actions that want our service to track. There are no limitations, validations or anything like that. There are rules that must be followed but other than that, you are free to track what ever you want.</li>\n<li>We found a solution to allow the presenter of the audits to not have to render the message it self, instead we are generating a message directly from the data we receive so the presenter can take ready messages to display. Of course, it has the choice to rerender them itself.</li>\n</ul>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/our-auditing-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-15T00:00:00.000Z",path:"/our-auditing-service",tags:null,title:"Our auditing service",draft:!0}}}}}});
//# sourceMappingURL=path---drafts-untitled-2-618bd91bfe164b1c0a7b.js.map