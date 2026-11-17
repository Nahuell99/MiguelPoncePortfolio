import { Component } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly site = site;
}
