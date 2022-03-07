'use strict'

 var mongoose = require( 'mongoose' );
 var Schema = mongoose.Schema;

 var ArchitectSchema = Schema( {
     name: String,
     prize: String,
     nationality: String,
     about: String,
     projects: String,
     socialMedia: String,
     image: String
 } );

 module.exports = mongoose.model( 'architects', ArchitectSchema );