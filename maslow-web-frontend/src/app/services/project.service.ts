import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from '../models/project';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public url: string;
    
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  readProjects(): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.get( this.url + 'read-projects', {headers: headers} );
  }

  readProject( name: String ): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type','application/json' );
    return this._http.get( this.url+'read-project/'+name, {headers: headers} );
  }

  createProject( project: Project ): Observable<any> {
    let params = JSON.stringify( project );
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.post( this.url + 'create-project', params, {headers: headers} );
  }

  updateProject( project: Project ): Observable<any> {
      let params = JSON.stringify( project );
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.put( this.url+'update-project/'+project._id, params, {headers: headers} );
  }

  deleteProduct( name: String ): Observable<any> {
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.delete( this.url+'delete-project/'+name, {headers: headers} );
  }

}