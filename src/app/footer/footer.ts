import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-footer',
  imports: [Icon, Reveal],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly site = site;
}
