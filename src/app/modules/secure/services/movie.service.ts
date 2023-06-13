import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {MovieDetails} from '../interfaces/movie-details.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {

  private readonly BASE_PATH = '';

  constructor(private _httpClient: HttpClient) {
  }

  public getTrendingMovies(): Observable<MovieDetails[]> {
    return this._httpClient.get<MovieDetails[]>('/assets/data/data.json')
      .pipe(map(value => value.filter(value => value.isTrending)));
  }

  public getAllMovie(): Observable<MovieDetails[]> {
    return this._httpClient.get<MovieDetails[]>('/assets/data/data.json');
  }
}
