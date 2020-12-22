import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEntries } from '../item-entries.Model';
import { SimulatedbService } from '../simulatedb.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() edittingDone;
  
  @Output() edittingItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private database: SimulatedbService) { }

  itemsList = [];

  ngOnInit(): void {
    this.database.addDefaultItems();
    this.itemsList = this.database.item;
  }

  generateRandomItems() {
    this.itemsList = this.database.addDefaultItems();
  }

  deleteItem(itemIndex: number) {
    this.itemsList = this.database.deleteItem(itemIndex);
  }

  editItem(itemIndex: number) {
    this.edittingItem.emit(itemIndex);
  }
}
