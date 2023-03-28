import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationBookingDetailsComponent } from './new-reservation-booking-details.component';

describe('NewReservationBookingDetailsComponent', () => {
  let component: NewReservationBookingDetailsComponent;
  let fixture: ComponentFixture<NewReservationBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReservationBookingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReservationBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
