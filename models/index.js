var mongoose = require('mongoose');
//mongoose connect
mongoose.connect('mongodb://localhost/parking', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('open', function(){
	console.log("Conectado ao MongoDB");
});
db.on('error', function(){
	console.log("Erro de conexão!");
});

return db;
