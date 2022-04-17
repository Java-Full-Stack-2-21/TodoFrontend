import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todo[] = [];
  title = 'TodoFrontend';
  taskInput: string = "";

  constructor(private apiServ: ApiService){}

  ngOnInit(): void {
      this.apiServ.getAllTodos().subscribe(responseBody => {
        this.todos = responseBody.data;
      })
  }

  createTodo(e: any){
    e.preventDefault();

    this.apiServ.createTodo(this.taskInput).subscribe(responseBody => {
      this.taskInput="";
      this.todos.push(responseBody.data);
    })
  }

  deleteTodo(e:any){
    let id = e.target.id;
    let index = 0;
    this.apiServ.deleteTodo(id).subscribe(responseBody => {
      //find item to remove
      this.todos.forEach((todo, i) => {
        if(todo.id == id){
          index = i;
        }
      })
      this.todos.splice(index, 1);
    })
  }
}
