export class RoomType {
  id: number;
  name: string;
  capacity: number;
  description: string;
  basePrice: number;
  amenities: string[];
  bedConfiguration: string[];
  view: string;
  numberOfRooms: number;

  constructor(
    id: number,
    name: string,
    capacity: number,
    description: string,
    basePrice: number,
    amenities: string[],
    bedConfiguration: string[],
    view: string,
    numberOfRooms: number
  ) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.description = description;
    this.basePrice = basePrice;
    this.amenities = amenities;
    this.bedConfiguration = bedConfiguration;
    this.view = view;
    this.numberOfRooms = numberOfRooms;
  }
}
