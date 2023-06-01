import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() idInput: string = '';
  @Input() label: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
