const api = {
  baseUrl: 'https://api.discogs.com/database/search?',
  token: 'nGdchFugBWScUGbCVArCHdDLDmVkuilYFNhywdaS',
};

async function discogsApi(artist, track) {
  try {
    const response = await fetch(`${api.baseUrl}token=${api.token}&artist=${artist}&track=${track}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

async function updateApi(artist, track, page) {
  try {
    const response = await fetch(`${api.baseUrl}token=${api.token}&artist=${artist}&track=${track}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

async function trackListApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

export { discogsApi, updateApi, trackListApi };
