import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { redirectToLogin, authenticateUser } from '../../actions/appActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faGlassCheers} from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'


import './Landing.css';

const Landing = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(authenticateUser())
    redirectToLogin();
  };

  return (
    <>
      <section className='hero'>
        <Container>
          <div className="main-message">
            <h3>Listen to the music of upcoming concerts</h3>
            <h1>Show Sampler</h1>
            <p>creates and plays a spotify premium playlist for each show at a location</p>

            <button
              onClick={clickHandler}
              // style={{ marginTop: '2rem', borderRadius: '1em' }}
            >
              Generate Playlists!
            </button>
          </div>
        </Container>
      </section>
      <section className="explore-city">
        <Container>
          <div className="title-heading">
            <h3>explore</h3>
            <h1>upcoming concerts by city</h1>
            <p>sample the from an array of concerts at a location </p>
          </div>
          <div className="activities-grid">
              {/* grid item #1 */}
              <div className="activities-grid-item enhance-travel">
              <FontAwesomeIcon className='icon' icon={faCompass} />
                <h1>Enhance Travel</h1>
                <p>With Show Sampler you can find the right destination for your trip, or the right entertainment for wherever you go.</p>
              </div>  

              {/* grid item #1 */}
              <div className="activities-grid-item find-artists">
              <FontAwesomeIcon className='icon' icon={faSpotify} />
                <h1>Find new Artists</h1>
                <p>Listen to all the musicians that play at your favorite concert, or try out music you've never heard before.</p>
              </div>

              {/* grid item #1 */}
              <div className="activities-grid-item best-shows">
              <FontAwesomeIcon className='icon' icon={faGlassCheers} />
                <h1>Go to the best shows</h1>
                <p>Stay on top of all concerts of that are coming to your area. Once it's safe to do so, go out and have fun!</p>
              </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Landing;
