import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PartyManagementComponent } from './party-management/party-management.component';
import { PartyService } from './party.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartyManagementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClient,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule // Ensure CommonModule is imported
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
