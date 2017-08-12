webpackJsonp([105],{"./node_modules/json-loader/index.js!./.cache/json/simplicity-is-the-key-after-all.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>I was called to create a Facebook Page Application to take part on contests, while an Admin panel was necessary to manage those contests. When i first heard about it, i immediately thought to give a try a new <a title="Fat Free Framework" href="http://fatfreeframework.com" target="_blank">PHP framework</a> i was working on lately. It\'s based on <a title="MVC Pattern" href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">MVC principles.</a></p>\n<p>So, the main idea was that i would keep separate Controllers, one to serve the Facebook app through Facebook\'s iframe, that would answer only to POSTs, etc, etc; and one that would serve users wanting to access the Admin panel from anywhere.  I created separate Views on the Controller, that was serving the Facebook Page app, one that would determine if the user has liked our page or not, if the contest was currently drawed and would redirect the Facebook\'s iframe on the appropriate View.</p>\n<p>The idea was so simple, that ended up too complex. So complex that bugs out of nowhere jumped in.</p>\n<p>The latest bug i worked on all day today was that due to too many redirects, i was doing, on the same controller, Safari and it\'s \'<a title="Safari\'s 3rd party block cookies policy discussed" href="http://stackoverflow.com/questions/14825805/cookies-not-setting-in-safari-6" target="_blank">Blocking 3rd Party Cookies</a>\' policy wouldn\'t allow to keep sessions, so i had to eliminate those redirects in order to create a persistent user experience.</p>\n<p>Some times too much simplicity can drive you crazy...</p>',frontmatter:{date:"September 02, 2013",path:"/simplicity-is-the-key-after-all",tags:null,title:"Simplicity is the key after all..."}}},pathContext:{prev:{excerpt:"",html:'<p><a href="http://googlepolicyeurope.blogspot.gr/2013/09/whats-state-of-european-union-askbarroso.html" title="Here\'s your chance to ask President Barosso ">Here\'s your chance to ask President Barosso </a></p><p>Google+ will host a hangout, main guest will be President of the European Comission <b><a title="José Manuel Barroso" href="http://en.wikipedia.org/wiki/Jos%C3%A9_Manuel_Barroso">José Manuel Barroso</a>. Here\'s your chance...</b></p><blockquote><p><i>Is Europe really emerging from the financial crisis? What’s going to happen to Europe’s 5 million unemployed young people? Does the rise of euro-sceptic politics spell the end of the EU as we know it? Will Europe act on Syria? </i></p></blockquote>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/heres-your-chance-to-ask-president-barosso/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2013-09-09T17:33:39.000Z",path:"/heres-your-chance-to-ask-president-barosso",tags:null,title:"Here's your chance to ask President Barosso"}},next:{excerpt:"But one day i was tired. I was bored of all this mess, that was just not my job. I didn’t care about package conflicts, or kernel recompilation. So i format and this time i went on Windows. I thought let’s make my developing life a little more easier...",html:'<div>Hi, i’m Kostas. I am a developer. I develop stuff for the web. I am using Linux, for my main development machine since i can remember. (I am 25 now so about 10 years or so).</div>\n<div>\n<p>But one day i was tired. I was bored of all this mess, that was just not my job. I didn’t care about package conflicts, or kernel recompilation. So i format and this time i went on Windows. I thought let’s make my developing life a little more easier. But that’s just didn’t work. Instead, about 5 months later, i am feeling anti-productive. Yes that’s right. Nothing is working the way i need to work.</p>\n<p>So i present to you <a title="Vagrant" href="http://www.vagrantup.com/" target="_blank">Vagrant</a>.</p>\n<p>Vagrant is a nice middleware between you and <a title="VirtualBox" href="https://www.virtualbox.org/" target="_blank">VirtualBox</a>. It provides all the tools you need to set up your development environment almost everywhere and almost immediately.</p>\n<p>Consider this. You are working on an online service that is deployed on a hosting machine somewhere. You can’t develop your newly features on the production server and also you don’t want an FTP connection to work. You need everything local. You want also to have an exact same machine, as your remote machine, to work with. With the same exact libraries and the corresponding versions of these. After you have <a title="Download Vagrant" href="http://downloads.vagrantup.com/" target="_blank">download </a>Vagrant:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$  vagrant init precise32 <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>a href<span class="token operator">=</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>http://files.vagrantup.com/precise32.bo<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>http://files.vagrantup.com/precise32.bo<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/a<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ vagrant up\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code> $ vagrant <span class="token function">ssh</span>\n</code></pre>\n      </div>\n<p>Just setup your Linux box with all the services, libraries and stuff you need. Edit the .VagrantFile, by first checking the <a title="Vagrant Docs" href="http://docs.vagrantup.com/v2/getting-started/index.html" target="_blank">docs</a>. You can make all the cool stuff like port forwarding and shared folders on your hosting machine.</p>\n<p>Now you need to share this box with your colleagues so you can work on the same exact machine.Vagrant let’s you create packages. Those packages are just some configuration files you can even upload to <a title="Github" href="http://www.github.com/" target="_blank">Github </a>and let others grab them.</p>\n<p>But the greatest feature, Vagrant has to <a title="Vagrant Provisioning" href="http://docs.vagrantup.com/v2/provisioning/index.html" target="_blank">offer </a>you is <a title="Server Provisioning" href="http://en.wikipedia.org/wiki/Provisioning" target="_blank">Server Provisioning</a>. Use<a title="Puppet" href="http://puppetlabs.com/puppet/puppet-enterprise" target="_blank">Puppet </a>or <a title="Chef Provisioning" href="http://docs.opscode.com/chef_overview.html" target="_blank">Chef </a>to define all the services and packages you want automatically to install on the box, so everyone got’s the same exact machine as your production server or even the staging/testing server.</p>\n<p>There it is, never worry about your main desktop OS. Create a development environment once and for all.</p>\n</div>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/vagrantup-your-distributed-development-environment/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2013-08-31T07:12:09.000Z",path:"//vagrantup-your-distributed-development-environment",tags:null,title:"VagrantUp : your distributed development environment"}}}}}});
//# sourceMappingURL=path---simplicity-is-the-key-after-all-94f21cf47ea343af948a.js.map