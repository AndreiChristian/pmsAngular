import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypesItemComponent } from './room-types-item.component';

describe('RoomTypesItemComponent', () => {
  let component: RoomTypesItemComponent;
  let fixture: ComponentFixture<RoomTypesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomTypesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomTypesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
