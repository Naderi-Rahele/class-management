import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-management';


  constructor(private router: Router, private service: UserService) {
  }

  get isLoggedIn() {
    return this.service.getCurrentUser();
  }

  login() {
    this.router.navigate(['/login'])
  }

  logOut() {
    this.service.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }

  getUserCourse() {
    this.router.navigate(['/user/user-courses']);
  }

  register() {
    this.router.navigate(['/register'])
  }

  allCourses() {
    this.router.navigate(['/all-courses']);
  }
}
