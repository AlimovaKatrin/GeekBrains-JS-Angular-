import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskService } from './task.service';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './tasks.effects';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    HomeComponent,
    NotFoundComponent,
    TaskComponent,
    TaskContainerComponent,
    TasksContainerComponent,
    HeaderComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TasksEffects]),
  ],
  providers: [
    TaskService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
