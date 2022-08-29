import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading';
  isDarkBackground: boolean = false;

  toggleDarkTheme() {
    const htmlDocument = document.documentElement;
    htmlDocument.classList.toggle("dark-theme");
    this.isDarkBackground = !this.isDarkBackground;
  }
}
