import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Global } from '../../../services/global';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: any;
  
  public url: string;
  
  constructor(
    private _projectService: ProjectService,
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  deleteProject( projectName: String ) { 
    this._projectService.deleteProject( projectName ).subscribe(
      response => {
        if( response.project ) {
          alert( "Proyecto eliminado con éxito" )
          window.location.reload();
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

}
