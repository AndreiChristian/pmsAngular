import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationGuestDetailsComponent } from './new-reservation-guest-details.component';

describe('NewReservationGuestDetailsComponent', () => {
  let component: NewReservationGuestDetailsComponent;
  let fixture: ComponentFixture<NewReservationGuestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReservationGuestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReservationGuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
