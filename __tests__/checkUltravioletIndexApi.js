const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Verify UV index of a place can be obtained', function() {

  it(`UV index can be received using geographical coordinates`, function(){
    return frisby
      .get(`${api.weather}/uvi?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.lat).toBe(data.randomCity.coord.lat);
        expect(result.json.lon).toBe(data.randomCity.coord.lon);
      });
  });

  it(`Forecast of UV index can be received using geographical coordinates`, function(){
    return frisby
      .get(`${api.weather}/uvi/forecast?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}&cnt=8&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json[7].lat).toBe(data.randomCity.coord.lat);
        expect(result.json[7].lon).toBe(data.randomCity.coord.lon);
      });
  });

  it(`History of UV pollution can be received using geographical coordinates`, function(){
    return frisby
      .get(`${api.weather}/uvi/history?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}`+
        `&cnt=8&start=1527497450&end=1527843050&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json[0].lat).toBe(data.randomCity.coord.lat);
        expect(result.json[0].lon).toBe(data.randomCity.coord.lon);
      });
  });
});