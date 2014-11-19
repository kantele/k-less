var derby = require('k-client');
var app = module.exports = derby.createApp('less-example', __filename);

app.serverUse(module, 'derby-jade');
app.serverUse(module, 'k-less');

app.loadViews(__dirname);
app.loadStyles(__dirname);

app.get('/', function(page, model) {
  page.render();
});