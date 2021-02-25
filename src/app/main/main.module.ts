import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SimpleNotificationsModule.forRoot(),
  ],
})
export class MainModule {}
