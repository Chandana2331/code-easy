import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPage,
    CalendarModalComponent,
    // Removed StaffDetailsPage from here
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule // Add CommonModule here
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
