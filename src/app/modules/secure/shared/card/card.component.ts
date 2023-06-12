import {Component, Input} from '@angular/core';
import {MovieDetails} from '../../interfaces/movie-details.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public movieDetails!: MovieDetails;

  constructor() {
  }
}
