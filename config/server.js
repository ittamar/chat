//importar o modulo do framework express
var express = require('express');
//importar o modulo do consign
var consign = require('consign');
//importar o modulo do bady-parser
var bodyParser = require('body-parser');
//importar o módulo do express-validator
var expressValidator = require('express-validator');

//iniciar o objeto do express
var app=express();
//setar as variaveis 'view engine' e 'views' do expressValidator
app.set('view engine','ejs');
app.set('views','./app/views');
//configura os middleware express.static
app.use(express.static('./app/public'));
//configura o middleware body-parser
app.use(bodyParser.urlencoded({extended:true}));
//configurar o middleware express-Validator
app.use(expressValidator());
// Efetuar o autoload das rotas, dos models e dos controllers para o objeto app
consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app);

//exportar o objeto  app
module.exports =app;
