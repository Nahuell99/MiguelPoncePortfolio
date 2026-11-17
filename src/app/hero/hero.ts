import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly site = site;
}
