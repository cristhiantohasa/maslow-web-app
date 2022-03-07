import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { ArchitectService } from '../../services/architect.service';
import { LoadService } from '../../services/load.service';
import { Architect } from '../../models/architect';

@Component({
  selector: 'app-architects',
  templateUrl: './architects.component.html',
  styleUrls: ['./architects.component.css'],
  providers: [ArchitectService, LoadService]
})
export class ArchitectsComponent implements OnInit {

  public url: string;
  public architects: Architect[];

  constructor(
    private _architectService: ArchitectService,
    private _loadService: LoadService
  ) {
    this.url = Global.url;
    this.architects = [];
  }

  ngOnInit(): void {
    this.readProjects();
  }

  readProjects() {
    this._architectService.readArchitects().subscribe(
      response => {
        if( response.architects ) {
          this.architects = response.architects
          console.log(this.architects)
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

}
