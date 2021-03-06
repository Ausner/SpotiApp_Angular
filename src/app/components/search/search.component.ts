import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  artists:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading=false;
  }

  

  buscar(termino:string){
    this.loading=true;
    this.spotify.getArtists(termino).subscribe((data:any) => {
      this.artists = data;
      this.loading=false;
    })
  }

}
