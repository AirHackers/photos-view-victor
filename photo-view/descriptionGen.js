var descriptionGenerator = () => {
  var adj = ['Cozy ', 'Lovely ', 'Nestled ', 'Charming ', 'Sunny ', 'Coveted ', 'Desirable '];
  var space = ['retreat ', 'sactuary ', 'piece of heaven ', 'views ', 'zen ', 'lively ', 'shared apartment ' ];
  var loc = ['heart of ', 'downtown ', 'coastal ', 'beautiful '];
  var city = ['San Francisco', 'New York', 'Bay Area', 'Silicon Valley', 'Community', 'Los Angeles'];

  return  (adj[Math.floor(Math.random() * adj.length)] + space[Math.floor(Math.random() * space.length)] + 'in ' + loc[Math.floor(Math.random() * loc.length)] + city[Math.floor(Math.random() * city.length)])

}

// possible photos for photo generation