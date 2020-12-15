import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCard, setModal, setTrackList } from '../actions/index';
import { trackListApi } from '../services/discogsApi';
import { toast } from 'react-toastify';
import {Card, Col } from 'react-bootstrap';

const ArtistCard = props => {
  const { id, thumb, title, year, card } = props;
  const dispatch = useDispatch();
  let trackList = [];

  const currentCard = useSelector(state => state.artistList.currentCard);

  const handleClick = () => {
    if (card !== currentCard) {
      dispatch(setCurrentCard(card));

      if (card.master_url === null) {
        if (trackList[0] !== '--No Tracklist--') {
          dispatch(setTrackList(['--No Tracklist--']));
        }
        dispatch(setModal(true));
      } else {
        if (card !== currentCard) {
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
    } else {
      dispatch(setModal(true));
    }


  }

  return (
    <Col className="card-element mt-3" onClick={handleClick}>
      <Card style={{ width: '12rem' }} className="card-container" id={id}>
        <Card.Img variant="top" src={thumb} alt="thumbnail" style={{ width: '192px', height: '180px'}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{year}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
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
