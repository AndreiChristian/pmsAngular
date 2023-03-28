import { Injectable } from '@angular/core';
import { demoRoomTypes } from '../demoData/demoRoomtype';
import { RoomType } from '../models/room-type.model';

@Injectable({
  providedIn: 'root',
})
export class RoomTypesService {
  roomTypes: RoomType[] = demoRoomTypes;

  getRoomTypeById(id: number) {
    const roomType: RoomType = this.roomTypes.find((r) => r.id === id);
    return roomType;
  }
}
