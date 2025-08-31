import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule]
})
export class AppComponent implements OnInit{
  // title = 'dev-jobs';

  constructor() {}

  toggle() {
    const theme = document.documentElement.classList.toggle('dark');

    localStorage.setItem("theme", theme ? 'dark' : 'light');
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  ngOnInit() {
    this.initializeTheme();
  }
}