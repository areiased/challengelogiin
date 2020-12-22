import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimulatedbService } from '../simulatedb.service';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnChanges {

  itemForm: FormGroup;

  @Input() changeFormItemIndex: number = null;

  constructor(private database: SimulatedbService) { 
    this.itemForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.updateFormGroup(this.changeFormItemIndex);
    this.itemForm.updateValueAndValidity();
  }

  createFormGroup() {
    return new FormGroup({
      itemName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      itemDescription: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])),
      itemPrice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.max(10000),
        Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')
      ])),
      itemStock: new FormControl('', Validators.compose([
        Validators.required,
        Validators.max(10000),
        Validators.pattern('[0-9]*')
      ])),
    })
  }

  updateFormGroup(changeFormItemIndex: number) {
    let el = document.getElementById('itemFormElement');
    el.scrollIntoView({behavior: "smooth", block: "end"});

    this.itemForm.controls['itemName'].setValue(this.database.item[this.changeFormItemIndex].itemName);
    this.itemForm.controls['itemDescription'].setValue(this.database.item[this.changeFormItemIndex].itemDescription);
    this.itemForm.controls['itemPrice'].setValue(this.database.item[this.changeFormItemIndex].itemPrice);
    this.itemForm.controls['itemStock'].setValue(this.database.item[this.changeFormItemIndex].itemStock);
    this.itemForm.updateValueAndValidity();
  }

  createNewItem() {
    if (this.itemForm.valid) {
      this.database.item.push(this.itemForm.value)
      this.clearForm();
    } else {
    }
    this.itemForm.updateValueAndValidity();
  }

  editItem() {
    this.database.item[this.changeFormItemIndex].itemName = this.itemForm.value['itemName'];
    this.database.item[this.changeFormItemIndex].itemDescription = this.itemForm.value['itemDescription'];
    this.database.item[this.changeFormItemIndex].itemPrice = this.itemForm.value['itemPrice'];
    this.database.item[this.changeFormItemIndex].itemStock = this.itemForm.value['itemStock'];
    this.clearForm();
    this.itemForm.updateValueAndValidity();
  }

  clearForm() {
    this.itemForm.reset()
    this.changeFormItemIndex = null;
    this.itemForm.updateValueAndValidity();
  }
}
