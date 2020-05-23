import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Subject } from 'rxjs';

export interface Category {
  name: string;
  stats: Array<string>;
}

export interface SoccerAction {
  name: string;
  value: number;
  quadrant: number;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  logSubject: Subject<Array<SoccerAction>> = new Subject();
  log: Array<SoccerAction> = [];
  categories: Array<Category> = [
    {
      name: "Attacking",
      stats: [
        "Spacing",
        "Play Back",
        "Build",
        "Penetrate"
      ]
    },
    {
      name: "Transition",
      stats: [
        "+ Shape",
        "+ Speed",
        "- Shape",
        "- Speed"
      ]
    },
    {
      name: "Defending",
      stats: [
        "Spacing",
        "First Time Clear",
        "Press",
        "Repress"
      ]
    },
    {
      name: "Chances",
      stats: [
        "Shot",
        "Pass",
        "Cross",
        "Dribble",
      ]
    }
  ];

  quadrants: Array<string> = [
    "lw1",
    "lw2",
    "lw3",
    "lw4",
    "lc1",
    "lc2",
    "lc3",
    "lc4",
    "rc1",
    "rc2",
    "rc3",
    "rc4",
    "rw1",
    "rw2",
    "rw3",
    "rw4",
  ]

  constructor() { }

  getCategories(): Array<Category> {
    return this.categories;
  }

  getQuadrants(): Array<string> {
    return this.quadrants;
  }

  recordAction(action: SoccerAction) {
    action.timestamp = Date.now();
    this.log.push(action);
    this.logSubject.next(this.log);
  }

  download() {
    let blob: Blob = new Blob([JSON.stringify(this.log)], { type: 'text/json; charset=utf-8' });
    saveAs(blob, 'data.json');
  }
}
