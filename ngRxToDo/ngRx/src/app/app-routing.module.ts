import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { CreateTaskComponent } from './create-task/create-task.component';


const routes: Routes = [

  { path: 'tasks', component: TasksContainerComponent},
  { path: 'tasks/create', component: CreateTaskComponent},
  { path: 'tasks/:id', component:TaskContainerComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
