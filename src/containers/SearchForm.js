import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArtistList, setPagination, setArtistParam, setTrackParam } from '../actions';
import { toast } from 'react-toastify';
import { discogsApi } from '../services/discogsApi';
import { Form, Col, Button } from 'react-bootstrap';

toast.configure();
const SearchForm = () => {
  const [artist, setArtist] = useState('');
  const [track, setTrack] = useState('');

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
    if (artist === '' && track === '') {
      return 
    }
    discogsApi(artist, track).then(response => {
      if (response.error) {
        toast.warn('No results found');
      } else {
        dispatch(setPagination(response.pagination));
        dispatch(getArtistList(response.results));
        dispatch(setArtistParam({artist}));
        dispatch(setTrackParam({track}));
        setTrack('');
        setArtist('');
      }
    })
  }

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control value={artist} id="artist-input" type="text" onChange={handleChange} placeholder="Artist" />
        </Col>
        <Col>
          <Form.Control value={track} id="track-input" type="text" onChange={handleChange} placeholder="Track" />
        </Col>
        <Button variant="primary" type="submit">Search</Button>
      </Form.Row>
    </Form>
  );
}

export default SearchForm;