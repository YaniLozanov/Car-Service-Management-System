import { Component, OnInit } from '@angular/core';
import {ImageModel} from '@models';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images: ImageModel[] = [
    {url: './assets/images/first-image.jpg'},
    {url: './assets/images/second-image.jpg'},
    {url: './assets/images/third-image.jpg'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
