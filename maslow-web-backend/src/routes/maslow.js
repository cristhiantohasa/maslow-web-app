'use strict'

var express = require( 'express' );
var multipart = require( 'connect-multiparty' );
var router = express.Router();
var multiPartMiddleware = multipart( {uploadDir:'./src/uploads'} );
var MaslowController = require( '../controllers/maslow' );

router.get( '/read-home', MaslowController.home );

router.post( '/create-project', MaslowController.createProject );
router.get( '/read-projects', MaslowController.readProjects );
router.get( '/read-project/:name', MaslowController.readProject );
router.put( '/update-project/:id', MaslowController.updateProject );
router.delete( '/delete-project/:name', MaslowController.deleteProject );

router.post( '/upload-image/:id', multiPartMiddleware, MaslowController.uploadImage );
router.get( '/read-image/:image', MaslowController.readImage );

router.post( '/create-architect', MaslowController.createArchitect );
router.get( '/read-architects', MaslowController.readArchitects );
router.get( '/read-architect/:name', MaslowController.readArchitect );
router.put( '/update-architect/:id', MaslowController.updateArchitect );
router.delete( '/delete-architect/:name', MaslowController.deleteArchitect );

module.exports = router;