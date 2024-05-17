import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, HomeComponent]
})
export class AppComponent {
  title = 'dev-jobs';

  constructor() {}

  toggle() {
    const theme = document.documentElement.classList.toggle('dark');

    // Store the theme state in local storage
    localStorage.setItem("theme", theme ? 'dark' : 'light');
  }
}