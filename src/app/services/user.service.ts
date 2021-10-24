import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { RegistrationModel } from '../models/registration-model';
import { InMemoryDB, User, UserCourse } from './in-memory-db';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(public http: HttpClient,
        private router: Router
    ) {
    }

    login(email: string) {
        InMemoryDB.CURRENT_USER = email;
        this.router.navigate(['/all-courses']);
    }

    logout() {
        InMemoryDB.CURRENT_USER = "";
        return of({});
    }

    add(model: RegistrationModel) {
        InMemoryDB.USERS.push(new User(model.email, model.password, model.education, model.gender));
        return of({});
    }

    getCurrentUser() {
        return InMemoryDB.CURRENT_USER;
    }

    getAllCourses() {
        return InMemoryDB.COURSES;
    }

    addUsrCourse(courseId: number) {
        if (InMemoryDB.USERS_COURSES.some(c => c.email === InMemoryDB.CURRENT_USER && c.courseId === courseId))
            return throwError({ message: 'The course selected is douplicate' });
        InMemoryDB.USERS_COURSES.push(new UserCourse(InMemoryDB.CURRENT_USER, courseId));
        return of({});
    }

}

