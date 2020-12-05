import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentCard } from '../actions/index';

const ArtistCard = props => {
  const { id, thumb, title, year, card, setCurrentCard } = props;

  const handleClick = () => {
    setCurrentCard(card)
  }

  return (
    <Link className="card-link" to={`details/${id}`} onClick={handleClick}>
      <div className="card-element">
        <div className="card-container" id={id}>
          <img className="card-image" src={thumb} alt="thumbnail" />
          <div className="card-title">{title}</div>
          <div className="card-year">{year}</div>
        </div>
      </div>
    </Link>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentCard: currentCard => {
    dispatch(setCurrentCard(currentCard))
  },
});

ArtistCard.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  setCurrentCard: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(ArtistCard);