import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/services/in-memory-db';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  userCourses: Course[] = [];

  constructor(private service: UserService) {
    this.userCourses = this.service.getUserCourse();
  }

  ngOnInit(): void {
  }

}
