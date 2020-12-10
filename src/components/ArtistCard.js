import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentCard, setModal } from '../actions/index';

const ArtistCard = props => {
  const { id, thumb, title, year, card } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentCard(card));
    dispatch(setModal(true));
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
