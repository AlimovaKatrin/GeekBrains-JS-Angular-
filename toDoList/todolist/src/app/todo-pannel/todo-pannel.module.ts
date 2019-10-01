import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoPannelComponent } from './todo-pannel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TodoPannelComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule
    ],
    providers: [],
    exports: [TodoPannelComponent]
})
export class ToDoPannelModule { }