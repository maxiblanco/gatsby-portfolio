import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProyectCard = ({ image = {}, title, description, technologies = {} }) => (
  <article className="card">
    <div className="card-header">
      <div className="card-header-title is-centered">
        <p>{title}</p>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column">
        <div className="card-image mx-4">
          <figure>
            <img src={image.src} alt={image.alt} />
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

export default ProyectCard;
