import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacasadepapel',
  templateUrl: './lacasadepapel.page.html',
  styleUrls: ['./lacasadepapel.page.scss'],
})
export class LacasadepapelPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
