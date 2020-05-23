import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-soccer-field',
  templateUrl: './soccer-field.component.html',
  styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent implements OnInit {

  @Output() selectedChange: EventEmitter<number> = new EventEmitter();

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
  }

  selectedChanged(quad: number) {
    this.selectedChange.emit(quad);
  }

}
