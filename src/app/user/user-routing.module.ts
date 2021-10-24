import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCoursesComponent } from './user-courses/user-courses.component';

const routes: Routes = [
  { path: 'user-courses', component: UserCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
