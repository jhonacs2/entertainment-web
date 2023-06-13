import {Component, Input} from '@angular/core';
import {MovieDetails} from '../../interfaces/movie-details.interface';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent {
  @Input() public movieDetails!: MovieDetails;
}
