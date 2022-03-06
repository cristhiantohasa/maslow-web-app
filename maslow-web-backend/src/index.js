'use strict'

var mongoose = require( 'mongoose' );
var port = '3600';
var app = require( './app' );

mongoose.connect( 'mongodb://localhost:27017/maslow' )
    .then( () => {
        console.log( "Conexion establecida con la BDD" );
        app.listen( port, () => {
            console.log( "Conexion establecida con la URL: localhost:3600" )
        } )
    } )
    .catch( err => console.log( err ) );