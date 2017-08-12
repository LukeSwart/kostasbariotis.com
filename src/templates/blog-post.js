import React from 'react';
import Helmet from 'react-helmet';
import dateformat from 'dateformat';
import GatsbyLink from 'gatsby-link';
import { ShareButtons } from 'react-share';
import ReactDisqusThread from 'react-disqus-thread';
import LazyLoad from 'react-lazyload';

import Menu from '../components/Menu';
import BulletListTags from '../components/BulletListTags';
import NavigateLink from '../components/NavigateLink';
import Separator from '../components/Separator';

import avatarImg from './../../assets/images/avatar.jpg';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} = ShareButtons;

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  const fullUrl = `https://kostasbariotis.com${post.frontmatter.path}`;

  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} - Kostas Bariotis`}
        meta={[{ name: 'description', content: post.excerpt }]}
      />
      <Menu />
      <main className="blog container" role="main">
        <div className="medium-8 medium-offset-2">
          <header className="header post-head ">
            <h1 className="post-title">
              {post.frontmatter.title}
            </h1>
          </header>
          <section className="post-meta">
            <div className="row">
              <div className="large-4">
                <ul className="list-inline">
                  <li>
                    <GatsbyLink
                      to="/"
                      className="author-avatar"
                      itemProp="name"
                    >
                      <LazyLoad height={250}>
                        <img src={avatarImg} alt="Kostas Bariotis" />
                      </LazyLoad>
                    </GatsbyLink>
                  </li>
                  <li>
                    <div className="author-name">Kostas Bariotis</div>
                    <time
                      className="post-date"
                      dateTime={dateformat(
                        post.frontmatter.date,
                        'isoDateTime'
                      )}
                    >
                      {dateformat(post.frontmatter.date, 'd mmmm yyyy')}
                    </time>
                  </li>
                </ul>
              </div>
              <div className="large-8">
                <BulletListTags tags={post.frontmatter.tags} />
              </div>
            </div>
          </section>
          <Separator />
          <article className="main-post {{post_class}}">
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Separator />
            <footer className="post-footer">
              <section className="share text-center">
                <ul className="share-buttons list-inline">
                  <li>
                    <b>Share this post on</b>
                  </li>
                  <li className="link-twitter">
                    <TwitterShareButton
                      url={fullUrl}
                      title={post.frontmatter.title}
                      via="kbariotis"
                      className="share-twitter"
                    >
                      <span>Twitter</span>
                    </TwitterShareButton>
                  </li>
                  <li className="link-facebook">
                    <FacebookShareButton
                      url={fullUrl}
                      title={post.frontmatter.title}
                      description={post.excerpt}
                      className="share-facebook"
                    >
                      <span>Facebook</span>
                    </FacebookShareButton>
                  </li>
                  <li className="link-google-plus">
                    <GooglePlusShareButton
                      url={fullUrl}
                      className="share-google-plus"
                    >
                      <span>Google+</span>
                    </GooglePlusShareButton>
                  </li>
                  <li className="link-reddit" title={post.frontmatter.title}>
                    <RedditShareButton url={fullUrl} className="share-reddit">
                      <span>Reddit</span>
                    </RedditShareButton>
                  </li>
                </ul>
              </section>
            </footer>

            <section className="blog-section">
              <header className="header">
                <h2>Comments</h2>
              </header>
              <ReactDisqusThread
                shortname="kostasbariotis"
                identifier={post.frontmatter.path.slice(1)}
                title={post.frontmatter.title}
                url={fullUrl}
              />
            </section>

            <section className="blog-section">
              <header className="header">
                <h2>Navigate</h2>
              </header>
              <div className="row">
                <div className="large-6">
                  <NavigateLink post={prev} />
                </div>
                <div className="large-6 text-right">
                  <NavigateLink post={next} />
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;