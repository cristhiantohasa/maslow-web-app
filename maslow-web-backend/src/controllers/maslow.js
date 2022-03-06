'use strict'

var Project = require( "../models/projects" );
var Architect = require( "../models/architects" );
var path = require( "path" );
var fs = require( "fs" );

var controller = {

    home:function( req, res ){
        return res.status( 201 ).send(
           "<h1>Contectado</h1>"
        );
    },

    createProject:function( req, res ){
        
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.date = params.date;
        project.architect = params.architect;
        project.sector = params.sector;
        project.type = params.type;
        project.entry = params.entry;
        project.dues = params.dues;
        project.against = params.against;
        
        project.save( ( err, stored ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al guardar el proyecto'} );
            if( !stored ) return res.status( 404 ).send( {message:'No se guardo el proyecto'} );
            return res.status( 200 ).send( {project: stored} );
        } );

    },

    readProjects:function( req, res ){
        Project.find( {} ).sort().exec( ( err, projects ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener los proyecto'} );
            if( !projects ) return res.status( 404 ).send( {message:'No se obtuvo los proyecto'} );
            return res.status( 200 ).send( {projects: projects} );
        })
    },

    readProject:function( req, res ){
        var projectName = req.params.name;
        if( projectName == null ) return res.status( 404 ).send( {message:'El proyecto no existe'} );
        Project.findOne( {name: projectName}, ( err, project ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener el proyecto'+projectName} );
            if( !project ) return res.status( 404 ).send( {message:'El proyecto no existe'+projectName } );
            return res.status( 200 ).send( {project: project} );
        })
    },

    updateProject:function( req, res ){
        var projectId = req.params.id;
        var update = req.body;
        Project.findByIdAndUpdate( projectId, update, {new:true}, ( err, updated ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al actualizar el proyecto'} );
            if( !updated ) return res.status( 404 ).send( {message:'El proyecto no existe'} );
            return res.status( 200 ).send( {project: updated} );
        })
    },

    deleteProject:function( req, res ){
        var projectName = req.params.name;
        Project.findOneAndRemove( {nombre: projectName},( err, removed ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al eliminar el proyecto'} );
            if( !removed ) return res.status( 404 ).send( {message:'El proyecto no existe'} );
            return res.status( 200 ).send( {project: removed} );
        })
    },

    createArchitect:function( req, res ){
        
        var architect = new Architect();
        var params = req.body;

        architect.name = params.name;
        architect.prize = params.prize;
        architect.nationality = params.nationality
        architect.about = params.about;
        architect.projects = params.projects;
        architect.socialMedia = params.socialMedia;
        
        architect.save( ( err, stored ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al guardar el arquitecto'} );
            if( !stored ) return res.status( 404 ).send( {message:'No se guardo el arquitecto'} );
            return res.status( 200 ).send( {architect: stored} );
        } );

    },

    readArchitects:function( req, res ){
        Architect.find( {} ).sort().exec( ( err, architects ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener los arquitecto'} );
            if( !architects ) return res.status( 404 ).send( {message:'No se obtuvo los arquitecto'} );
            return res.status( 200 ).send( {architects: architects} );
        })
    },

    readArchitect:function( req, res ){
        var architectName = req.params.name;
        if( architectName == null ) return res.status( 404 ).send( {message:'El arquitecto no existe'} );
        Architect.findOne( {name: architectName}, ( err, architect ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener el arquitecto'+architectName} );
            if( !architect ) return res.status( 404 ).send( {message:'El arquitecto no existe'+architectName } );
            return res.status( 200 ).send( {architect: architect} );
        })
    },

    updateArchitect:function( req, res ){
        var architectId = req.params.id;
        var update = req.body;
        Architect.findByIdAndUpdate( architectId, update, {new:true}, ( err, updated ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al actualizar el arquitecto'} );
            if( !updated ) return res.status( 404 ).send( {message:'El arquitecto no existe'} );
            return res.status( 200 ).send( {architect: updated} );
        })
    },

    deleteArchitect:function( req, res ){
        var architectName = req.params.name;
        Architect.findOneAndRemove( {nombre: architectName},( err, removed ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al eliminar el arquitecto'} );
            if( !removed ) return res.status( 404 ).send( {message:'El arquitecto no existe'} );
            return res.status( 200 ).send( {architect: removed} );
        })
    },

    uploadImage:function( req, res ){

        var projectId = req.params.id;
        var fileName = "No se subio la imagen";
        
        if( req.files ){
            var filePath = req.files.imagen.path;
            var file_split = filePath.split( '\\' );
            var fileName = file_split[2];
            var extSplit = fileName.split( '\.' );
            var fileExt = extSplit[1];
            if( fileExt == 'png' || fileExt == 'jpg' || fileExt=='jpeg' || fileExt == 'gif' ){
                Project.findByIdAndUpdate( projectId, {imagen: fileName}, {new: true}, ( err, updatedProject ) => {
                    if( err ) return res.status( 500 ).send( {message:'No se subio la imagen'} );
                    if( !updatedProject ) return res.status( 404 ).send( {message: 'El proyecto no existe'} );
                    return res.status( 200 ).send( {project: updatedProject} );
                });
            } else {
                fs.unlink( filePath, ( err ) => {
                    return res.status( 200 ).send( {message: 'La extension del archivo no es valida'} );
                } );
            }
        }else{
            return res.status( 200 ).send( {message: fileName} );
        }
    },

    readImage:function( req, res ){
        var file = req.params.imagen;
        var path_file = './src/uploads/' + file;
        fs.exists( path_file, ( exists ) => {
            if( exists ){
                return res.sendFile( path.resolve( path_file ) );
            }else{
                return res.status( 200 ).send( {message:'No existe la imagen'} );
            }
        });
    }

}

module.exports = controller;