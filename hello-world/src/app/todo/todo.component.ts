import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos = []
  striked = ''

  onSubmitTodo($event){
  	$event.preventDefault();
  }

  onDelete(todoId){
  	let todoIds = this.todos.map((todo) => {
  		return todo.id
  	});
  	this.todos.splice(todoIds.indexOf(todoId), 1);
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
