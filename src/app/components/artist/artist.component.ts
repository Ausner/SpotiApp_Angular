import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artista:any = {};
  topTracks:any = {};
  loading:boolean;

  constructor(private activateRoute:ActivatedRoute, private spotifyService : SpotifyService) {
    this.loading = true; 
    this.activateRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    })
   }


   getArtista(id:string){
    this.spotifyService.getInfoArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
   }

   getTopTracks(id:string){
     this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      console.log(this.topTracks);
     })
   }


}
