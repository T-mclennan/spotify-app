import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputForm from '../input/InputForm';
import parseISO from 'date-fns/parseISO';
import { addToken } from '../../actions/appActions';
import { initializeEventData } from '../../actions/playerActions';
import { fetchShows } from '../../api';
import './SearchPage.css';

const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const params = new URLSearchParams(document.location.search.substring(1));
  const auth = params.get('access_token');
  const expiration = params.get('expiration');
  if (auth && expiration) {
    dispatch(addToken({ token: auth, expiration }));
    history.replace('/search');
  }
  const { token } = useSelector((state) => state.appReducer.auth_token);

  //Input of date-picker is Date(), output is String.
  //If we want to re-populate form with past data, we need to parse it.
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    formData.date[0] = parseISO(formData.date[0]);
    formData.date[1] = parseISO(formData.date[1]);
  }

  const clickHandler = async (values) => {
    // TODO: Error handling for bad ticketmaster request:
    const { city } = values;
    localStorage.setItem('formData', JSON.stringify(values));
    const data = await fetchShows(city, token);
    if (data.error) {
      //dispatch error
      console.log(data.error);
    } else {
      dispatch(initializeEventData(data));
      history.push('/playback');
    }
  };

  return (
    <div className='Search-container'>
      <InputForm callback={clickHandler} savedValues={formData} />
      {/* Error display */}
    </div>
  );
};

export default SearchPage;
