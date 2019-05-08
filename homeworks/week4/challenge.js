const rp = require('request-promise');

let dataLen = 200;
const pageSize = 100;
function targetGameStream(gameID, after = '') {
  if (dataLen === 0) return;
  const options = {
    method: 'GET',
    url: `https://api.twitch.tv/helix/streams?game_id=${gameID}&first=${pageSize}&after=${after}`,
    headers: {
      'Client-ID': 'o4wikm1gn68xv1hebvlspa6hurgx5s',
    },
  };
  rp(options)
    .then((body) => {
      const result = JSON.parse(body);
      const afterStr = result.pagination.cursor;
      result.data.forEach((item) => {
        console.log(`${item.id} ${item.title}`);
      });
      dataLen -= result.data.length;
      targetGameStream(gameID, afterStr);
    });
}

function searchGame(game = 'League of Legends') {
  const options = {
    method: 'GET',
    url: `https://api.twitch.tv/helix/games?name=${game}`,
    headers: {
      'Client-ID': 'o4wikm1gn68xv1hebvlspa6hurgx5s',
    },
  };
  rp(options)
    .then((body) => {
      const gameID = JSON.parse(body).data[0].id;
      targetGameStream(gameID);
    });
}

searchGame();
