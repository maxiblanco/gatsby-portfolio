import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProyectCard = ({ image = {}, title, description, technologies = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      firechat: file(relativePath: { eq: "firechat_frame.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query. # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 300) {
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
          fixed(width: 200, height: 300) {
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
          fixed(width: 200, height: 300) {
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
          fixed(width: 200, height: 300) {
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
          <div className="card-image">
            <figure>
              <Img
                fixed={data.firechat.childImageSharp.fixed}
                alt={image.alt}
                width="200px"
              />
            </figure>
          </div>
        </div>
        <div className="column ">
          <div className="card-content">
            <p>{description}</p>
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
        <button type="button" className="button card-footer-item">
          Code
        </button>
        <button type="button" className="button card-footer-item">
          Demo
        </button>
      </footer>
    </article>
  );
};

export default ProyectCard;
