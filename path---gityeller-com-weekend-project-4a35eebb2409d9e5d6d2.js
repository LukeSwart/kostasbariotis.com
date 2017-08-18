webpackJsonp([144],{"./node_modules/json-loader/index.js!./.cache/json/gityeller-com-weekend-project.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>It all started when <a href="https://twitter.com/_adonisk">Adonis</a> told me that he was looking to contribute to some open source projects. He had a list of projects that he actively uses but he didn\'t want to always be checking their issues list for new issues that he could get his hands on. So we thought it would be cool if we had a way to watch a GitHub repository for issues of specific tags, e.g. "Need help", "Good first contribution", etc.</p>\n<p>I thought that\'s something I could easily hack in a weekend. So here\'s <a href="https://gityeller.com">GitYeller</a>.</p>\n<h2>Stack</h2>\n<p>GitYeller is built using JavaScript. Node.js and React more specifically. It\'s hosted on a <a href="https://m.do.co/c/2b3d657e5315">DigitalOcean droplet</a>, uses a <a href="https://letsencrypt.org/">Let\'s Encrypt</a> certificate, <a href="https://www.mailgun.com">Mailgun</a> for transactional emails and a MongoDB for persistent storage.</p>\n<p>It looks like this:</p>\n<p><div>\n          <a\n            class="gatsby-resp-image-link"\n            title="original image"\n            href="/static/56cb14d1d599ba64fc46546d2ec6c754-ae21e.png"\n            style="display: block"\n            target="_blank"\n          >\n            <div\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; "\n            >\n              <div\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 12.254160363086234%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjElEQVQI12P49OHrv29ff/wHYSC7ggEK3r766AgU+/Hh3eccmFhb8XLmyvRp7Oun3mSCib1782kRTP/XL98vMXz7/O333/cf/v959/7/9/efVjXlL2QH4RdP38T+/fzl//evP1tA/JqsWRylKRNFQIZUZc7gh4jNZP/08eu8f7///P/z5t3/f//+/QcAWrhiUN6XL64AAAAASUVORK5CYII=\'); background-size: cover;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt=""\n                  title=""\n                  src="/static/56cb14d1d599ba64fc46546d2ec6c754-ba9a0.png"\n                  srcset="/static/56cb14d1d599ba64fc46546d2ec6c754-125fe.png 163w,/static/56cb14d1d599ba64fc46546d2ec6c754-637de.png 325w,/static/56cb14d1d599ba64fc46546d2ec6c754-ba9a0.png 650w,/static/56cb14d1d599ba64fc46546d2ec6c754-ae21e.png 661w"\n                  sizes="(max-width: 650px) 100vw, 650px"\n                />\n              </div>\n            </div>\n          </a>\n          </div></p>\n<p>So the Front End app is responsible for gathering emails from the user and inserting them into MongoDB. The worker is continuously traversing the collection and checking them against GitHub to see if there is anything new. It\'s that simple!</p>\n<h2>Worker</h2>\n<p>At first, I thought a queue would be a good fit for this since I needed to keep the order that the documents were being created. I knew that the purpose of a queue was to keep the messages processing in order but only to be processed once. I wanted to keep processing the same messages over and over again. So I decided to go with the simplest way possible. Let\'s have a worker continuously fetching a collection over and over again.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/**\n * Main run function that handles the infinite\n * loop over the database\n */</span>\n<span class="token keyword">const</span> run <span class="token operator">=</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cursor<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> cursor\n    <span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscription<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Cursor got to the end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> subscription<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>subscription <span class="token operator">=</span><span class="token operator">></span> worker<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">run</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By passing a <a href="https://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html">MongoDB cursor object</a> and a function that you want to be called with every item, it keeps traversing the collection and gets updated even when a new item is being created. There is no need to restart the connection to MongoDB.</p>\n<p>The <code>setTimeout</code> ensures that the next call will get it\'s own call stack so we don\'t overflow the current one.</p>\n<p><a href="https://github.com/kbariotis/gityeller/blob/master/worker/index.js">Here\'s the complete</a> worker\'s source code.</p>\n<h2>Check against GitHub</h2>\n<p>Let\'s see how we are asking GitHub if it has something new to show us. The actual API call is this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label</code></pre>\n      </div>\n<p>This will return us a list of issues labeled with that specific label of that repository.</p>\n<p>Once we make this request for the first time, we have a timestamp of the latest check. Next time, we will just query with that timestamp, in order to get only the issues that have been created between the last check and now (Actually GitHub returns those issues that have even been updated during that period, so <a href="https://github.com/kbariotis/gityeller/blob/master/worker/worker.js#L89">I have to make some extra checks</a>). Now the query looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE</code></pre>\n      </div>\n<p>GitHub\'s API has a limit. They allow you to do certain API calls in a certain amount of time. I wanted to minimize the calls as much possible because once I hit that limit I won\'t be able to take the results I wanted so the users will never get notified.</p>\n<p>Each time we are making this request, GitHub will count minus one requests of our available quota. In order to save some juice I am using <a href="https://developer.github.com/v3/#conditional-requests">GitHub\'s conditional requests</a>. The above request will return us an ETag header with a value. We can use that value to validate whether our latest response is outdated or not. If it\'s not, GitHub will respond with a 304 Not Modified status code and an empty body.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>URL: api.github.com/owner/repo?labels=label&since=LATEST_RESPONSE_DATE\nHEADERS: If-None-Match: LATEST_RESPONSE_ETAG</code></pre>\n      </div>\n<p>This way the request won\'t be counted. We saved a request and we will only be charged if there is actually something new.</p>\n<p>Read more about <a href="https://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits">ETags and "conditional requests"</a>.</p>\n<h2>Conclusion</h2>\n<p>Certainly, the solution is not optimal. Once the collection grows bigger, the time between the checks for each individual item in the collection will also be long. But it was a fun weekend project. I am already watching the <a href="https://github.com/nodejs/node">node.js</a> repo for new issues labeled <code>v7.x</code>.</p>\n<p>Which repo are you going to watch? Leave me a comment if you liked my weekend project. If you think you can help me make it better, please see the <a href="https://github.com/kbariotis/gityeller">source code</a>.</p>',excerpt:"It all started when  Adonis  told me that he was looking to contribute to some open source projects. He had a list of projects that he...",frontmatter:{date:"March 01, 2017",path:"/gityeller-com-weekend-project/",tags:"node.js, mongodb",title:"GitYeller.com is my latest weekend project",draft:null}}},pathContext:{prev:{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/microservices-lets-talk-about-boundaries/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-03-10T00:00:00.000Z",path:"/drafts/microservices-lets-talk-about-boundaries/",tags:"MicroServices",title:"Microservices: lets talk about boundaries",draft:!0}},next:{excerpt:"Static site generators are amazing tools, hands down! I love working with  Jekyll  and here are some of the features you are missing if you aren't using one: Deduplication of common code blocks Write you code once, include it everywhere Template...",html:'<p>Static site generators are amazing tools, hands down! I love working with <a href="https://jekyllrb.com/">Jekyll</a> and here are some of the features you are missing if you aren\'t using one:</p>\n<ul>\n<li>Deduplication of common code blocks</li>\n</ul>\n<p>Write you code once, include it everywhere</p>\n<ul>\n<li>Template engine</li>\n</ul>\n<p>You know, for loops, if conditionals, etc</p>\n<ul>\n<li>Separated data stores</li>\n</ul>\n<p>Separation of concerns</p>\n<ul>\n<li>Configuration management</li>\n</ul>\n<p>Generate multiple versions of your site based on the environment or whatever</p>\n<p>I have been using Jekyll for a while now and I have to love it. I wouldn\'t say that it\'s the best since I\'ve never used some other but I would love to hear from someone that has features that are missing from Jekyll.</p>\n<p>So on this blog, I would like to present you with my minimal Jekyll configuration that I use on every site I work with. It has the form of a tutorial, so either follows steps below or grab directly the code from GitHub and start coding.</p>\n<h2>Generate a new site</h2>\n<p>Start by generating a new Jekyll project. Download and install <code>ruby</code>.</p>\n<p><code>jekyll new .</code></p>\n<h2>File and folders structure</h2>\n<p>At first, you will notice that there is no markup at all. By default, Jekyll uses a theme that hides all that from you. But we need to inject our custom markup. Let\'s first remove the line <code>theme: minima</code> from _config.yml.</p>\n<p>You will also notice a <code>_posts</code> folder with an example blog post inside. Let\'s not spend time on that. Maybe in another post. Delete the whole folder.</p>\n<p>Now, open <code>about.md</code> and <code>index.md</code>. Those are the main pages of our site the index page and the about page. Every file you put there, Jekyll will generate a new page with that page in that path.</p>\n<p>About\'s page content:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> page\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"About"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> /about/\n<span class="token punctuation">---</span>\n</code></pre>\n      </div>\n<p>Now, this is Jekyll\'s frontmatter. We are requesting here this page to be generated with the default layout, have that specific title and be the <code>index.html</code> in the root directory. Jekyll will either copy paste every HTML file as is inside the final folder or will generate HTML files as told. This is what we do here, we are instructing Jekyll to generate an <code>index.html</code> file in the root directory.</p>\n<p>Index page uses the home layout. But what are these layouts? Glad you finally asked. Those layouts were being hidden again by the default time. Let\'s write our own. Let\'s have one for start. Create the <code>_layouts/default.html</code> file and put inside:</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This is a basic HTML structure with the <code>{{content}}</code> directive. This directive will render everything from a page that has extend that layout.</p>\n<p>Great! Now we have a layout as well. I don\'t like HTML files laying around at the root directory. Let\'s have a separate folder for our pages. Create a <code>pages</code> folder in the root directory. The underscore demotes that this folder will be processed by Jekyll. Now we need an index page. Create an <code>index</code> folder inside <code>_pages</code> with an index.html file inside. Put inside the below snippet:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"WOW Jekyll"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> index.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Hello world&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>Do the same for the about page. This way, we will keep only configuration files in the root directory and have our content in respective folders.</p>\n<p>Let\'s proceed with the 404 page. Same thing, create a <code>pages/404/index.html</code> with contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">layout</span><span class="token punctuation">:</span> default\n<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"404 Not Found"</span>\n<span class="token key atrule">permalink</span><span class="token punctuation">:</span> 404.html\n<span class="token punctuation">---</span>\n&lt;h1<span class="token punctuation">></span>Not found&lt;/h1<span class="token punctuation">></span>\n</code></pre>\n      </div>\n<p>And here\'s our 404 page that our HTTP server will server whenever doesn\'t find a corresponding route.</p>\n<p>Fire <code>jekyll serve</code> and open the displayed link in your browser. You will see our index page.</p>\n<p>Go to an undefined route and you will see our 404 page.</p>\n<h2>Webpack integration</h2>\n<p>Now that we have our basic file structure, we need a way to handle our frontend assets. I am using NPM for my JS dependencies. Same with CSS dependencies plus the SASS preprocessor. Let\'s first, create a folder to put all these there. Create a <code>_sources</code> folder and <code>js</code> and <code>sass</code> folders inside.</p>\n<p>Let\'s first initialize NPM.</p>\n<p><code>npm init</code></p>\n<p>follow the instructions until you are finished.</p>\n<p>Proceed with installing webpack and it\'s dependencies.</p>\n<p><code>npm i --save webpack style-loader file-loader extract-text-webpack-plugin css-loader postcss-loader webpack-dev-server sass-loader node-sass webpack</code></p>\n<p>Now let\'s install Bootstrap.</p>\n<p><code>npm i --save bootstrap-sass</code></p>\n<p>We are going to use a few Bootstrap\'s core modules like the typography and the grid. I am not going to use Bootstrap\'s JS modules since they require jQuery.</p>\n<p>We will use <code>webpack</code> to process the files from that folder and put them inside <code>assets</code> folder. Jekyll will copy that folder inside the final build.</p>\n<p>Create an <code>webpack.config.js</code> to the root directory. Put there the contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    main<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass/main.scss`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'index-page\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/js/index-page.js`</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">"/path.join(__dirname, ../static/\'),"</span>\n    publicpath<span class="token punctuation">:</span> <span class="token string">"/\'/\',"</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'js/[name].js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'postcss-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                plugins<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'precss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              loader<span class="token punctuation">:</span> <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/source/sass`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'css/style.css\'</span><span class="token punctuation">,</span>\n      allChunks<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  devtool<span class="token punctuation">:</span> <span class="token string">\'eval-cheap-module-source-map\'</span><span class="token punctuation">,</span>\n  devServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    inline<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    proxy<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">"**"</span><span class="token punctuation">:</span> <span class="token string">"http://localhost:4000"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    host<span class="token punctuation">:</span> <span class="token string">\'0.0.0.0\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So webpack will process our main <code>scss</code> file and put it into <code>assets/css/style.css</code>. Jekyll will be able to grab it from there. Also, JS files will be processed, be bundled and put into <code>assets/js</code> as a separate file for each of our pages.</p>\n<p>Last, we have enabled <code>webpack-dev-server</code> and make it a proxy to Jekyll\'s host and port. So, in order to use it and have all the good stuff like Hot module replacement we will use that server on development.</p>\n<p>All we need now is to include them into our layout file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie<span class="token punctuation">=</span>edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>{{page.title || site.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  &lt;link rel="stylesheet" href../static/css/main.css">\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n{{ content }}\n&lt;script src../static/js/entry.js"><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Fire up webpack\'s dev server:</p>\n<p><code>./node_modules/.bin/webpack-dev-server --inline --hot</code></p>\n<h2>NPM Scripts</h2>\n<p>Now that everything is in place, we want to take advantage of webpack\'s cool dev features like hot module replacement, etc. To do this we need</p>\n<h2>Deployment</h2>',
id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/Jekyll + webpack = ❤️/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2017-02-25T00:00:00.000Z",path:"/drafts/jekyll-webpack/",tags:null,title:"Jekyll + webpack = ❤️",draft:!0}}}}}});
//# sourceMappingURL=path---gityeller-com-weekend-project-4a35eebb2409d9e5d6d2.js.map