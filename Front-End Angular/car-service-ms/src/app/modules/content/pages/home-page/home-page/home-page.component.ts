import { Component, OnInit } from '@angular/core';
import {ImageModel} from '@models';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images: ImageModel[] = [
    {url: './assets/images/car-1.jpg'},
    {url: './assets/images/car-3.jpg'},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
