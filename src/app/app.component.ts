import { Component } from '@angular/core';
import { DatabaseService, SoccerEvent } from './database.service';
import { CategoryOption } from './category-list/category-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Soccer Notes';
  action: SoccerEvent = { category: null, name: null, value: null, quadrant: null, timestamp: null };
  statsOpen: boolean = true;
  recordQuadrant: boolean = true;

  constructor(public database: DatabaseService) {

  }

  quadrantSelected(quad: number) {
    this.action.quadrant = quad;
    this.statsOpen = true;
    this.database.recordAction(this.action);
    this.action = { category: null, name: null, value: null, quadrant: null, timestamp: null };
  }

  statSelected(stat: CategoryOption) {
    this.action.name = stat.name;
    this.action.value = stat.value;
    this.action.category = stat.category;

    if (this.recordQuadrant) {
      this.statsOpen = false;
    } else {
      this.database.recordAction(this.action);
      this.action = { category: null, name: null, value: null, quadrant: null, timestamp: null };
    }
    console.log(this.database.log);
  }
}

// turnover