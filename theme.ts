import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = signal(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.darkMode.set(true);
      document.body.classList.add('dark');
    }
  }

  toggleTheme() {

    this.darkMode.update(value => !value);

    if (this.darkMode()) {

      document.body.classList.add('dark');

      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.remove('dark');

      localStorage.setItem('theme', 'light');

    }
  }
}