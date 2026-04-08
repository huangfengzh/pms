import { Injectable } from '@angular/core';

// Define Item structure
export interface Item {
  itemId: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  supplierName: string;
  stockStatus: string;
  popularItem: boolean;
  comment?: string; // optional
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemData: Item[] = [
    {
      itemId: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      quantity: 50,
      price: 29.99,
      supplierName: "TechSupply Co.",
      stockStatus: "In Stock",
      popularItem: true
    },
    {
      itemId: 2,
      name: "Office Chair",
      category: "Furniture",
      quantity: 10,
      price: 120.0,
      supplierName: "Comfort Seating Ltd.",
      stockStatus: "Low Stock",
      popularItem: false
    },
    {
      itemId: 3,
      name: "Denim Jacket",
      category: "Clothing",
      quantity: 0,
      price: 59.99,
      supplierName: "Fashion Hub",
      stockStatus: "Out of Stock",
      popularItem: false
    },
    {
      itemId: 4,
      name: "Hammer",
      category: "Tools",
      quantity: 25,
      price: 15.49,
      supplierName: "Builder's Choice",
      stockStatus: "In Stock",
      popularItem: true
    },
    {
      itemId: 5,
      name: "LED Desk Lamp",
      category: "Electronics",
      quantity: 5,
      price: 35.99,
      supplierName: "BrightLights Inc.",
      stockStatus: "Low Stock",
      popularItem: false,
      comment: "Energy efficient model"
    },
    {
      itemId: 6,
      name: "Sofa Set",
      category: "Furniture",
      quantity: 0,
      price: 899.99,
      supplierName: "Home Comforts",
      stockStatus: "Out of Stock",
      popularItem: true,
      comment: "Limited edition"
    },
    {
      itemId: 7,
      name: "Cordless Drill",
      category: "Tools",
      quantity: 8,
      price: 89.99,
      supplierName: "HandyTech",
      stockStatus: "Low Stock",
      popularItem: true
    },
    {
      itemId: 8,
      name: "Graphic T-Shirt",
      category: "Clothing",
      quantity: 100,
      price: 19.99,
      supplierName: "Trendy Apparel",
      stockStatus: "In Stock",
      popularItem: false
    },
    {
      itemId: 9,
      name: "Notebook",
      category: "Miscellaneous",
      quantity: 200,
      price: 3.99,
      supplierName: "PaperWorld",
      stockStatus: "In Stock",
      popularItem: false
    },
    {
      itemId: 10,
      name: "Bluetooth Speaker",
      category: "Electronics",
      quantity: 2,
      price: 49.99,
      supplierName: "AudioMax",
      stockStatus: "Low Stock",
      popularItem: true,
      comment: "Waterproof model"
    }
  ]; // Initial list of items

  /**
   * Retrieves all items.
   * @returns {Item[]} Returns an array containing all items.
   */
  getAll(): Item[] {
    return this.itemData;
  }
  /**
   * Retrieves all popular items.
   * @returns {Item[]} Returns an array containing all items marked as popular.
   */
  getAllPopular(): Item[] {
    return this.itemData.filter(item => item.popularItem);
  }
  /**
   * Updates the specified item.
   * @param {Item} item - The item object to update.
   */
  update(item: Item) {
    for (let i=0;i< this.itemData.length;i++){
      if (this.itemData[i].itemId == item.itemId) {
        this.itemData[i].name = item.name;
        this.itemData[i].category = item.category;
        this.itemData[i].quantity = item.quantity;
        this.itemData[i].price = item.price;
        this.itemData[i].supplierName = item.supplierName;
        this.itemData[i].stockStatus = item.stockStatus;
        this.itemData[i].popularItem = item.popularItem;
        this.itemData[i].comment = item.comment;
      }
    }
  }
  /**
   * Adds a new item.
   * @param {Item} item - The item object to add.
   */
  add(item: Item): void {
    this.itemData[this.itemData.length] = item;
  }
  /**
   * Retrieves an item by its ID.
   * @param {number} itemId - The ID of the item to retrieve.
   * @returns {Item | null} Returns the matching item if found, otherwise null.
   */
  getById (itemId: number) : Item | null {
    for ( let i = 0; i< this.itemData.length; i++ ){
      if (this.itemData[i].itemId == itemId)  {
        return this.itemData[i];
      }
    }
    return null;
  }
  /**
   * Searches for items by name.
   * @param {string} itemName - The name of the item to search for.
   * @returns {Item[]} Returns an array of items that match the search query.
   */
  search (itemName: string) : Item[] {
    const searchItems = [];
    for ( let i = 0; i< this.itemData.length; i++ ){
      if (this.itemData[i].name.toLowerCase().includes(itemName.toLowerCase()))  {
        searchItems.push(this.itemData[i]);
      }
    }
    return searchItems;
  }
  /**
   * Removes an item by its ID.
   * @param {number} itemId - The ID of the item to remove.
   */
  remove(itemId: number) {
    for ( let i = 0; i< this.itemData.length; i++ ){
      if (this.itemData[i].itemId == itemId) {
        this.itemData.splice(i, 1);
      }
    }
  }
}
