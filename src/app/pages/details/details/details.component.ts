import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app.service';
import { JobLocation } from '../../../interface/job-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  jobLocation: JobLocation | undefined;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    const jobLocationId = Number(this.route.snapshot.params['id']);
    this.appService.getJobById(jobLocationId).subscribe((jobLocation: JobLocation | undefined) => {
      this.jobLocation = jobLocation;
    });
  }
}
