const frisby = require('frisby');
const api = require('../test_data/test_variables');
const data = require('../test_data/data');


describe('Triggers for weather alerts can be created and modified', function() {
  const id = [];

  it(`Trigger for weather alert can be created`, function () {
    return frisby
      .post(`${api.alerts}/triggers?appid=${data.randomAppId}`, data.trigger)
      .expect('status', 201)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function(result){
        expect(result.json.conditions.name).toBe(data.trigger.conditions.name);
        expect(result.json.conditions.amount).toBe(data.trigger.conditions.amount);
        expect(result.json.area.coordinates).toBe(data.trigger.area.coordinates);
        return id.push(result.json._id);
      })
  });

  it(`Created weather trigger can be found by id`, function () {
    return frisby
      .get(`${api.alerts}/triggers/${id[0]}?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function(result){
        expect(result.json._id).toBe(id[0]);
        expect(result.json.conditions.name).toBe(data.trigger.conditions.name);
        expect(result.json.conditions.amount).toBe(data.trigger.conditions.amount);
        expect(result.json.area.coordinates).toBe(data.trigger.area.coordinates);
      });
  });

  it(`Triggers created by current user can be obtained`, function () {
    return frisby
      .get(`${api.alerts}/triggers?appid=${data.randomAppId}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8');
  });


  it(`Created trigger can be updated`, function () {
    return frisby
      .put(`${api.alerts}/triggers/${id[0]}?appid=${data.randomAppId}`, data.updatedTrigger)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json; charset=utf-8')
      .then(function(result){
        expect(result.json._id).toBe(id[0]);
        expect(result.json.conditions.name).toBe(data.updatedTrigger.conditions.name);
        expect(result.json.conditions.amount).toBe(data.trigger.conditions.amount);
        expect(result.json.area.coordinates).toBe(data.trigger.area.coordinates);
      });
  });

  it(`Triggers created by current user can be deleted`, function () {
    return frisby
      .delete(`${api.alerts}/triggers/${id[0]}?appid=${data.randomAppId}`)
      .expect('status', 204);
  });
});