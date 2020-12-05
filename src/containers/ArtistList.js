import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArtistList } from '../actions';
import { toast } from 'react-toastify';
import discogsApi from '../services/discogsApi';
import ArtistCard from '../components/ArtistCard';

const ArtistList = () => {
  const dispatch = useDispatch();
  let [artistListArray, setArtistListArray] = useState([]);

  useEffect(() => {
    discogsApi('nirvana', 'nevermind')
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          console.log(response);
          setArtistListArray(response.results);
          dispatch(getArtistList(response.results))
        }
    })
  }, [dispatch])

  console.log(artistListArray)
  console.log(artistListArray[0])

  return (
    <div>
      {artistListArray && artistListArray.length !== 0 ? (
        artistListArray.map(card => (
          <ArtistCard
            key={card.id}
            id={card.id}
            thumb={card.thumb}
            title={card.title}
            year={card.year}
            card={card}
          />
      ))) : <div>Loading</div>}
    </div>
  )
}

export default ArtistList;