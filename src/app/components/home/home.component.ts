//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;
 
/*
  constructor(private http:HttpClient) {
    console.log('constructor del Home');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any) => {
      console.log(data);
      this.paises = data;
    })
   }*/

   constructor(private spotify:SpotifyService){
     this.mensajeError = '';
    this.error = false;
    this.loading = true;
    spotify.getNewReleases().subscribe((data:any) => {
    this.nuevasCanciones = data;
    this.loading=false;
    }, (errorService) => {
      console.log(errorService.error.error.message);
      this.loading =false;
      this.error=true;
      this.mensajeError = errorService.error.error.message;
    });
   }

  ngOnInit(): void {
  }



  


}
