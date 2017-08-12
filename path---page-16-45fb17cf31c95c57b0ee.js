webpackJsonp([127],{"./node_modules/json-loader/index.js!./.cache/json/page-16.json":function(e,t){e.exports={pathContext:{posts:[{excerpt:"A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn...",html:"<p>A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn't aware of most of them.</p>\n<p>So I decided to write a similar post to let me clear my head on the subject.</p>\n<h1>Test Driven Development</h1>\n<p>The most common term you will meet in software is TDD. It's concept is actually simple. We write tests before start coding. <a href=\"http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530\">Kent Beck</a> describes it like this:</p>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Refactor</li>\n</ol>\n<p>We first write our tests based on our specifications. We run them and of course they won't succeed thus are going to be red. Then we write the smallest amount of code to make our tests pass and meet our requirements. Once we get the green flag we start refactoring and cleaning our code.</p>\n<h2>Unit Testing</h2>\n<p>Unit tests are the start of every test suite. Before starting to unit test, one must define what a unit is, which may vary from team to team. The well known rule is that a unit is the smallest piece of code that can be tested. Regardless of if it's a function, a class or even a whole system in some cases.</p>\n<p>Unit tests must run fast and run often. To achieve maximum speed,  they are being run in isolation. Thus mocking and stubbing of dependent units happens often. For example, a database can be mocked instead of actually hitting it.</p>\n<p>I like to have my unit tests independent from the whole test suite. I use a watch process to run them every time I change something in the code. This way I cannot forget to make sure that they are passing, before commit.</p>\n<h2>Components/Integration Testing</h2>\n<p>After writing our unit tests, next are Components Tests. Those are used to test units in combination. Units that are working together should be tested by Components Testing.</p>\n<p>We should mock external services that are not part of the requirement under testing.</p>\n<h2>End to End/System Testing</h2>\n<p>Finally, we are testing anythings, from the User Interface to the Database. Testing each intermediate component. To make sure that our system meets business requirements, System Testing happens by the user perspective.</p>\n<h1>Property Testing</h1>\n<p>An important concept in testing a system is Property Testing. Instead of taking certain test cases, we are instructing our system to take different values and test against them. This way we can even find cases that we didn't thought. Property testing can be applied at any level of our test suite.</p>\n<h1>How much to test</h1>\n<p>A question that usually shows up is \"How much should I be testing\". While a possible good answer could be \"As much as you can\" this is often not the case. Testing can't always be a priority. There is a point in the size of every test suite that once we pass it, there is no more the need to test. Unless new requirements are introduced, we are running the suite to be sure that nothing breaks.</p>\n<p>Before you try to answer the \"how much to test\", let's take a look into the \"what to test\". The concept says that to put minimum effort and investment into manual and GUI testing, we should invest into the lower levels. Manual is by default more expensive and more fault tolerant. Bugs are more possible to pass by manual tests than automated unit tests.</p>\n<p>We can't eliminate manual testing and surely we can't automate it. But we can be sure that having a stronger automated test foundation we leave fewer errors to be found in the upper levels of testing.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/testing/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/testing",tags:null,title:"Testing Software Systems"}},{excerpt:"The Error object",html:"<p>The Error object</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-error-object-in-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/the-error-object-in-javascript",tags:null,title:"The error object in Javascript"}},{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-microfunctions-architecture/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/the-microfunctions-architecture",tags:null,title:"The Microfunctions architecture"}},{excerpt:"I am Software Engineer being paid two times over the standard Greek wage. But why you say. When I was growing up I had to deal with two things: a) I didn't had the money to do anything I wanted to do and b) I had to do shitty jobs to get that money...",html:"<p>I am Software Engineer being paid two times over the standard Greek wage. But why you say.</p>\n<p>When I was growing up I had to deal with two things: a) I didn't had the money to do anything I wanted to do and b) I had to do shitty jobs to get that money.</p>\n<p>So I had to find a solution. I was introduced to programming and everyone were talking about how is the job of the future. I fall in love with it since my first key strokes. I made my decision at that moment.</p>\n<p>I had a mentor back then. My cousin. 20 years of experience more than me and he really wanted to stack them all in my head. Once he said to me: \"There are two options in life. You can either be a cow, walking around the same grass land your whole life or you can be a hawk, flying and traveling every day and watching the world from the sky. You got choose.\" That completely messed up my childhood. I had to find a way to be hawk.</p>\n<p>I don't like long term goals. Even for my longest goals I will break them into smaller tasks and commit to those.</p>\n<p>My most long term goal was and still is one. Is the one that I set when I was a kid in order to solve my problems.</p>\n<p>To be a high paid professional in my industry until my thirtieth birthday.</p>\n<p>Let's break that down:</p>\n<p>Professional: I love programming and that is the primary reason I do it for living. If I didn't do it for any reason, I would probably doing it in my free time. I wrote my first lines of code in the age of 10. That was it for me. Right there I discovered what I wanted to do in life.</p>\n<p>High paid: Not just paying the bills. I want to be high paid. Have you ever declined a suggestion for a road trip or even to get out for some drinks, cause you couldn't afford it? Yeah, I know. I don't want this. I want money to not be problem. They're supposed to be the ticket, not the barrier.</p>\n<p>The original goal was until the age of 25. I failed, so I rescheduled it. If I were to predict my next deadline, I would say I won't fail this time. Even if I do, I will just set the next goal and move on. I had enough.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-reason-i-do-what-i-do/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/the-reason-i-do-what-i-do",tags:null,title:"The reason I do what I do"}},{excerpt:'With the rise of the upcoming  WebWorkers API  in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat? A WebWorker is a...',html:'<p>With the rise of the upcoming <a href="http://www.w3.org/TR/workers/">WebWorkers API</a> in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat?</p>\n<p>A WebWorker is a separate thread that runs Javascript but has no access to the DOM or the <code>window</code> object. But it can do complex queries and loops, accessing core <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">functions and APIs</a>, while you are letting the main thread, the UI thread, to handle the UI stuff only.</p>\n<p>Rendering the DOM is so expensive, specially when it comes to complex interfaces we have nowadays. Not so long ago, the <a href="https://facebook.github.io/react/docs/reconciliation.html">VirtualDOM</a> introduced which tried to speed up the rendering process by rendering only what actually changed, instead of re-rendering the whole page. But, that\'s not enough apparently, since even such few changes can\'t be handle well by low powered devices such as mobiles phones and watches.</p>\n<p>In order to keep the 60fpm barrier, we are completely freeing the main thread to be able to handle the rendering only and we start WebWorkers to handle our business logic.</p>\n<p>I found <a href="http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org">two</a> <a href="https://medium.com/@nsisodiya/flux-inside-web-workers-cc51fb463882#.iv69h6ih2">great</a> examples of this concept. Both, they are suggesting keeping the whole app outside the main thread and send there only the patch of the changed DOM to be rendered. The UI thread can then handle only rendering and complex fancy animations.</p>\n<p>Oh, by the way, Nodejs fans, <a href="https://github.com/nodejs/node/pull/2133">Workers are coming</a>.</p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/ui-thread-free/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/ui-thread-free",tags:null,title:"UI thread free"}}],page:16,pagesSum:17}}}});
//# sourceMappingURL=path---page-16-45fb17cf31c95c57b0ee.js.map