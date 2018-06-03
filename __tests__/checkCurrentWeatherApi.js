const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Verify current weather data can be obtained', function() {

  it(`Current weather for one location can be received using city name`, function(){
    return frisby
      .get(`${api.weather}/weather?q=${data.randomCity.name}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.name).toBe(data.randomCity.name);
      });
  });

  it(`Current weather for one location can be received using city and country names`, function(){
    return frisby
      .get(`${api.weather}/weather?q=${data.randomCity.name},${data.randomCity.country}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.name).toBe(data.randomCity.name);
      });
  });

  it(`Current weather for one location can be received using city ID`, function(){
    return frisby
      .get(`${api.weather}/weather?id=${data.randomCity.id}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.name).toBe(data.randomCity.name);
        expect(result.json.id).toBe(data.randomCity.id);
      });
  });

  it(`Current weather for one location can be received using geographical coordinates`, function(){
    return frisby
      .get(`${api.weather}/weather?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.name).toBe(data.randomCity.name);
      });
  });

  it(`Current weather for one location can be received using zipcode`, function(){
    return frisby
      .get(`${api.weather}/weather?zip=${data.randomCity.zip},${data.randomCity.country}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.name).toBe(data.randomCity.name);
      });
  });

  it(`Current weather can be found within a rectangle zone`, function(){
    return frisby
      .get(`${api.weather}/box/city?bbox=${data.rectangleZone}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8');
  });

  it(`Current weather can be found for cities in cycle`, function(){
    return frisby
      .get(`${api.weather}/find?lat=${data.randomCity.coord.lat}&lon=${data.randomCity.coord.lon}&cnt=10&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(result.json.count).toBe(10);
      });
  });

  it(`Current weather can be found for several cities by Ids`, function(){
    return frisby
      .get(`${api.weather}/group?id=${data.randomIds}&APPID=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function (result) {
        expect(data.randomIds).toContain(result.json.list[0].id);
        expect(data.randomIds).toContain(result.json.list[1].id);
      });
  });
});