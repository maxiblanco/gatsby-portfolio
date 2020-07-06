import React from 'react';

const ProyectCard = ({ image = {}, title, description, technologies = {} }) => (
  <article className="card">
    <div className="card-header">
      <div className="card-header-title">
        <p>{title}</p>
      </div>
    </div>
    <div className="card-image">
      <figure>
        <img src={image.src} alt={image.alt} width="200px" />
      </figure>
    </div>
    <div className="card-content">
      <p>{description}</p>
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
