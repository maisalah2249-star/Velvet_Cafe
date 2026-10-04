import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { Menu } from '../menu/menu';
import { About } from '../about/about';
import { Reviews } from '../reviews/reviews';
import { Faq } from '../faq/faq';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Hero,
    Menu,
    About,
    Reviews,
    Faq,
    Contact,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}