 var express = require('express');
 var mysql = require('mysql');


 var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tienda_onlie'
 });

 conexion.connect(function(error){
    if(error){
        
    }
 })

 var app =  express();
 app.get( puerto, function(res, resq){
     res.send('Ruta de inicio');
 })

const puerto = process.env.PUERTO || 3000;
 app.listen('3000', function(){
    console.log("Servidor Ok en el puerto"+puerto);
 })