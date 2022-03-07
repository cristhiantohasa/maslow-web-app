import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../models/project';
import { Global } from '../../../services/global';
import { ProjectService } from '../../../services/project.service';
import { LoadService } from '../../../services/load.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  public url: string;
  public project: Project;
  public projects: Project[];
  public saveProject: Project;
  public searchProject: any;
  public uploadImage: Array<File>;
  public projectId: string;
  public user: any;
  public status: string;

  @ViewChild( 'image' ) image: any;
  @ViewChild( 'name' ) name: any;

  constructor(
    private _projectService: ProjectService,
    private _loadService: LoadService
  ) {
    this.url = Global.url;
    this.project = new Project( null, null, null, null, null, null, null, null ,null, null );
    this.projects = [];
    this.saveProject = new Project( null, null, null, null, null, null, null, null ,null, null );
    this.searchProject = new Project( null, null, null, null, null, null, null, null ,null, null );
    this.uploadImage = [];
    this.projectId = "";
    this.status = "";
    this.user = ''
  }

  ngOnInit(): void {
  }

  createProject( form: NgForm ) {
    this._projectService.createProject( this.project ).subscribe(
      response => {
        if( response.project ) {
          if( this.saveProject ) {
            this._loadService.maslowRequest( Global.url + "upload-image-project/" + response.project._id, [], this.uploadImage, 'image' )
            .then( ( result: any ) => {
              this.saveProject = result.response;
              this.status = 'success';
              this.projectId = result.project._id;
              form.reset();
              this.image.nativeElement.value = '';
              alert( "Proyecto creado con éxito" )
              window.location.reload();
            } );
          } else {
            this.status = 'failed';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  imageChangeEvent( imageSelected: any ) {
    this.uploadImage = <Array<File>>imageSelected.target.files;
  }


}
