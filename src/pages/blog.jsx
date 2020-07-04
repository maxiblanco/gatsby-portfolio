import React, { useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lottie from 'lottie-web';
import animatedBlob from '../assets/animations/faster-blob-animation.json';

const BlogPage = () => {
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
  return (
    <main className="has-navbar-fixed-top">
      <div id="wrapper" className="container">
        <div className="absolute-container">
          <div className="sticky-container">
            <div className="animation-container" ref={animationContainer} />
          </div>
        </div>

        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>

        <section id="introduction" className="section">
          <div className="hero is-fullheight-with-navbar ">
            <div className="hero-body">
              <div className="container over-lottie">
                <Fade>
                  <div className="my-4">
                    <h1 className="title is-1 has-text-weight-bold">
                      In progress...
                    </h1>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

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
              Work in progress by <strong>Maximiliano Blanco</strong> &#169;
              2020
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default BlogPage;
