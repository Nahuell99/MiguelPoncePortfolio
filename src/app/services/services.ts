import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-services',
  imports: [Icon, Reveal],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly site = site;
}
