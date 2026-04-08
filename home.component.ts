import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="center">
      <h2>Welcome to inventory center!</h2>
      <p>The app is a simple, browser-based application designed to help users efficiently manage a small database of items. This app ensures a smooth and interactive user experience without requiring persistent data storage.</p>
      <p>This application aims to:</p>
      <ul>
        <li>Simplify Inventory Tracking: Easily add, edit, update, and delete items with structured data fields.</li>
        <li>Ensure Efficient Stock Management: Track stock status (In Stock, Low Stock, Out of Stock) and identify popular items quickly.</li>
        <li>Enhance User Experience: Provide an intuitive, responsive design for seamless usability on both mobile and desktop screens.</li>
        <li>Improve Data Organization: Categorize items into predefined groups (Electronics, Furniture, Clothing, Tools, Miscellaneous) for better management.</li>
        <li>Enable Quick Searches: Find items easily using search functionality based on item names.</li>
        <li>Interactive and Engaging Interface: Utilize innerHTML updates for dynamic content changes instead of disruptive alert pop-ups.</li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

}
