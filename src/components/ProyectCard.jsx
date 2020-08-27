import React from 'react';

const ProyectCards = () => {
  return (
    <div className="columns">
      <div className="column">

        <div className="card hover__scale">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="https://i.imgur.com/Qjet3lE.gif" alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              {/*               <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://placeholder.pics/svg/90" alt="Placeholder image" />
                </figure>
              </div> */}
              <div className="media-content">
                <p className="title is-size-3-desktop is-size-5-touch is-clipped">Film Here Next</p>
              </div>
            </div>
            <div className="content">
              <div className="level flex--wrap">
                <div className="level-item ">
                  <div className=" tags has-addons">
                    <span className="tag">Next</span>
                    <span className="tag is-primary">JS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons ">
                    <span className="tag">Tailwinds</span>
                    <span className="tag is-primary">CSS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons ">
                    <span className="tag">GoogleMaps</span>
                    <span className="tag is-primary">API</span>
                  </div>
                </div>
              </div>
              <p>Website to share movie locations and rental information.</p>
            </div>
            <div className="level is-mobile">
              <div className="level-item">
                <div>
                  <a type="button" href="https://github.com/maxiblanco/film-here-next" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="fas fa-code-branch" />
                    </span>
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <a type="button" href="https://film-here-next.vercel.app/" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="far fa-eye" />
                    </span>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="column">
        <div className="card hover__scale">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="https://i.imgur.com/y24jSD0.gif" alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              {/* <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://placeholder.pics/svg/90" alt="Placeholder image" />
                </figure>
              </div> */}
              <div className="media-content">
                <p className="title is-size-3-desktop is-size-5-touch is-clipped">Movieclub</p>
              </div>
            </div>
 
            <div className="content">
              <div className="level flex--wrap">
                <div className="level-item">
                  <div className=" tags has-addons">
                    <span className="tag">Tailwinds</span>
                    <span className="tag is-primary">CSS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons">
                    <span className="tag">Redux</span>
                    <span className="tag is-primary">JS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons">
                    <span className="tag">React</span>
                    <span className="tag is-primary">JS</span>
                  </div>
                </div>
              </div>
              <p className="is-size-6-touch">Movie search database that presents dynamic content from TheMovieDB API.</p>
            </div>
            <div className="level is-mobile">
              <div className="level-item">
                <div>
                  <a type="button" href="https://github.com/maxiblanco/movieclub-reborn" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="fas fa-code-branch" />
                    </span>
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <a type="button" href="https://movieclub-reborn.vercel.app/" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="far fa-eye" />
                    </span>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card hover__scale">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src="https://i.imgur.com/7ISal9W.gif" alt="Travel journal" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              {/* <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://placeholder.pics/svg/90" alt="Placeholder image" />
                </figure>
              </div> */}
              <div className="media-content">
                <p className="title is-size-3-desktop is-size-5-touch is-clipped">Travel Journal</p>
              </div>
            </div>
            <div className="content">
              <div className="level flex--wrap">
                <div className="level-item">
                  <div className="tags has-addons">
                    <span className="tag">Materialize</span>
                    <span className="tag is-primary">CSS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons">
                    <span className="tag">Express</span>
                    <span className="tag is-primary">JS</span>
                  </div>
                </div>
                <div className="level-item">
                  <div className="tags has-addons">
                    <span className="tag">Handlebars</span>
                    <span className="tag is-primary">JS</span>
                  </div>
                </div>
              </div>
              <p className="is-size-6-touch">Server side rendered site to share travel stories built in Node with ExpressJS.</p>
            </div>
            <div className="level is-mobile">
              <div className="level-item">
                <div>
                  <a type="button" href="https://github.com/maxiblanco/travel-journal" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="fas fa-code-branch" />
                    </span>
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <a disabled type="button" href="#" rel="noreferrer" role="button" target="_blank" className="button">
                    <span className="icon has-text-info">
                      <i className="far fa-eye" />
                    </span>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCards;
