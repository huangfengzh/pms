import { Component } from '@angular/core'

@Component({
  selector: 'app-privacy-security',
  template: `
    <div class="center">
      <h2>Privacy & Security</h2>
      <p>At out app, we prioritize user privacy and data security while ensuring a seamless inventory management experience.</p>
      <p>Privacy Commitment:</p>
      <ul>
        <li>This application does not collect, store, or transmit any personal or sensitive user data.</li>
        <li>All inventory data is managed locally within the browser and is not stored after the session ends.</li>
        <li>No third-party tracking, cookies, or external data sharing is involved.</li>
      </ul>
      <p>Security Measures</p>
      <ul>
        <li>Each item ID must be unique, preventing duplicate entries and ensuring data integrity.</li>
        <li>Critical actions such as item deletion require user confirmation to prevent accidental data loss.</li>
        <li>The application uses innerHTML updates instead of disruptive pop-ups to enhance user experience while maintaining security.</li>
        <li>All operations run within the browser, reducing exposure to external security threats.</li>
      </ul>
    </div>
  `,
})
export class PrivacySecurityComponent {

}
