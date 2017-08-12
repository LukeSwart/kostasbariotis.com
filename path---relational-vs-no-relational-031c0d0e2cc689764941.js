webpackJsonp([114],{"./node_modules/json-loader/index.js!./.cache/json/relational-vs-no-relational.json":function(e,t){e.exports={data:{markdownRemark:{html:"<p>MySQL = relational schema and a lot of relations\nMongoDB = no relations but flexibility</p>",frontmatter:{date:"January 01, 1970",path:"/relational-vs-no-relational",tags:null,title:"Relational vs No Relational"}}},pathContext:{prev:{excerpt:"Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system. Searching in Google we didn't find any real world example either any useful...",html:"<p>Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system.</p>\n<p>Searching in Google we didn't find any real world example either any useful information as we expected. We had only our experience from the various systems we've used and how they are implementing such things. But again, we had never meet an isolated auditing service. That was our goal.</p>\n<p>Here are my notes from the meeting.</p>\n<ul>\n<li>Our goal was to track down actions happens anywhere in the system</li>\n<li>We should track the action, the actor of that action(whether it's an actual user or another service) and a lot of metadata about the action.</li>\n<li>Actions are application level logic. This means that each of our applications (otherwise services) define their actions that want our service to track. There are no limitations, validations or anything like that. There are rules that must be followed but other than that, you are free to track what ever you want.</li>\n<li>We found a solution to allow the presenter of the audits to not have to render the message it self, instead we are generating a message directly from the data we receive so the presenter can take ready messages to display. Of course, it has the choice to rerender them itself.</li>\n</ul>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/our-auditing-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/our-auditing-service",tags:null,title:"Our auditing service"}},next:{excerpt:"Great, so finished your newly designed REST API that will back up your upcoming platform. You are about to hit live and you are expecting a fair amount of visitors, but there is the possibility of overcoming that amount and you want to test your API...",html:"<p>Great, so finished your newly designed REST API that will back up your upcoming platform. You are about to hit live and you are expecting a fair amount of visitors, but there is the possibility of overcoming that amount and you want to test your API to see how far it can go.</p>\n<p>Enter stress tests. Stress tests can simulate users that come and hit requests over your API. The frequency of those requests is the key metric here and what you really want to know is how much you can afford.</p>\n<p>The most well known stress test utility out there is Apache's AB. If you have installed Apache already you also have installed AB. So fire up your console, write <code>ab</code> and hit Enter.</p>\n<p>AB is benchmarking tool for Apache servers, but you can use it with every HTTP serving platforms, such as Nodejs apps.</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/rest-api-stress-test/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/rest-api-stress-test",tags:null,title:"REST API Stress Test"}}}}}});
//# sourceMappingURL=path---relational-vs-no-relational-031c0d0e2cc689764941.js.map