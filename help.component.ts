import { Component } from '@angular/core'

@Component({
  selector: 'app-help',
  template: `
    <div class="center">
      <h2>Help & User Guide</h2>
      <p>Welcome to our app! This guide will help you understand how to use the app efficiently.</p>
      <p>Getting Started</p>
      <ul>
        <li>The app starts with either preloaded sample data</li>
        <li>All data is stored temporarily and will reset when you close the browser.</li>
      </ul>
      <p>🔍 Search for an Item</p>
      <ul>
        <li>Enter an item name in the search box to find specific items.</li>
      </ul>
      <p>⭐ View Popular Items</p>
      <ul>
        <li>Navigate to "Popular Item List" tab to display popular inventory items</li>
      </ul>
      <p>💎 Stock Status Guide</p>
      <ul>
        <li>🟢 In Stock – Sufficient quantity available.</li>
        <li>🟠 Low Stock – Limited quantity remaining.</li>
        <li>🔴 Out of Stock – No available stock.</li>
      </ul>
      <p>🐻 About Me</p>
      <ul>
        <li>3461233588&#64;qq.com</li>
      </ul>
    </div>
  `,
})
export class HelpComponent {

}
