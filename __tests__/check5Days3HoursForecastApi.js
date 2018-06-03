const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Verify weather forecast data can be obtained', function() {

  it(`Weather forecast can be received using city name`, function(){
    return frisby
      .get(`${api.weather}/forecast?q=${data.randomCity.name}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.city.name).toBe(data.randomCity.name);
      });
  });

  it(`Weather forecast can be received using city and country names`, function(){
    return frisby
      .get(`${api.weather}/forecast?q=${data.randomCity.name},${data.randomCity.country}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.city.name).toBe(data.randomCity.name);
        expect(result.json.city.country).toBe(data.randomCity.country);
      });
  });

  it(`Weather forecast can be received using city ID`, function(){
    return frisby
      .get(`${api.weather}/forecast?id=${data.randomCity.id}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.city.name).toBe(data.randomCity.name);
        expect(result.json.city.id).toBe(data.randomCity.id);
      });
  });

  it(`Weather forecast can be received using geographical coordinates`, function(){
    return frisby
      .get(`${api.weather}/forecast?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.city.name).toBe(data.randomCity.name);
      });
  });

  it(`Weather forecast can be received using zipcode`, function(){
    return frisby
      .get(`${api.weather}/forecast?zip=${data.randomCity.zip},${data.randomCity.country}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.city.name).toBe(data.randomCity.name);
      });
  });
});