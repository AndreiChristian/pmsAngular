import { Component, OnInit } from '@angular/core';
import { RoomType } from 'src/app/models/room-type.model';
import { RoomTypesService } from '../room-types.service';
@Component({
  selector: 'app-room-types-item',
  templateUrl: './room-types-item.component.html',
  styleUrls: ['./room-types-item.component.scss'],
})
export class RoomTypesItemComponent implements OnInit {
  id: number = 1;
  roomType: RoomType;

  constructor(private roomTypesService: RoomTypesService) {}

  ngOnInit(): void {
    this.roomType = this.roomTypesService.getRoomTypeById(this.id);
    console.log(this.roomType)
  }
}
