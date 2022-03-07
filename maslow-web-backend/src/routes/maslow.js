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

router.post( '/create-architect', MaslowController.createArchitect );
router.get( '/read-architects', MaslowController.readArchitects );
router.get( '/read-architect/:name', MaslowController.readArchitect );
router.put( '/update-architect/:id', MaslowController.updateArchitect );
router.delete( '/delete-architect/:name', MaslowController.deleteArchitect );

router.post( '/upload-image-project/:id', multiPartMiddleware, MaslowController.uploadImageProject );
router.post( '/upload-image-architect/:id', multiPartMiddleware, MaslowController.uploadImageArchitect );
router.get( '/read-image/:image', MaslowController.readImage );

module.exports = router;