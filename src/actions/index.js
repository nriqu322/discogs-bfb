const GET_ARTIST_LIST = 'GET_ARTIST_LIST';

const getArtistList = artistList => ({
  type: GET_ARTIST_LIST,
  artistList,
});

export { GET_ARTIST_LIST, getArtistList };
