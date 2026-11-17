import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';

@Component({
  selector: 'app-cta-band',
  imports: [Icon, Reveal],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.css',
})
export class CtaBand {
  readonly site = site;
}
