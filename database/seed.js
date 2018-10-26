var db = require('./index.js');
var insertToDB = require('./index.js');
var getFromDB = require('./index.js');

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
var collection = [];

for (var i = 1; i < 101; i++) {
  var property = {
    propertyID: i,
    images: []
  };
  // RANDOM NUMBER OF PICTURES GENERATED 
  var randomAmount = Math.ceil(Math.random() * 8);
  for (var e = 0; e < randomAmount; e++) {
    var image = {
      photo: randomUrlGenerator(),
      description: descriptionGenerator()
    }
    property.images.push(image);
  }
  collection.push(property);
}