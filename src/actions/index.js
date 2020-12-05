const GET_ARTIST_LIST = 'GET_ARTIST_LIST';
const SET_CURRENT_CARD = 'SET_CURRENT_CARD';

const getArtistList = artistList => ({
  type: GET_ARTIST_LIST,
  artistList,
});

const setCurrentCard = currentCard => ({
  type: SET_CURRENT_CARD,
  currentCard,
});

export { GET_ARTIST_LIST, SET_CURRENT_CARD, getArtistList, setCurrentCard };
