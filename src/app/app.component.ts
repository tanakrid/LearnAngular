import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project2';
  isLoading = true;
  todoList: number[] = [];

  imageUrl = 'https://betalist.imgix.net/attachment/62398/image/135b3b8bd939149445d1c9fa4de8716c.png?ixlib=rb-1.2.2&h=300&fit=clip&auto=format&dpr=2';
  isActvie = false;
  email: string;

  amount = 123456.7894999999999;

  today = new Date();

  user = {
    name: 'john snow',
    age: 20,
    isAdmin: false,
  }

  constructor(
    private todoService: TodoService
  ){
    this.todoList = this.todoService.getTodoList();
  }

  onClickOkButton(event){
    console.log("You have clicked OK!");
    alert(event);
  }

  search(email: string){
    console.log('search');
    alert(email);
  }
}

