import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { DatabaseService } from './database.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';
import { EventLogComponent } from './event-log/event-log.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    SoccerFieldComponent,
    EventLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    },
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
