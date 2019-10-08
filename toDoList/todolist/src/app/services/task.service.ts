import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService,GenericService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService implements GenericService<any>{

  constructor(public api: ApiService) { }

  getAll():Observable<object> {
    return this.api.getAll('tasks')
  }
  get(path:string,id:string):Observable<object>{
    return this.api.get(path,id)
  }
  create(path,item){
    return this.api.create(path,item)
  }
}
