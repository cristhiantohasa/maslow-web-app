import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ProjectService } from '../../services/project.service';
import { LoadService } from '../../services/load.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService, LoadService]
})
export class ProjectComponent extends CardsComponent implements OnInit{

  public project: Project;

  constructor(
    private _projectServices: ProjectService,
    private _loadServices: LoadService
  ) {
    super(_projectServices, _loadServices)
    this.project = new Project( null, null, null, null, null, null, null, null ,null, null );
  }


  

}
