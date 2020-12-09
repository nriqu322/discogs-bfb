import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentCard, setModal } from '../actions/index';
// import { Modal, Button } from 'antd';
// import 'antd/dist/antd.css';

const ArtistCard = props => {
  const { id, thumb, title, year, card } = props;
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const currentCard = useSelector(state => state.artistList.currentCard);
  // const modal = useSelector(state => state.setModal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentCard(card));
    dispatch(setModal(true));
  }

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      <div className="card-element" onClick={handleClick}>
        <div className="card-container" id={id}>
          <img className="card-image" src={thumb} alt="thumbnail" />
          <div className="card-title">{title}</div>
          <div className="card-year">{year}</div>
        </div>
      </div>
      {/* <Modal
        title="Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
        width='75%'
      >
        {currentCard !== undefined || currentCard !== 'undefined' ? (
          <div className="container-details">
            <img src={currentCard.cover_image} alt="artist-cover" />
            <p>Title: {currentCard.title}</p>
            <p>Lable: {currentCard.lable}</p>
            <p>Country: {currentCard.country}</p>
            <p>Style: {currentCard.style}</p>
          </div>
        ) : <div></div>
        }
      </Modal> */}
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
