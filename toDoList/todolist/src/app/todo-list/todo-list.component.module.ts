import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { ToDoPannelModule } from '../todo-pannel/todo-pannel.module';
import { TodoItemModule } from '../todo-item/todo-item.module';

@NgModule({
    declarations: [
        TodoListComponent
    ],
    imports: [
        TodoItemModule,
        BrowserModule,
        ToDoPannelModule
    ],
    providers: [],
    exports: [TodoListComponent]
})
export class ToDoListModule { }
