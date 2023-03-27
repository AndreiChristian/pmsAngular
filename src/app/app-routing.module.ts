import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomTypesComponent } from './room-types/room-types.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path:"", component: HomeComponent },
  { path: 'guests', component: GuestComponent },
  { path: 'reservations', component: ReservationsComponent },
  {path:"rooms",component:RoomsComponent},
  {path:"roomtypes",component:RoomTypesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
