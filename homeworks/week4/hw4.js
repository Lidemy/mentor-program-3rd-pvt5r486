// https://dev.twitch.tv/docs/api/reference/#get-streams
const request = require('request');

let result = [];
const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'o4wikm1gn68xv1hebvlspa6hurgx5s',
  },
};
request.get(options, (error, response, body) => {
  result = JSON.parse(body);
  result.data.forEach((item) => {
    console.log(`${item.id} ${item.name}`);
  });
});
