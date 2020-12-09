import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList, setPagination } from '../actions';
import { toast } from 'react-toastify';
import { discogsApi, updateApi } from '../services/discogsApi';
import ArtistCard from '../components/ArtistCard';
import ReactPaginate from 'react-paginate';

const ArtistList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const artistList = useSelector(state => state.artistList.artistList)
  const artist = useSelector(state => state.setParams.artist)
  const track = useSelector(state => state.setParams.track)
  const dataPagination = useSelector(state => state.dataPagination)

  useEffect(() => {
    if (artistList && artistList.length === 0 ) {
      discogsApi('nirvana', 'nevermind')
        .then(response => {
          if (response.error) {
            toast.error(response.error);
          } else {
            console.log(response);
            dispatch(setPagination(response.pagination));
            dispatch(getArtistList(response.results));
          }
        })
    }
  }, [offset, artistList, dispatch])

  const updateList = (artist, track, page) => {
    updateApi(artist, track, page)
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          console.log(page)
          console.log(response.pagination)
          dispatch(getArtistList(response.results))
        }
      })
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)

    updateList(artist, track, selectedPage + 1)
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={dataPagination.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
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
    </div>
  )
}

export default ArtistList;