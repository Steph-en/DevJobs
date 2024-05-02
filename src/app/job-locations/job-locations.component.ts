import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobLocation } from '../job-location';

@Component({
  selector: 'app-job-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-locations.component.html',
  styleUrl: './job-locations.component.css'
})
export class JobLocationsComponent {
  @Input() jobLocation!:JobLocation;
}