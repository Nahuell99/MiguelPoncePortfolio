import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-works',
  imports: [Icon, Reveal],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {
  readonly site = site;
}
