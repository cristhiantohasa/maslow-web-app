import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { LoadService } from '../../services/load.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService, LoadService]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
