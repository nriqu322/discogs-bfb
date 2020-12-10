import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../actions/index';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const Details = props => {
  const { trackList } = props; 
  const modal = useSelector(state => state.modal.modal);
  const currentCard = useSelector(state => state.artistList.currentCard);
  const dispatch = useDispatch();

  // const trackList = useSelector(state => state.artistList.trackList);

  const handleCancel = () => {
    dispatch(setModal(false));
  };

  console.log(trackList);

  return (
    <Modal
      title={currentCard.title}
      visible={modal}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
      ]}
      width='75%'
    >
      {currentCard === undefined || currentCard === 'undefined' ? <div></div> : (
        <div className="container-details">
          <img src={currentCard.cover_image} alt="artist-cover" />
          <p>Tipe: {currentCard.type}</p>
          <p>Label: {currentCard.label}</p>
          <p>Format: {currentCard.format} </p>
          <p>Country: {currentCard.country}</p>
          <p>Style: {currentCard.genre}</p>
          <p>Style: {currentCard.style}</p>
          <br></br>
          <h2>Tracklist</h2>
          {trackList.map((track, index) => <p key={track}>{index + 1}. {track}</p>)}
        </div>
      )
      }
    </Modal>
  );
}

export default Details;