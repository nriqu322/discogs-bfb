const GET_ARTIST_LIST = 'GET_ARTIST_LIST';
const SET_CURRENT_CARD = 'SET_CURRENT_CARD';
const SET_PAGINATION = 'SET_PAGINATION'
const SET_ARTIST_PARAM = 'SET_ARTIST_PARAM'
const SET_TRACK_PARAM = 'SET_TRACK_PARAM'
const SET_MODAL = 'SET_MODAL';

const SET_TRACKLIST = 'SET_TRACKLIST';

const getArtistList = artistList => ({
  type: GET_ARTIST_LIST,
  artistList,
});

const setCurrentCard = currentCard => ({
  type: SET_CURRENT_CARD,
  currentCard,
});

const setPagination = dataPagination => ({
  type: SET_PAGINATION,
  dataPagination,
})

const setArtistParam = artist => ({
  type: SET_ARTIST_PARAM,
  artist,
})

const setTrackParam = track => ({
  type: SET_TRACK_PARAM,
  track,
})

const setModal = modal => ({
  type: SET_MODAL,
  modal,
})

const settrackList = trackList => ({
  type: SET_TRACKLIST,
  trackList,
})

export {
  GET_ARTIST_LIST, SET_CURRENT_CARD, SET_PAGINATION, SET_ARTIST_PARAM,
  SET_TRACK_PARAM, SET_MODAL, SET_TRACKLIST,
  getArtistList, setCurrentCard, setPagination, setArtistParam,
  setTrackParam, setModal, settrackList,
};
