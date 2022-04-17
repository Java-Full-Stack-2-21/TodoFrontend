import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCli : HttpClient) { }

  createTodo(task: string){
    return this.httpCli.post<any>("http://localhost:9000/todo",{
      "task": task
    },{
      withCredentials: true
    })
  }

  getAllTodos(){
    return this.httpCli.get<any>("http://localhost:9000/todo",{
      withCredentials: true
    })
  }

  deleteTodo(id: number){
    return this.httpCli.delete<any>(`http://localhost:9000/todo/${id}`);
  }
}
