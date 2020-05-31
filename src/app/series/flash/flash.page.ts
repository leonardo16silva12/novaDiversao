import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {

   }

  ngOnInit() {
  }

}
