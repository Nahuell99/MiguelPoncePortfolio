import { Component } from '@angular/core';
import { site } from '../site';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly site = site;
}
