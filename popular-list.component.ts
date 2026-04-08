import { Component } from '@angular/core'
import { DataService } from './data.server'
import { Item } from './data.server'
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-popular-list',
  imports: [CommonModule],
  template: `
    <h2>Popular Item List</h2>
    <div id="popular_list">
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
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class PopularListComponent {
  items: Item[] = [];
  message: string = '';

  constructor(private dataService: DataService) {
    this.items = this.dataService.getAllPopular();
  }
}
