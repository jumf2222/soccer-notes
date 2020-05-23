import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatabaseService, SoccerEvent } from '../database.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'quadrant', 'value', 'timestamp'];
  dataSource = new MatTableDataSource<SoccerEvent>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.database.logSubject.subscribe(data => { this.dataSource.data = data; });
  }

  dateToString(timestamp: number) {
    let date = new Date(timestamp);
    return `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() < 12 ? "AM" : "PM"}`;
  }

  valueToName(value: number) {
    return value >= 0 ? "Good" : "Bad";
  }

  constructor(public database: DatabaseService) { }

}