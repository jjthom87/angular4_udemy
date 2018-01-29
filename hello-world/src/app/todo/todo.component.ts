import { Injectable, Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()
export class TodoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  todos = []
  striked = ''

  onSubmitTodo($event, f: NgForm){
  	$event.preventDefault();

  	f.resetForm()
  }

  onDelete(todoId){
  	this.todos.splice(this.todos.map((todo) => {
  		return todo.id
  	}).indexOf(todoId), 1);
  }

  onStrikeThrough($event){
  	$event.target.style.textDecoration = 'line-through'
  }

  log(todo){
  	this.todos.push({id: this.todos.length + 1, message:todo.value})
  }

  logIt(hey){  
    hey.forEach((h) => {
      this.todos.push(h)
    })
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/todos').subscribe((res:Response) => this.logIt(res))
  }

}
