import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item.component';


@NgModule({
  declarations: [TodoItemComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [TodoItemComponent]
})
export class TodoItemModule { }
