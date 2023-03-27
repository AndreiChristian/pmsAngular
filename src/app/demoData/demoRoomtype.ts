import { RoomType } from '../models/room-type.model';

export const demoRoomTypes: RoomType[] = [
  new RoomType(
    1,
    'Single',
    1,
    'A cozy room with a single bed.',
    80,
    ['Private bathroom', 'Air conditioning', 'TV'],
    ['1 Single'],
    'Street',
    10
  ),
  new RoomType(
    2,
    'Double',
    2,
    'A comfortable room with a double bed.',
    120,
    ['Private bathroom', 'Air conditioning', 'TV', 'Minibar'],
    ['1 Double'],
    'Street',
    15
  ),
  new RoomType(
    3,
    'Twin',
    2,
    'A spacious room with two single beds.',
    120,
    ['Private bathroom', 'Air conditioning', 'TV', 'Minibar'],
    ['2 Single'],
    'Garden',
    10
  ),
  new RoomType(
    4,
    'Triple',
    3,
    'A large room with one double and one single bed.',
    150,
    ['Private bathroom', 'Air conditioning', 'TV', 'Minibar', 'Balcony'],
    ['1 Double', '1 Single'],
    'Garden',
    5
  ),
  new RoomType(
    5,
    'Suite',
    4,
    'A luxurious suite with a separate living area and bedroom.',
    200,
    [
      'Private bathroom',
      'Air conditioning',
      'TV',
      'Minibar',
      'Balcony',
      'Sofa',
    ],
    ['1 King'],
    'Sea',
    4
  ),
  new RoomType(
    6,
    'Family',
    4,
    'A spacious family room with one double and two single beds.',
    180,
    ['Private bathroom', 'Air conditioning', 'TV', 'Minibar', 'Balcony'],
    ['1 Double', '2 Single'],
    'Garden',
    3
  ),
  new RoomType(
    7,
    'Deluxe Suite',
    4,
    'An opulent suite with a separate living area, bedroom, and private terrace.',
    250,
    [
      'Private bathroom',
      'Air conditioning',
      'TV',
      'Minibar',
      'Balcony',
      'Sofa',
      'Terrace',
    ],
    ['1 King'],
    'Sea',
    2
  ),
];

