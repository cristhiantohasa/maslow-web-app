import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers:[ProjectService]
})
export class ProjectComponent implements OnInit{

  public url:string;
  public project:Project;
  public confirm:boolean;

  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url=Global.url;
    this.project=new Project('','','','','','',222,333,444,'');
    this.confirm=false;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let name=params['name'];
      console.log(name);
      this.readProject(name);
    }
  );
  }

  readProject(name:String){
    this._projectService.readProject(name).subscribe(
      response=>{
        this.project=response.project;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }


}
