import { Component } from '@angular/core';
import { DatabaseService, SoccerAction } from './database.service';
import { StatOption } from './category-list/category-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Soccer Notes';
  action: SoccerAction = { name: null, value: null, quadrant: null, timestamp: null };
  statsOpen: boolean = true;
  recordQuadrant: boolean = true;

  constructor(public database: DatabaseService) {

  }

  quadrantSelected(quad: number) {
    this.action.quadrant = quad;
    this.statsOpen = true;
    this.database.recordAction(this.action);
    this.action = { name: null, value: null, quadrant: null, timestamp: null };
  }

  statSelected(stat: StatOption) {
    this.action.name = stat.name;
    this.action.value = stat.value;

    if (this.recordQuadrant) {
      this.statsOpen = false;
    } else {
      this.database.recordAction(this.action);
      this.action = { name: null, value: null, quadrant: null, timestamp: null };
    }
    console.log(this.database.log);
  }
}

// turnover