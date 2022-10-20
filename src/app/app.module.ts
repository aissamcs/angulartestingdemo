import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UnittestComponent } from './exercices/unittest/unittest.component';
import { IntegrationtestComponent } from './exercices/integrationtest/integrationtest.component';
import { HomeComponent } from './home/home.component'; // CLI imports AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    UnittestComponent,
    IntegrationtestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
