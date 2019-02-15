const express = require('express'),
      path    = require('path'),
      session = require('express-session');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'country-list-client/public')));


// Set up session
app.use(session({
  secret: 'This is a secret'
}));


// Increment a country's click count
app.post('/api/addClick/:countryId', (req, res) => {
  const countryId = req.params.countryId;

  // Create click session if necessary
  if (!req.session.clicks) {
    req.session.clicks = {};
  }

  if (!req.session.clicks[countryId]) {
    req.session.clicks[countryId] = 1;
  } else {
    req.session.clicks[countryId]++;
  }

  res.send({
    country: countryId,
    clicks: req.session.clicks[countryId]
  });
});


// Reset all click counts
app.post('/api/resetClicks', (req, res) => {
  req.session.clicks = {};
  res.end();
});


// Return all countries' click counts
app.get('/api/getClicks', (req, res) => {
  // Create click session if necessary
  if (!req.session.clicks) {
    req.session.clicks = {};
  }

  res.send({
    clicks: req.session.clicks
  });
});


// Return a single country's click count
app.get('/api/getClicks/:countryId', (req, res) => {
  const countryId = req.params.countryId;

  // Create click session if necessary
  if (!req.session.clicks) {
    req.session.clicks = {};
  }

  res.send({
    country: countryId,
    clicks: req.session.clicks[countryId] || 0
  });
});


// Other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/country-list-client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App listening on port ' + port);