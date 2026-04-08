import { Component } from '@angular/core'
import { DataService } from './data.server'
import { Item } from './data.server'
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [RouterLink, CommonModule],
  template: `
    <h2>Item List</h2>
    <div class="row">
      <div class="message">{{message}}</div>
    </div>
    <div id="list">
      <div class="item-card" *ngFor="let item of items">
        Item ID: {{item.itemId}} <br>
        Item Name: {{item.name}} <br>
        Category: {{item.category}} <br>
        Quantity: {{item.quantity}} <br>
        Price: {{item.price}} <br>
        Supplier Name: {{item.supplierName}} <br>
        Stock Status: {{item.stockStatus}} <br>
        Popular Item: {{item.popularItem?"Yes":"No"}} <br>
        Comment: {{item.comment||"-"}} <br>
        <button [routerLink]="'/edit/'+item.itemId">Edit</button>
        <button (click)="deleteItem(item)">Delete</button>
        <button *ngIf="!item.popularItem" (click)="setItemPopular(item)">Popular</button>
      </div>
    </div>
  `,
})
export class ListComponent {
  items: Item[] = [];
  message: string = '';

  constructor(private dataService: DataService) {
    this.items = this.dataService.getAll();
  }

  // delete item confirm
  deleteItem(item: Item): void {
    if (confirm(`Do you want to delete ${item.name}?`)) {
      this.dataService.remove(item.itemId);
      this.message = "Delete the item from database!";
      this.items = this.dataService.getAll();
    }
  }

  // set item to popular
  setItemPopular(item: Item): void {
    item.popularItem = true;
    this.dataService.update(item);
    this.message = "Set the item to popular!";
    this.items = this.dataService.getAll();
  }
}
