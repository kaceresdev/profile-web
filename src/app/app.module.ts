import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './errors/maintenance/maintenance.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MaintenanceComponent, MenuBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
