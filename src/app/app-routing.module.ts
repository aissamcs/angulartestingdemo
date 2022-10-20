import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { IntegrationtestComponent } from './exercices/integrationtest/integrationtest.component';
import { UnittestComponent } from './exercices/unittest/unittest.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unit', component: UnittestComponent },
  { path: 'integration', component: IntegrationtestComponent },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

// configures NgModule imports and exports
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }