import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  changeFormItemIndex: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  editingItemParent(itemIndex: number) {
    console.log('parent to child: ' + itemIndex);
    
    this.changeFormItemIndex = itemIndex;
  }
}
