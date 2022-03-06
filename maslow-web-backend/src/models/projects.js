'use strict'

 var mongoose = require( 'mongoose' );
 var Schema = mongoose.Schema;

 var ProjectSchema = Schema( {
     name: String,
     date: String,
     architect: String,
     sector: String,
     type: String,
     entry: Number,
     dues: Number,
     against: Number
 } );

 module.exports = mongoose.model( 'projects', ProjectSchema );