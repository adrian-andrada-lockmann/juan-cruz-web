import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent implements OnInit {
  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 200;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  startX: number = 0;
  endX: number = 0;
  isDragging: boolean = false;

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      this.endX = event.touches[0].clientX;
    }
  }

  onTouchEnd() {
    this.isDragging = false;
    this.handleSwipe();
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.isDragging = true;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.endX = event.clientX;
    }
  }

  onMouseUp() {
    this.isDragging = false;
    this.handleSwipe();
  }

  handleSwipe() {
    if (this.startX - this.endX > 50) {
      this.next();
    } else if (this.endX - this.startX > 50) {
      this.previous();
    }
  }
}
