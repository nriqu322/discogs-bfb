import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArtistList, setPagination, setArtistParam, setTrackParam } from '../actions';
import { toast } from 'react-toastify';
import { discogsApi } from '../services/discogsApi';

toast.configure();
const SearchForm = () => {
  const [artist, setArtist] = useState('');
  const [track, setTrack] = useState('');
  // const dataPagination = useSelector(state => state.dataPagination)

  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.id === 'artist-input') {
      setArtist(e.target.value);
    }
    if (e.target.id === 'track-input') {
      setTrack(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    discogsApi(artist, track).then(response => {
      if (response.error) {
        toast.warn('No results found');
      } else {
        console.log(response);
        dispatch(setPagination(response.pagination));
        dispatch(getArtistList(response.results));
        dispatch(setArtistParam({artist}));
        dispatch(setTrackParam({track}));
      }
    })
  }

  return (
    <form className="search-form " onSubmit={handleSubmit}>
      <label htmlFor="artist">
        <input id="artist-input" type="text" onChange={handleChange} placeholder="artist" />
      </label>
      <label htmlFor="track">
        <input id="track-input" type="text" onChange={handleChange} placeholder="track" />
      </label>
      <input className="submit-btn" type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;