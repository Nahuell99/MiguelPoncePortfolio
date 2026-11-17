import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-about',
  imports: [Icon, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly site = site;
}
