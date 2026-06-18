import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-skills',
  imports: [MatExpansionModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  @ViewChild('carousel', { static: false })
  carousel!: ElementRef;

  @ViewChild('toolsCarousel', { static: false })
   toolsCarousel!: ElementRef;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }


/* TOOLS SCROLL */
scrollToolsLeft() {
  this.toolsCarousel.nativeElement.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
}

scrollToolsRight() {
  this.toolsCarousel.nativeElement.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
}
}
