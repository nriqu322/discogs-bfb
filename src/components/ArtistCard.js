import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentCard, setModal, settrackList } from '../actions/index';
import { trackListApi } from '../services/discogsApi';
import { toast } from 'react-toastify';
import { Row, Col } from 'antd';

const style = { background: '#0092ff', margin: '8px 0', width: '200px', heigth: '250px' };
const styleImg = { heigth: '180px' } 

const ArtistCard = props => {
  const { id, thumb, title, year, card } = props;
  const dispatch = useDispatch();
  let trackList = [];

  const handleClick = () => {
    dispatch(setCurrentCard(card));

    if (card.master_url === null) {
      dispatch(settrackList(['--No Tracklist--']));
      dispatch(setModal(true));
    } else {
      trackListApi(card.master_url)
      .then(response => {
        if (response.error) {
          toast.error(response.error);
        } else {
          response.tracklist.map(track => trackList.push(track.title));
          dispatch(settrackList(trackList));
          dispatch(setModal(true));
        }
      })
    }
  }

  return (
    <Col className="gutter-row card-element" style={style} span={4} onClick={handleClick}>
      {/* <div className="card-container" id={id}> */}
        <img style={styleImg} className="card-image" src={thumb} alt="thumbnail" />
        <div className="card-title">{title}</div>
        <div className="card-year">{year}</div>
      {/* </div> */}
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
