import { Component } from '@angular/core';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Hero } from '../hero/hero';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Navbar } from '../../layout/navbar/navbar/navbar';
import { Footer } from '../../layout/footer/footer/footer';

@Component({
  selector: 'app-portfolio',
  imports: [About,Experience,Hero,Skills,Projects,Navbar,Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
