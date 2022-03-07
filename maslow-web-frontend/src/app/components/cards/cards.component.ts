import { Component, OnInit } from '@angular/core';
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

  public url: string;
  public projects: Project[];

  constructor(
    private _projectService: ProjectService,
    private _loadService: LoadService
  ) {
    this.url = Global.url;
    this.projects = [];
  }

  ngOnInit(): void {
    this.readProjects();
  }

  readProjects() {
    this._projectService.readProjects().subscribe(
      response => {
        if( response.projects ) {
          this.projects = response.projects
          console.log(this.projects)
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

}
