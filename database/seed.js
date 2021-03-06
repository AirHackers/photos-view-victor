const Promise = require('bluebird');
const { db, insertToDBAsync } = require('./index.js');

// HELPER FUNCTIONS
const descriptionGenerator = () => {
  const adj = ['Cozy ', 'Lovely ', 'Nestled ', 'Charming ', 'Sunny ', 'Coveted ', 'Desirable '];
  const space = ['retreat ', 'sanctuary ', 'piece of heaven ', 'views ', 'zen ', 'lively ', 'shared apartment '];
  const loc = ['heart of ', 'downtown ', 'coastal ', 'beautiful '];
  const city = ['San Francisco', 'New York', 'Bay Area', 'Silicon Valley', 'Community', 'Los Angeles'];

  return (`${adj[Math.floor(Math.random() * adj.length)]} ${space[Math.floor(Math.random() * space.length)]}in ${loc[Math.floor(Math.random() * loc.length)]} ${city[Math.floor(Math.random() * city.length)]}`);
};

const randomUrlGenerator = () => {
  const randomNumber = Math.ceil(Math.random() * 21);
  return (`https://s3-us-west-1.amazonaws.com/wanderlodge/${randomNumber}.jpg`);
};

// COLLECTION OF 100 RANDOMLY GENEREATED IMAGES AND DESCRIPTIONS
const func = () => {
  const collection = [];
  for (let i = 1; i < 101; i += 1) {
    // GENERATE RANDOM AMOUNT OF PICTURES
    const randomRange = Math.ceil(Math.random() * 16);
    const randomAmount = randomRange + 5;
    for (let e = 0; e < randomAmount; e += 1) {
      const image = {
        propertyID: i,
        url: randomUrlGenerator(),
        description: descriptionGenerator(),
      };
      collection.push(image);
    }
  }
  return collection;
};

const collection = func();

// INSERT MOCK DATA INTO DATABASE ASYNC
const dbInsertion = () => {
  const array = [];
  for (let i = 0; i < collection.length; i += 1) {
    array.push(insertToDBAsync(collection[i]));
  }
  Promise.all(array)
    .then(() => {
      db.end();
    })
    .catch((error) => {
      console.log(error);
    });
};

dbInsertion();
