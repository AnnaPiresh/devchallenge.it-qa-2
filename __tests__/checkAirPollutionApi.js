const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Verify Carbon Pollution can be obtained', function() {
  const roundedLat = parseInt(data.randomCity.coord.lat);
  const roundedLon = parseInt(data.randomCity.coord.lon);

  it(`Carbon pollution can be received using geographical coordinates`, function () {
    return frisby
      .get(`${api.pollution}/${roundedLat},${roundedLon}/current.json?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8');
  });
});