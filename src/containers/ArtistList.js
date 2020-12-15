import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList, setPagination } from '../actions';
import { toast } from 'react-toastify';
import { discogsApi, updateApi } from '../services/discogsApi';
import ArtistCard from '../components/ArtistCard';
import ReactPaginate from 'react-paginate';
import Details from '../components/Details';
import { Container, Row, Spinner } from 'react-bootstrap';

toast.configure();
const ArtistList = () => {
  const dispatch = useDispatch();
  const artistList = useSelector(state => state.artistList.artistList);
  const artist = useSelector(state => state.setParams.artist);
  const track = useSelector(state => state.setParams.track);
  const dataPagination = useSelector(state => state.dataPagination);

  // const currentCard = useSelector(state => state.artistList.currentCard);

  useEffect(() => {
    if (artistList && artistList.length === 0 ) {
      discogsApi('nirvana', 'nevermind')
        .then(response => {
          if (response.error) {
            toast.error(response.error);
          } else {
            dispatch(setPagination(response.pagination));
            dispatch(getArtistList(response.results));
          }
        })
    }
  }, [artistList, dispatch])

  const updateList = (artist, track, page) => {
    updateApi(artist, track, page)
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          dispatch(getArtistList(response.results))
        }
      })
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    updateList(artist, track, selectedPage + 1)
  };

  return (
    <div className="main-content">
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
      <Container>
        <Row className="row-content" xs={1} sm={2} md={3} lg={4} xl={5}>
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
          ))) : <div className="main-load"><Spinner className="load-spinner" animation="grow" variant="dark" /></div>}
        </Row>
      </Container>
      <Details />
    </div>
  )
}

export default ArtistList;
