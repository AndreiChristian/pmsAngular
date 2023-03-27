import { Injectable } from '@angular/core';
import { demoRoomTypes } from '../demoData/demoRoomtype';

@Injectable({
  providedIn: 'root',
})
export class RoomTypesService {
  roomTypes = demoRoomTypes;
}
