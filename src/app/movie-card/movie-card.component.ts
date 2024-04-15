import { Component, Input, inject, WritableSignal, signal, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonBadge, IonList } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonBadge,
  IonList
  ]

})
export class MovieCardComponent{
  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public dummyArray = new Array(5);
  
  public movie: WritableSignal<MovieResult | null> = signal(null);
  

  @Input() item!: MovieResult;
  

  constructor() { }

  OnInit() {
    
  }

  setId(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie);
      
      this.movie.set(movie);
    });
  }


}
