import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';

import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-sliderapp',
  standalone: true,
  imports: [NgFor],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './sliderapp.component.html',
  styleUrl: './sliderapp.component.css'
})
export class SliderappComponent {
sliderImages = [
  "/assets/img/bancorojo.png",
  "/assets/img/bancorojo2.png",
  "/assets/img/bancorojo3.png",
]
}
