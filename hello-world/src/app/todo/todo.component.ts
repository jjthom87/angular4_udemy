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

    //this.todos.push({id: this.todos.length + 1, message:f.value.todo})
    if(f.value.todo !== ""){
      this.http.post('http://localhost:3000/api/create-todo', {
        message: f.value.todo
      }).subscribe(
        res => {
          this.repopulateTodos(res)
          f.resetForm()
        },
        err => {
          console.log("Error occured");
        }
      );
    } else {
      alert("Please enter message")
    }
  }

  onDelete(todoId){
  	// this.todos.splice(this.todos.map((todo) => {
  	// 	return todo.id
  	// }).indexOf(todoId), 1);
    this.http.delete('http://localhost:3000/api/delete-todo/' + todoId).subscribe(res => this.repopulateTodos(res))
  }

  onStrikeThrough($event){
  	$event.target.style.textDecoration = 'line-through'
  }

  populateTodos(todos){  
    todos.forEach((todo) => {
      this.todos.push(todo)
    })
  }

  repopulateTodos(todos){
    this.todos = [];
    todos.forEach((todo) => {
      this.todos.push(todo)
    })
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/todos').subscribe((res:Response) => this.populateTodos(res))
  }

}
