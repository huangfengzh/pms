import { Component } from '@angular/core'
import { DataService, Item } from './data.server'
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Search Item</h2>
    <div class="row">
      <div class="form-control">
        <input placeholder="Item Name" type="text" [(ngModel)]="sName">
        <button (click)="searchItem()">Search Item</button>
      </div>
    </div>
    <div id="search_result">
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
      </div>
      <div class="item-item" *ngIf="items.length === 0 && searched">
        No Such Item!
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class SearchComponent {
  items: Item[] = [];
  sName: string = '';
  searched = false;

  constructor(private dataService: DataService) {
  }

  // search item by name
  searchItem(): void {
    this.items = this.dataService.search(this.sName);
    this.searched = true;
  }
}
