//importando as configurações
var app = require('./config/server');
//parametizar a porta de escuta
app.listen(8080,function () {
  console.log('servidro online');
});
