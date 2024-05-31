import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'party-management';
  isLoggedIn: boolean = false;


constructor(private router: Router) {}
ngOnInit(): void {
  // Check authentication state on component initialization
  this.isLoggedIn = !!localStorage.getItem('currentUser'); // Example: Check if user is logged in
}
logout(): void {
  // Clear any authentication tokens or session data
  // For example, remove the user from local storage
  localStorage.removeItem('currentUser');

  // Navigate back to the login page
  this.router.navigate(['']);
  this.isLoggedIn = false;

}
}