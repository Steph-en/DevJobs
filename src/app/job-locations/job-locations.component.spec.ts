import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLocationsComponent } from './job-locations.component';

describe('JobLocationsComponent', () => {
  let component: JobLocationsComponent;
  let fixture: ComponentFixture<JobLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
