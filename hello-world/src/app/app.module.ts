import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';

import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { TodoComponent } from './todo/todo.component';

import { AppRouter } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TodoComponent
  ],
  imports: [BrowserModule, AppRouter],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
