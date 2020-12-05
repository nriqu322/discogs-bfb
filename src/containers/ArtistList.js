import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArtistList } from '../actions';
import { toast } from 'react-toastify';
import discogsApi from '../services/discogsApi';

const ArtistList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    discogsApi('nirvana', 'nevermind')
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          console.log(response);
          dispatch(getArtistList(response.results))
        }
    })
  })

  return (
    <div>
      Artist List
    </div>
  )
}

export default ArtistList;