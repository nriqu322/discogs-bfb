import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList } from '../actions';
import { toast } from 'react-toastify';
import discogsApi from '../services/discogsApi';
import ArtistCard from '../components/ArtistCard';

const ArtistList = () => {
  const dispatch = useDispatch();
  const artistList = useSelector(state => state.artistList.artistList)

  console.log(artistList);

  useEffect(() => {
    if (artistList && artistList.length === 0 ) {
      discogsApi('nirvana', 'nevermind')
        .then(response => {
          if (response.error) {
            toast.error(response.error);
          } else {
            dispatch(getArtistList(response.results))
          }
        })
    }
  }, [artistList, dispatch])

  // console.log(artistList)

  return (
    <div>
      {artistList && artistList.length !== 0 ? (
        artistList.map(card => (
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