import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-hero',
  imports: [Icon, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly site = site;
}
