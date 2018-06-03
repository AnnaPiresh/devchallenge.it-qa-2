const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Verify weather map layers can be received', function() {

  it(`Weather map for layer '${data.layers[0]}' is available`, function () {
    return frisby
      .get(`${api.map}/${data.layers[0]}/100/${data.randomCity.coord.lat}/${data.randomCity.coord.lon}.png?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'image/png');
  });

  it(`Weather map for layer '${data.layers[1]}' is available`, function () {
    return frisby
      .get(`${api.map}/${data.layers[1]}/100/${data.randomCity.coord.lat}/${data.randomCity.coord.lon}.png?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'image/png');
  });

  it(`Weather map for layer '${data.layers[2]}' is available`, function () {
    return frisby
      .get(`${api.map}/${data.layers[2]}/100/${data.randomCity.coord.lat}/${data.randomCity.coord.lon}.png?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'image/png');
  });

  it(`Weather map for layer '${data.layers[3]}' is available`, function () {
    return frisby
      .get(`${api.map}/${data.layers[3]}/100/${data.randomCity.coord.lat}/${data.randomCity.coord.lon}.png?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'image/png');
  });

  it(`Weather map for layer '${data.layers[4]}' is available`, function () {
    return frisby
      .get(`${api.map}/${data.layers[4]}/100/${data.randomCity.coord.lat}/${data.randomCity.coord.lon}.png?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'image/png');
  });
});