import { Component, Input } from '@angular/core';
import { JobLocation } from '../job-location';

@Component({
  selector: 'app-job-locations',
  standalone: true,
  imports: [],
  templateUrl: './job-locations.component.html',
  styleUrl: './job-locations.component.css'
})
export class JobLocationsComponent {
  @Input() JobLocatio!:JobLocation
}
