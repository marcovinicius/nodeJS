var app = require('./App/config/server');

var rotaHome = require('./App/routes/home')(app);
var rotaHome = require('./App/routes/front')(app);
var rotaHome = require('./App/routes/back')(app);

app.listen(3000, function() {;
    console.log("Servidor rodando com Express!");
});