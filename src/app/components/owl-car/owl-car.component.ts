import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-car',
  templateUrl: './owl-car.component.html',
  styleUrls: ['./owl-car.component.scss']
})
export class OwlCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'infoBox-UI';

  customOptions: OwlOptions = {
    margin: 10,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    nav: true,
    items: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  infos = [
    {
      imageLink: '../assets/images/image1.jpg',
      title: 'My Item 101',
      description: 'This is a description of 101'
    },
    {
      imageLink: '../assets/images/image2.jpg',
      title: 'My Item 102',
      description: 'This is a description of 102'
    },
    {
      imageLink: '../assets/images/image3.jpg',
      title: 'My Item 103',
      description: 'This is a description of 103'
    }
  ];

}
