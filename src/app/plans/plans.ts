import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-plans',
  imports: [Icon, Reveal],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class Plans {
  readonly site = site;
}
