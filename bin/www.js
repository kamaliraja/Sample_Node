const http = require('http');
const config = require('config');

const app = require('../app');

// require('express'),
// require('../app')

const port = config.get('serverPort') || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server listening on ${port}`);
});