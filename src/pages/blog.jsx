import React, { useEffect, createRef } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lottie from 'lottie-web';
import animatedBlob from '../assets/animations/faster-blob-animation.json';
import animatedCornerBlob from '../assets/animations/animated-blob.json';
import PostLink from '../components/PostLink';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          internal {
            content
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animatedBlob,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  const animationCornerContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationCornerContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animatedCornerBlob,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  return (
    <main className="has-navbar-fixed-top">
      <div id="wrapper" className="container">
        <div className="absolute-container">
          <div className="sticky-container">
            <div
              className="animation-container blog"
              ref={animationContainer}
            />
            <div
              className="animation-container blog"
              ref={animationCornerContainer}
            />
          </div>
        </div>

        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>

        <section className="section">
          <div className="container over-lottie">
            <div className="columns">
              <div className="column" />
              <div className="column is-half">
                <h4 className="title is-4 has-text-grey">
                  My name is Maximiliano Blanco and I work from Villa Crespo a
                  neighborhood of Buenos Aires, Argentina. These are some words
                  about code.
                  {/*                     {edges &&
                      edges.map((edge) => (
                        <Fade>
                          <PostLink key={edge.node.id} post={edge.node} />
                        </Fade>
                      ))} */}
                </h4>
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="container over-lottie">
          <div className="has-text-centered">
            <a href="https://www.linkedin.com/in/maxiblanco/">
              <FontAwesomeIcon
                className="mx-3 my-3 is-size-3"
                icon={['fab', 'linkedin']}
              />
            </a>
            <a href="https://github.com/maxiblanco">
              <FontAwesomeIcon
                className="mx-3 my-3 is-size-3"
                icon={['fab', 'github']}
              />
            </a>
          </div>
          <p className="has-text-centered">
            Work in progress by <strong>Maximiliano Blanco</strong> &#169; 2020
          </p>
        </div>
      </footer>
    </main>
  );
};

export default BlogPage;
