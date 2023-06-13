import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';
import {MovieDetails} from '../../interfaces/movie-details.interface';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public allMovies$: Observable<MovieDetails[]>;


  constructor(private _movieService: MovieService) {
    this.allMovies$ = new Observable<MovieDetails[]>();
  }

  ngOnInit(): void {
    this.allMovies$ = this._movieService.getAllMovie();
  }
}
