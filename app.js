 var express = require('express');
 var mysql = require('mysql');

 var app =  express();
 const puerto = process.env.PUERTO;
 app.listen('3000', function(){
    app.get( puerto, function(res, resq){
        res.send('Ruta de inicio');
    })
        console.log("Servidor Ok en el puerto"+puerto);
 })