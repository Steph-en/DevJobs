import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobLocation } from '../interface/job-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-locations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-locations.component.html',
  styleUrl: './job-locations.component.css'
})
export class JobLocationsComponent {
  @Input() jobLocation!:JobLocation;
}
