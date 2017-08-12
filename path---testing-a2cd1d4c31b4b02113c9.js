webpackJsonp([25],{"./node_modules/json-loader/index.js!./.cache/json/testing.json":function(e,t){e.exports={data:{markdownRemark:{html:"<p>A few weeks ago, I did my Microservices talk at Thessaloniki's Ruby meetup. It was an awesome experience. There was also a talk there, entitled Testing Demystified, after me. The excellent engineer gave a lot of food for thought about testing. I wasn't aware of most of them.</p>\n<p>So I decided to write a similar post to let me clear my head on the subject.</p>\n<h1>Test Driven Development</h1>\n<p>The most common term you will meet in software is TDD. It's concept is actually simple. We write tests before start coding. <a href=\"http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530\">Kent Beck</a> describes it like this:</p>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Refactor</li>\n</ol>\n<p>We first write our tests based on our specifications. We run them and of course they won't succeed thus are going to be red. Then we write the smallest amount of code to make our tests pass and meet our requirements. Once we get the green flag we start refactoring and cleaning our code.</p>\n<h2>Unit Testing</h2>\n<p>Unit tests are the start of every test suite. Before starting to unit test, one must define what a unit is, which may vary from team to team. The well known rule is that a unit is the smallest piece of code that can be tested. Regardless of if it's a function, a class or even a whole system in some cases.</p>\n<p>Unit tests must run fast and run often. To achieve maximum speed,  they are being run in isolation. Thus mocking and stubbing of dependent units happens often. For example, a database can be mocked instead of actually hitting it.</p>\n<p>I like to have my unit tests independent from the whole test suite. I use a watch process to run them every time I change something in the code. This way I cannot forget to make sure that they are passing, before commit.</p>\n<h2>Components/Integration Testing</h2>\n<p>After writing our unit tests, next are Components Tests. Those are used to test units in combination. Units that are working together should be tested by Components Testing.</p>\n<p>We should mock external services that are not part of the requirement under testing.</p>\n<h2>End to End/System Testing</h2>\n<p>Finally, we are testing anythings, from the User Interface to the Database. Testing each intermediate component. To make sure that our system meets business requirements, System Testing happens by the user perspective.</p>\n<h1>Property Testing</h1>\n<p>An important concept in testing a system is Property Testing. Instead of taking certain test cases, we are instructing our system to take different values and test against them. This way we can even find cases that we didn't thought. Property testing can be applied at any level of our test suite.</p>\n<h1>How much to test</h1>\n<p>A question that usually shows up is \"How much should I be testing\". While a possible good answer could be \"As much as you can\" this is often not the case. Testing can't always be a priority. There is a point in the size of every test suite that once we pass it, there is no more the need to test. Unless new requirements are introduced, we are running the suite to be sure that nothing breaks.</p>\n<p>Before you try to answer the \"how much to test\", let's take a look into the \"what to test\". The concept says that to put minimum effort and investment into manual and GUI testing, we should invest into the lower levels. Manual is by default more expensive and more fault tolerant. Bugs are more possible to pass by manual tests than automated unit tests.</p>\n<p>We can't eliminate manual testing and surely we can't automate it. But we can be sure that having a stronger automated test foundation we leave fewer errors to be found in the upper levels of testing.</p>",frontmatter:{date:"January 01, 1970",path:"/testing",tags:null,title:"Testing Software Systems"}}},pathContext:{prev:{excerpt:"Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies  http://www.nobeliefs.com/fallacies.htm Not everything is about you. Everything is about the team...",html:'<ol>\n<li>\n<p>Knowing how to communicate effectively\nvalid arguments\npoints\nknow what your talkign about\ndo your homework/research\nwant to go deeper? fallacies <a href="http://www.nobeliefs.com/fallacies.htm">http://www.nobeliefs.com/fallacies.htm</a></p>\n</li>\n<li>\n<p>Not everything is about you. Everything is about the team. Disagreeing will only slow the whole team down.\nKnow when to hold back. When to say, you know what, I do disagree with all of you, but let\'s try that and see what happens.</p>\n</li>\n</ol>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/tell-me-about-a-situation-where-you-were-disagreeing-with-other-people-on-the-team",tags:null,title:"Tell me about a situation where you were disagreeing with other people on the team"}},next:{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-microfunctions-architecture/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/the-microfunctions-architecture",tags:null,title:"The Microfunctions architecture"}}}}}});
//# sourceMappingURL=path---testing-a2cd1d4c31b4b02113c9.js.map