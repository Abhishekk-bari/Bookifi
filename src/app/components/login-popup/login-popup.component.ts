import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent {
  @Output() close = new EventEmitter<void>();
  username= 'admin';
  password= 'password';

  constructor(private authService: AuthService, private router: Router) {}
  
  login() {
    if (this.authService .login(this.username, this.password)) {
      this.close.emit();
      this.router.navigate(['/dashboard']);
    } else {
      alert('invalid credentials');
    }
  }
  closePopup() {
    this.close.emit();
  }
}
