import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnInit {
  rattingArray: Array<number> = [];
  @Input() rate!: number;
  constructor() {}
  ngOnInit(): void {
    this.rattingArray = new Array(Math.floor(this.rate)).fill(0);
  }
}
