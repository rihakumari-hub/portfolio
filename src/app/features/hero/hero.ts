import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-hero',
  imports: [MatChipsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

contactMe() {
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=rihakumari56@gmail.com',
    '_blank'
  );
}

downloadCV() {
  window.open('assets/cv/resume-riha.pdf', '_blank');
}
}
