import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './UI/sidenav/sidenav.component';
import { FooterComponent } from './UI/footer/footer.component';
import { GuestComponent } from './guest/guest.component';
import { GuestTableComponent } from './guest/guest-table/guest-table.component';
import { GuestItemComponent } from './guest/guest-item/guest-item.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomTypesComponent } from './room-types/room-types.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RoomTypesListComponent } from './room-types/room-types-list/room-types-list.component';
import { RoomTypesItemComponent } from './room-types/room-types-item/room-types-item.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsItemComponent } from './rooms/rooms-item/rooms-item.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { FormsModule } from '@angular/forms';
import { NewReservationGuestDetailsComponent } from './new-reservation/new-reservation-guest-details/new-reservation-guest-details.component';
import { NewReservationBookingDetailsComponent } from './new-reservation/new-reservation-booking-details/new-reservation-booking-details.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, FooterComponent, GuestComponent, GuestTableComponent, GuestItemComponent, RoomsComponent, RoomTypesComponent, ReservationsComponent, HomeComponent, InvoicesComponent, LoginComponent, SigninComponent, RoomTypesListComponent, RoomTypesItemComponent, RoomsListComponent, RoomsItemComponent, NewReservationComponent, NewReservationGuestDetailsComponent, NewReservationBookingDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
