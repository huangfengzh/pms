import { Component } from '@angular/core'
import { DataService } from './data.server'
import {ActivatedRoute, Router} from '@angular/router'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  template: `
    <div id="add_or_edit_form" class="add-or-edit-wrapper">
      <h2>Edit Item</h2>
      <div class="add-or-edit">
        <div class="form-control">
          <div class="label">*Item ID:</div>
          <input placeholder="Item ID" [(ngModel)]="itemId"/>
        </div>
        <div class="form-control">
          <div class="label">*Item name:</div>
          <input placeholder="Item Name" [(ngModel)]="itemName"/>
        </div>
        <div class="form-control">
          <div class="label">*Category:</div>
          <select id="category" [(ngModel)]="category">
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Clothing</option>
            <option>Tools</option>
            <option>Miscellaneous</option>
          </select>
        </div>
        <div class="form-control">
          <div class="label">*Quantity:</div>
          <input placeholder="Quantity" [(ngModel)]="quantity" type="number" min="0" step="1" />
        </div>
        <div class="form-control">
          <div class="label">*Price:</div>
          <input placeholder="Price" [(ngModel)]="price" type="number" min="0" step="0.01" />
        </div>
        <div class="form-control">
          <div class="label">*Supplier Name:</div>
          <input placeholder="Supplier Name" [(ngModel)]="supplierName"/>
        </div>
        <div class="form-control">
          <div class="label">*Stock Status:</div>
          <select [(ngModel)]="stockStatus">
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
        <div class="form-control">
          <div class="label">*Popular Item:</div>
          <input type="checkbox" [(ngModel)]="popularItem"/>
        </div>
        <div class="form-control">
          <div class="label">*Comment:</div>
          <input placeholder="Comment" [(ngModel)]="comment"/>
        </div>
      </div>
      <div class="bottom">
        <button (click)="editItem()">Edit Item</button>
        <div class="message">{{message}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class EditComponent {
  itemId: string = '';
  itemName: string = '';
  category: string = '';
  quantity: string = '';
  price: string = '';
  supplierName: string = '';
  stockStatus: string = '';
  popularItem: boolean = false;
  comment: string = '';
  message: string = '';

  constructor(private dataService: DataService,private route: ActivatedRoute, private router: Router) {
    // get edit id and fill inputs
    this.route.paramMap.subscribe(paramsMap => {
      if (paramsMap.get('id')) {
        const item = this.dataService.getById(Number(paramsMap.get('id')));
        if (item) {
          this.itemId = String(item.itemId);
          this.itemName = item.name;
          this.category = item.category;
          this.quantity = ""+item.quantity;
          this.price = ""+item.price;
          this.supplierName = item.supplierName;
          this.stockStatus = item.stockStatus;
          this.popularItem = item.popularItem;
          this.comment = item.comment||"";
        }
      }
    });
  }


  // edit check and submit
  editItem(): void {
    if (this.itemId === "" || isNaN(Number(this.itemId))) {
      this.message = "Item ID should be a number";
      return;
    }
    if (this.itemName === "") {
      this.message = "Item name should be enter";
      return;
    }
    if (this.category === "") {
      this.message = "Category should be enter";
      return;
    }
    if (this.quantity === "") {
      this.message = "Quantity should be enter";
      return;
    }
    if (this.price === "") {
      this.message = "Price should be enter";
      return;
    }
    if (this.supplierName === "") {
      this.message = "Supplier name should be enter";
      return;
    }
    if (this.stockStatus === "") {
      this.message = "Stock status should be enter";
      return;
    }

    // update item
    this.dataService.update({
      itemId: Number(this.itemId),
      name: this.itemName,
      category: this.category,
      quantity: +this.quantity,
      price: +this.price,
      supplierName: this.supplierName,
      stockStatus: this.stockStatus,
      popularItem: this.popularItem,
      comment: this.comment,
    })

    this.message = "Update the item to database!";

    // goto list page
    this.router.navigateByUrl('/list');
  }
}
