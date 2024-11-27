import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showLoginPopup = false; // Add a state to track the popup visibility

  openLoginPopup() {
    this.showLoginPopup = true;
  }

  closeLoginPopup() {
    this.showLoginPopup = false;
  }
}