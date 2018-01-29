import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { TodoComponent } from './todo/todo.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';

const routes : Routes = [
	{ path:'', component:AuthorsComponent},
    { path:'courses', component:CoursesComponent},
    { path:'course', component:CourseComponent},
    { path:'todo', component:TodoComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }