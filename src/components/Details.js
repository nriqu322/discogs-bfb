import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../actions/index';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'react-bootstrap';

const Details = () => {
  const modal = useSelector(state => state.modal.modal);
  const currentCard = useSelector(state => state.artistList.currentCard);
  const trackList = useSelector(state => state.artistList.trackList);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setModal(false));
  };

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
      width='85%'
    >
      {currentCard === undefined || currentCard === 'undefined' ? <div></div> : (
        <div>
          <Card className="container-details d-flex flex-sm-row">
            <Card.Img className="card-img ml-2" src={currentCard.cover_image} alt="artist-cover" style={{ width: '192px', height: '180px'}} />
            <Card.Body>
              <Card.Text>
                <span className="font-weight-bold">Type: </span>
                <span className="card-detail-desc">{currentCard.type}</span>
              </Card.Text>
              <Card.Text>
                <span className="font-weight-bold">Label: </span>
                {currentCard.label && currentCard.label.map(c => <span className="card-detail-desc">{c}</span>)}
              </Card.Text>
              <Card.Text>
                <span className="font-weight-bold">Format: </span>
                {currentCard.format && currentCard.format.map(c => <span className="card-detail-desc">{c}</span>)}
              </Card.Text>
              <Card.Text>
                <span className="font-weight-bold">Country: </span>
                <span className="card-detail-desc">{currentCard.country}</span>
              </Card.Text>
              <Card.Text><
                span className="font-weight-bold">Genre: </span>
                {currentCard.genre && currentCard.genre.map(c => <span className="card-detail-desc">{c}</span>)}
              </Card.Text>
              <Card.Text>
                <span className="font-weight-bold">Style: </span>
                {currentCard.style && currentCard.style.map(c => <span className="card-detail-desc">{c}</span>)}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="container-tracklist">
            <Card.Body>
              <h3 className="mb-3 font-italic">Tracklist</h3>
              {trackList && trackList.map((track, index) => <p className="font-italic" key={track}>{index + 1}. {track}</p>)}
            </Card.Body>
          </Card>
        </div>
      )
      }
    </Modal>
  );
}

export default Details;