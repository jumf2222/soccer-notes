import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../database.service';

export interface CategoryOption {
  category: string, name: string, value: number
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  selected: number = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  @Output() selectedChange: EventEmitter<CategoryOption> = new EventEmitter();

  constructor(public database: DatabaseService) {
  }

  swipe(eType): void {
    if (eType === this.SWIPE_ACTION.LEFT && this.selected > 0) {
      this.selected--;
    }
    else if (eType === this.SWIPE_ACTION.RIGHT && this.selected < this.database.getCategories().length) {
      this.selected++;
    }
  }

  selectedChanged(category: string, name: string, value: number) {
    this.selectedChange.emit({ category: category, name: name, value: value });
  }

  ngOnInit(): void {
  }

}
