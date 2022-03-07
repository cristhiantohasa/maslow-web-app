import { Component, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { LoadService } from '../../services/load.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [ProjectService, LoadService]
})
export class CardsComponent implements OnInit {

  @ViewChild( 'name' ) name: any;

  public url: string;
  public projects: Project[];
  public searchProject: any;

  constructor(
    private _projectService: ProjectService,
    private _loadService: LoadService
  ) {
    this.url = Global.url;
    this.projects = [];
    this.searchProject = new Project( null, null, null, null, null, null, null, null, null, null );
  }

  ngOnInit(): void {
    this.readProjects();
  }

  readProjects() {
    this._projectService.readProjects().subscribe(
      response => {
        if( response.projects ) {
          this.projects = response.projects
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  readProject() {
    this._projectService.readProject( this.name.nativeElement.value ).subscribe(
      response => {
        if( response.project ) {
          this.searchProject = response.project;
          console.log(this.searchProject)
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

}
