webpackJsonp([96],{"./node_modules/json-loader/index.js!./.cache/json/rest-api-error-handling-with-express-js.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."}},markdownRemark:{html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code>404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code>err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment" spellcheck="true">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment" spellcheck="true">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code>Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code>Error</code> class and create a generic <code>Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment" spellcheck="true">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code>errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',frontmatter:{date:"May 22, 2015",path:"/rest-api-error-handling-with-express-js",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js"}}},pathContext:{prev:{excerpt:"A few days ago I stumbled upon this wonderful  story . I love those short stories. They are real, inspirational and educational stories. I've also have two stories on my head that I kept saying when I am among fellows but I never wrote them somewhere...",html:"<p>A few days ago I stumbled upon this wonderful <a href=\"http://cs.txstate.edu/~br02/cs1428/ShortStoryForEngineers.htm\">story</a>. I love those short stories. They are real, inspirational and educational stories.</p>\n<p>I've also have two stories on my head that I kept saying when I am among fellows but I never wrote them somewhere. Here's my chance. Those stories are not mine but I have them in my mind for so long that I can't even remember where I read them. If you have any clue please share with me, in order to give credits to the original authors.</p>\n<p>Here's the first one.</p>\n<blockquote>\n<p>A train's engine got broken while in the road. It was recently purchaced and it was it's first trip and the president of the transportation company was on it. It happen also to be on, an engineer that was specialized on those kinds of engines. So the president headed to him and asked for help. He was desparate, afraid of the passengers to not left pleased. The engineer agreed to fix the engine and asked for 10.000$. The president took the deal even though the price was insane. The engineer headed to the front of the train. Picked up a hammer that was nearby and started looking at the engine. Everyone was waiting and suddenly he makes three hits to three different spots. Big hits. He yield to the driver to turn on the engine and for everyone's surprise the engine was running again. He fixed it. But the president was mad. He turned to the enginneer and said \"You charded me 10.000$ just to take three hits with the hammer? I would done it my self!\". And the engineer responded \"I didn't charged you for the hitting. I charged you because I knew... where to hit.\"</p>\n</blockquote>\n<p>Amazing. I am always carrying this story in my head. In fact, this story drove me where I am today, always trying to learn things that few people only know. I hope it inspires you too.</p>\n<p>And here's the second.</p>\n<blockquote>\n<p>A young junior employee on an private investements company did a serious, very critical mistake, that cost the company 1.000.000$. The man very sad, the next day went to his manager office and he handed his resignation. He said to him \"I know you probably going to fire me for the mistake I've done so I am quiting.\". And the manager said: \"Are you being serious? I just spend a million on your training. You aren't going anywhere!\".</p>\n</blockquote>\n<p>Loved this story too. Experience is so important. It's  what defines you as a professional. But in order to gain it you need to act. Without fear.</p>\n<p>And again, these stories are not mine and if you happen to know the original authors please share them with me.</p>\n<p>Do you know any good stories?</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/the-stories-in-my-head/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-06-13T13:46:56.000Z",path:"/the-stories-in-my-head",tags:"engineers, experience, stories",title:"The stories in my head",draft:null}},next:{excerpt:"A week ago  Thanasis  asked me to make a Javascript 101 for the  SKG Node.js monthly meetup . The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn't have any slides or anything ready for it. Fuck it...",html:'<p>A week ago <a href="http://thanpol.as/">Thanasis</a> asked me to make a Javascript 101 for the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/">SKG Node.js monthly meetup</a>. The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn\'t have any slides or anything ready for it. Fuck it. Challenge accepted.</p>\n<p>I strongly believe that it’s the pressure that makes you a better professional let alone a better person. Life doesn’t wait. Let alone the community. Of course, I would be more pleased if I had the time to prepare a better presentation. But even this way I think it was a great experience. People liked it.</p>\n<p>Thanasis offered me even an easier solution. Take a ready presentation, study it and present it. Nah, I didn’t want it that way. I need it to be me. To have my own slides. My own talk. After all it’s me who had to present it. It had to had my style.</p>\n<p>Anyway, people asked for the <a href="http://slides.com/kostasbariotis/javascript-101">slides</a> and for some references. So here they are.</p>\n<br/>\n<iframe src="//slides.com/kostasbariotis/javascript-101/embed?style=light" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<br/>\n<p>80% of the talk were studied by <a href="http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691">Professional Javascript Developers from Nikolas Zakas</a>. I strongly recommend this book, but be aware it’s a \'heavy\' one. Even being quite old, it still has some neat advices and can be a great reference for the future.</p>\n<p>I asked <a href="https://twitter.com/adon1sk">Adonis</a> to borrow me his <a href="http://shop.oreilly.com/product/9780596517748.do">Javascript: The Good Parts</a> a week ago but still hasn’t remember it. I took a quick look on it online (using the previews) and stole some examples from there too. I would recommend it.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/">MDN</a> also helped me a lot, being in the first 10 results of Google searches, I always choose it before I dive deeper. (Still avoiding w3school even though I try to support them. Still can’t trust their source. :/)</p>\n<p>You can find Thanasis\'s slides <a href="https://speakerdeck.com/thanpolas/assets-on-the-cloud">here</a> of his <em>Assets on the Cloud</em> talk, which was amazing.</p>\n<p>Finaly, check out the photos(<a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/photos/26088965/">here</a>, <a href="https://www.flickr.com/photos/christosbacharakis/sets/72157652297259605/">here</a>) we took that night.</p>\n<p>If you were at the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/events/222016697/">meetup</a> and you liked my talk, please ping me on <a href="http://twitter.com/kbariotis">Twitter</a> with notices and suggestions.</p>\n<p>Thank you.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/references-from-my-javascript-101/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-01T15:33:19.000Z",path:"/references-from-my-javascript-101",tags:"javascript, skgnodejs, meetup, node.js",title:"References from my Javascript 101",draft:null}}}}}});
//# sourceMappingURL=path---rest-api-error-handling-with-express-js-3d0405f7e8c6c3dcd723.js.map