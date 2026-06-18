import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar/navbar';
import { Portfolio } from './features/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
