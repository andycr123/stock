 var express = require('express');
 var mysql = require('mysql');

 var app =  express();
 app.get( puerto, function(res, resq){
     res.send('Ruta de inicio');
 })

const puerto = process.env.PUERTO || 3000;
 app.listen('3000', function(){
    console.log("Servidor Ok en el puerto"+puerto);
 })