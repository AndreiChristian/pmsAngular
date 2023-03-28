import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { RoomType } from 'src/app/models/room-type.model';
import { RoomTypesService } from '../room-types.service';
@Component({
  selector: 'app-room-types-item',
  templateUrl: './room-types-item.component.html',
  styleUrls: ['./room-types-item.component.scss'],
})
export class RoomTypesItemComponent implements OnInit {
  roomType: RoomType;
  id: number;

  constructor(
    private roomTypesService: RoomTypesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.roomType = this.roomTypesService.getRoomTypeById(this.id);
    console.log(this.roomType);
  }

  amenityInput: string = '';

  onAddAmenity() {
    this.roomType.amenities.push(this.amenityInput);
  }
}
