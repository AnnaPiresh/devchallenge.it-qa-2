const APPIDS =
  ['c6beeee0fafc64cecace14e09ed36769',
    '5383a1b8be4e3475ecb22e7f23b84c12',
    '8b45d12483404e45ce3bac14cd5c8339',
    '2f42510ceee1e05feac735e00f7f2a0f',
    '9a528995d9d363825b32aed4f6c37eda'];

const cities = [
  {"id": 5245497,
    "name": "Berlin",
    "country": "US",
    "zip": "10115",
    "coord": {
      "lon": -88.943451,
      "lat": 43.96804
    }
  },
  {"id": 3369157,
    "name": "Cape Town",
    "country": "ZA",
    "zip": "7400",
    "coord": {
      "lon": 18.42322,
      "lat": -33.925838
    }
  },
  {"id": 2968815,
    "name": "Paris",
    "country": "FR",
    "zip": "75000",
    "coord": {
      "lon": 2.3486,
      "lat": 48.853401
    }
  },
  {"id": 7839805,
    "name": "Melbourne",
    "country": "AU",
    "zip": "3000",
    "coord": {
      "lon": 144.944214,
      "lat": -37.813061
    }
  },
  {"id": 1850147,
    "name": "Tokyo",
    "country": "JP",
    "zip": "100-0001",
    "coord": {
      "lon": 139.691711,
      "lat": 35.689499
    }
  }
];

const trigger = {
  "time_period":{
    "start":{
      "expression":"after",
      "amount":132000000
    },
    "end":{
      "expression":"after",
      "amount":432000000
    }
  },
  "conditions":[
    {
      "name":"temp",
      "expression":"$gt",
      "amount":299
    }
  ],
  "area":[
    {
      "type":"Point",
      "coordinates":[
        53,
        37
      ]
    }
  ]
};

const updatedTrigger = {
  "time_period":{
    "start":{
      "expression":"after",
      "amount":230000000
    },
    "end":{
      "expression":"after",
      "amount":260000000
    }
  },
  "conditions":[
    {
      "name":"wind_direction",
      "expression":"$gt",
      "amount":299
    }
  ],
  "area":[
    {
      "type":"Point",
      "coordinates":[
        53,
        37
      ]
    }
  ]
};

const layers = ['clouds_new', 'precipitation_new', 'pressure_new', 'wind_new', 'temp_new'];

const randomAppId = APPIDS[Math.floor(Math.random() * APPIDS.length)];
const randomCity = cities[Math.floor(Math.random() * cities.length)];
const rectangleZone = `12,32,15,37,10`;
const randomIds = function(){
  return `${cities[Math.floor(Math.random() * cities.length)].id},${cities[Math.floor(Math.random() * cities.length)].id}`;
}();

module.exports = {randomAppId, randomCity, rectangleZone, randomIds, layers, trigger, updatedTrigger};