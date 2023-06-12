import {TestBed} from '@angular/core/testing';

import {MovieService} from './movie.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Category, MovieDetails, Rating} from '../interfaces/movie-details.interface';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    movieService = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should retrieve trending movies', () => {
    const mockMovies: MovieDetails[] = [
      {
        'title': 'Beyond Earth',
        'thumbnail': {
          'trending': {
            'small': './assets/thumbnails/beyond-earth/trending/small.jpg',
            'large': './assets/thumbnails/beyond-earth/trending/large.jpg'
          },
          'regular': {
            'small': './assets/thumbnails/beyond-earth/regular/small.jpg',
            'medium': './assets/thumbnails/beyond-earth/regular/medium.jpg',
            'large': './assets/thumbnails/beyond-earth/regular/large.jpg'
          }
        },
        'year': 2019,
        category: Category.Movie,
        rating: Rating.PG,
        'isBookmarked': false,
        'isTrending': true
      }
    ];
  });
});
