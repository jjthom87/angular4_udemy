import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

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
  	this.todos.push({id: this.todos.length + 1, todo:todo.value})
  }

  ngOnInit() {
  }

}
