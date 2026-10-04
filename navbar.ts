import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  themeService = inject(ThemeService);

  mobileMenu = signal(false);

  toggleMenu() {
    this.mobileMenu.update(value => !value);
  }

  closeMenu() {
    this.mobileMenu.set(false);
  }
}