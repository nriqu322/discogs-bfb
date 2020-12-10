import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentCard, setModal, setTrackList } from '../actions/index';
import { trackListApi } from '../services/discogsApi';
import { toast } from 'react-toastify';

const ArtistCard = props => {
  const { id, thumb, title, year, card } = props;
  const dispatch = useDispatch();
  let trackList = [];

  const handleClick = () => {
    dispatch(setCurrentCard(card));

    if (card.master_url === null) {
      dispatch(setTrackList(['--No Tracklist--']));
      dispatch(setModal(true));
    } else {
      trackListApi(card.master_url)
        .then(response => {
          if (response.error) {
            toast.error(response.error);
          } else {
            response.tracklist.map(track => trackList.push(track.title));
            dispatch(setTrackList(trackList));
            dispatch(setModal(true));
          }
        })
    }
  }

  return (
    <>
      <div className="card-element" onClick={handleClick}>
        <div className="card-container" id={id}>
          <img className="card-image" src={thumb} alt="thumbnail" />
          <div className="card-title">{title}</div>
          <div className="card-year">{year}</div>
        </div>
      </div>
    </>
  )
};

ArtistCard.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  year: PropTypes.string,
}

export default ArtistCard;
