import { Component } from '@angular/core';
import { JobLocationsComponent } from '../job-locations/job-locations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobLocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
isDarkTheme: any;
title: any;
checkInputsAndSearch() {
throw new Error('Method not implemented.');
}
location: any;
isFullTime: any;
searchJobs() {
throw new Error('Method not implemented.');
}
toggleFilterByLocation() {
throw new Error('Method not implemented.');
}
filterByLocation: any;

}
