import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobLocation } from '../interface/job-location';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private jobLocationList = '/assets/data.json';
  
  constructor(private http: HttpClient) { }

  public getAllJoblocations(): Observable<JobLocation[]> {
    return this.http.get<JobLocation[]>(this.jobLocationList);
  }
  
  public getJobById(id: number): Observable<JobLocation | undefined> {
    return this.getAllJoblocations().pipe(
      map((jobLocation: JobLocation[]) => jobLocation.find(jobLocation => jobLocation.id === id))
    );
  }

  // public searchJobs(title: string, location: string, isFullTime: boolean): Observable<JobLocation[]> {
  //   return this.getAllJoblocations().pipe(
  //     map((jobs) =>
  //       jobs.filter((job) => {
  //         // Normalize search terms to lowercase and remove whitespace
  //         const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '');
  //         const normalizedTitle = normalize(title);
  //         const normalizedLocation = normalize(location);
  
  //         const jobPosition = normalize(job.position);
  //         const jobCompany = normalize(job.company);
  //         const jobLocation = normalize(job.location);
  
  //         // Check if the job matches the title (position or company)
  //         const titleMatch = normalizedTitle
  //           ? jobPosition.includes(normalizedTitle) || jobCompany.includes(normalizedTitle)
  //           : true;
  
  //         // Check if the job matches the location
  //         const locationMatch = normalizedLocation
  //           ? jobLocation.includes(normalizedLocation)
  //           : true;
  
  //         // Check if the job matches the contract type (if isFullTime is true)
  //         const isFullTimeMatch = isFullTime
  //           ? job.contract === 'Full Time'
  //           : true;
  
  //         return titleMatch && locationMatch && isFullTimeMatch;
  //       })
  //     )
  //   );
  // }
}
