import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Injectable } from '@angular/core';

//Operador map
import {map}  from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = '';

  constructor(private Http:HttpClient) {
    console.log('Servicio Spotify listo para usar');
   }

   getQuery(query:string){

     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAT-KGWBWwlJzHUTSv3OC2IQmftyDAJq2kWnJUEyqb4aigSr6rIZCIdiR4LED3qxtJSo9u_waa3u5rdOhI'
    });

    return this.Http.get(url, {headers});
   }

   getNewReleases(){
     return this.getQuery('browse/new-releases').pipe(map((data:any) => data.albums.items));
   }

   getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any) => data.artists.items));
  }

  getInfoArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data:any) => data.tracks));
  }


}
