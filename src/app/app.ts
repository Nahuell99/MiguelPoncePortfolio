import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Plans } from './plans/plans';
import { CtaBand } from './cta-band/cta-band';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, About, Plans, CtaBand, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
