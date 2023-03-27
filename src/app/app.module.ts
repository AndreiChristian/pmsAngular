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

@NgModule({
  declarations: [AppComponent, SidenavComponent, FooterComponent, GuestComponent, GuestTableComponent, GuestItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
