import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';

register();

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class DetailPage implements OnInit {
@ViewChild ('swiper')
swiperRef: ElementRef | undefined;
swiper?: Swiper;
  constructor() { }

  ngOnInit() {
  }

  goNext(){
    this.swiper?.slideNext();
  }
  goPrevious(){
    this.swiper?.slidePrev();
  }
}
