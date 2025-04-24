import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRequestComponent } from './incident-request.component';

describe('IncidentRequestComponent', () => {
  let component: IncidentRequestComponent;
  let fixture: ComponentFixture<IncidentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
