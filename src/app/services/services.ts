import { Component, viewChild } from '@angular/core';
import { Service, site } from '../site';
import { Icon } from '../icon/icon';
import { Reveal } from '../reveal';
import { Gallery } from '../gallery/gallery';

@Component({
  selector: 'app-services',
  imports: [Icon, Reveal, Gallery],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly site = site;
  private readonly gallery = viewChild.required(Gallery);

  open(service: Service): void {
    this.gallery().open(service);
  }
}
