const api = {
  baseUrl: 'https://api.discogs.com/database/search?',
  token: 'nGdchFugBWScUGbCVArCHdDLDmVkuilYFNhywdaS',
};

async function getArtist(artist, track) {
  try {
    const response = await fetch(`${api.baseUrl}token=${api.token}&artist=${artist}&track=${track}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

export default getArtist;