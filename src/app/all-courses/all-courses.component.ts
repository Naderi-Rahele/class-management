import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Course, InMemoryDB, User } from '../services/in-memory-db';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  allCourses: Course[] = [];

  constructor(private service: UserService,
    private toastService: MatSnackBar,
    private router: Router) {
    this.allCourses = this.service.getAllCourses();
  }

  selectCourse(courseId: number) {
    if (this.service.getCurrentUser() === "") {
      this.router.navigate(['/login']);
      return;
    }
    this.service.addUsrCourse(courseId).subscribe(res => {
      this.toastService.open('The course added successfuly', '', {
        duration: 2000,
        panelClass: ['bg-accent'],
      });
    }, error => {
      this.toastService.open(error.message, '', {
        duration: 2000,
        panelClass: ['bg-warn'],
      });
    });
  }

  ngOnInit(): void {
  }

}
