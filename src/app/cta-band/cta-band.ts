import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-cta-band',
  imports: [Icon],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.css',
})
export class CtaBand {
  readonly site = site;
}
