import { Injectable } from '@angular/core';
import { ItemEntries } from './item-entries.Model';

@Injectable({
  providedIn: 'root'
})
export class SimulatedbService {

  constructor() { }

  item: ItemEntries[];
  itemNew: ItemEntries[] = [];

  addDefaultItems() {

      this.itemNew = [];
    
      this.itemNew[0] = {
        itemName: "Coffee Bag",
        itemDescription: "Just a nice coffee bag.",
        itemPrice: 2.99,
        itemStock: 3,
      },
      this.itemNew[1] = {
        itemName: "Peanuts Jar",
        itemDescription: "Just a nice peanuts jar.",
        itemPrice: 5.99,
        itemStock: 12,
      },
      this.itemNew[2] = {
        itemName: "Honey Jar",
        itemDescription: "Just a nice honey jar.",
        itemPrice: 2.99,
        itemStock: 3,
      },
      this.itemNew[3] = {
        itemName: "Pepsi Bottle",
        itemDescription: "Not Coca-Cola at all.",
        itemPrice: 6.99,
        itemStock: 4,
      },
      this.itemNew[4] = {
        itemName: "Coca-Cola Bottle",
        itemDescription: "Also not Pepsi.",
        itemPrice: 6.99,
        itemStock: 5,
      },
      this.itemNew[5] = {
        itemName: "Spoon",
        itemDescription: "It's just a spoon.",
        itemPrice: 1.50,
        itemStock: 38,
      }

      this.item = this.itemNew.concat(this.item);
      this.item.pop(); // removes last element from array which is usually empty
      return this.item;
  }
  
  deleteItem(index: number) {
    if (index > -1) {
      this.item.splice(index, 1);
    }
    return this.item;
  }
}
