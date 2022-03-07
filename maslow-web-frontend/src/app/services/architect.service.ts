import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Architect } from '../models/architect';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchitectService {

  public url: string;
    
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  readArchitects(): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.get( this.url + 'read-architects', {headers: headers} );
  }

  readArchitect( name: String ): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type','application/json' );
    return this._http.get( this.url+'read-architect/'+name, {headers: headers} );
  }

  createArtchitect( product: Architect ): Observable<any> {
    let params = JSON.stringify( product );
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.post( this.url + 'create-architect', params, {headers: headers} );
  }

  updateArchitect( product: Architect ): Observable<any> {
      let params = JSON.stringify( product );
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.put( this.url+'update-architect/'+product._id, params, {headers: headers} );
  }

  deleteArchitect( name: String ): Observable<any> {
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.delete( this.url+'delete-architect/'+name, {headers: headers} );
  }

}
