import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TodoListComponent } from './todo-list.component';
import { ToDoPannelModule } from '../todo-pannel/todo-pannel.module';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { ApiService } from '../services/api-service.service';
import { TaskService } from '../services/task.service';

@NgModule({
    declarations: [
        TodoListComponent
    ],
    imports: [
        TodoItemModule,
        BrowserModule,
        ToDoPannelModule,
        HttpClientModule
    ],
    providers: [TaskService,ApiService],
    exports: [TodoListComponent]
})
export class ToDoListModule { }
