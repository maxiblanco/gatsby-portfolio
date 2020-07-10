import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import ReduxSaga from '../assets/icons/redux-saga.svg';

const ProyectCard = ({
  alias,
  image = {},
  title,
  description,
  technologies = {},
  repo,
}) => {
  const data = useStaticQuery(graphql`
    query {
      firechat: file(relativePath: { eq: "firechat_frame.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query. # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 350) {
            src
            srcSet
            width
            height
          }
        }
      }
      healthy: file(relativePath: { eq: "healthy-dev-frame.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 350) {
            src
            srcSet
            width
            height
          }
        }
      }
      map: file(relativePath: { eq: "map-frame.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 350) {
            src
            srcSet
            width
            height
          }
        }
      }
      journal: file(relativePath: { eq: "travel-journal-frame.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 350) {
            src
            srcSet
            width
            height
          }
        }
      }
    }
  `);
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-title is-centered">
          <p>{title}</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card-image nocolor">
            <figure className="image ">
              <Img fixed={data[alias].childImageSharp.fixed} alt={image.alt} />
            </figure>
            <div className="is-overlay visible-on-hover">
              <img src={image.gif} alt={image.alt} className="is-primary" />
            </div>
          </div>
        </div>
        <div className="column ">
          <div className="card-content">
            <p>{description}</p>
            <span className="icon is-large">
              <img src={ReduxSaga} alt="redux logo" />
            </span>

            <span className="icon is-large">
              <FontAwesomeIcon
                icon={['fab', 'js']}
                className="mx-3 my-3 is-size-3"
              />
            </span>
            <span className="icon is-large">
              <FontAwesomeIcon
                icon={['fab', 'node']}
                className="mx-3 my-3 is-size-3"
              />
            </span>
            <span className="icon is-large">
              <FontAwesomeIcon
                icon={['fab', 'react']}
                className="mx-3 my-3 is-size-3"
              />
            </span>
          </div>
        </div>
      </div>

      <footer className="card-footer">
        <a
          type="button"
          href={repo}
          rel="noreferrer"
          role="button"
          target="_blank"
          className="button card-footer-item"
        >
          <span className="icon">
            <FontAwesomeIcon className="mx-3" icon={['fa', 'code']} />
          </span>
          <span>Code</span>
        </a>
        <a
          type="button"
          target="_blank"
          href={repo}
          rel="noreferrer"
          role="button"
          className="button card-footer-item"
          disabled
        >
          Demo
        </a>
      </footer>
    </article>
  );
};

export default ProyectCard;
