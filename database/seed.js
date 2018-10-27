// var db = require('./index.js');
var insertToDB = require('./index.js');
// var getFromDB = require('./index.js');

// HELPER FUNCTIONS
var descriptionGenerator = () => {
  var adj = ['Cozy ', 'Lovely ', 'Nestled ', 'Charming ', 'Sunny ', 'Coveted ', 'Desirable '];
  var space = ['retreat ', 'sanctuary ', 'piece of heaven ', 'views ', 'zen ', 'lively ', 'shared apartment ' ];
  var loc = ['heart of ', 'downtown ', 'coastal ', 'beautiful '];
  var city = ['San Francisco', 'New York', 'Bay Area', 'Silicon Valley', 'Community', 'Los Angeles'];

  return  (adj[Math.floor(Math.random() * adj.length)] + space[Math.floor(Math.random() * space.length)] + 'in ' + loc[Math.floor(Math.random() * loc.length)] + city[Math.floor(Math.random() * city.length)])
}

var randomUrlGenerator = () => {
  var randomNumber = Math.ceil(Math.random() * 21);
  return (`https://s3-us-west-1.amazonaws.com/wanderlodge/${randomNumber}.jpg`)
}

// COLLECTION OF 100 RANDOMLY GENEREATED IMAGES AND DESCRIPTIONS 
var func = () => {
  var collection = [];
  for (var i = 1; i < 101; i++) {
    // GENERATE RANDOM AMOUNT OF PICTURES
    var randomAmount = Math.ceil(Math.random() * 8);
    for (var e = 0; e < randomAmount; e++) {
      var image = {
        propertyID: i,
        url: randomUrlGenerator(),
        description: descriptionGenerator()
      }
      collection.push(image);
    }
  }
  console.log(collection);
  return collection;
}

// INVOKE AND INSERT INTO DB
func().forEach((item) => insertToDB(item, (err) => {
  if (err) {
    console.log(err);
  }
}));