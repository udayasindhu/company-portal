import { Component, ElementRef, OnInit } from '@angular/core';

import 'vanilla-tilt';
declare var VanillaTilt: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private ele: ElementRef) { }

  ngOnInit(): void {
    const workEle = document.querySelector('.teamwork-tilt');
    const mobileEle = document.querySelector('.mobileapp-tilt');
    const pcEle = document.querySelector('.pc-tilt');
    VanillaTilt.init(workEle);
    VanillaTilt.init(mobileEle);
    VanillaTilt.init(pcEle);
  }

}
