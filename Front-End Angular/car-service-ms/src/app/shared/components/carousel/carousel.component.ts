import { Component, OnInit, Input} from '@angular/core';
import {ImageModel} from '@models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: ImageModel[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
