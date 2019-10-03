import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(public http: HttpClient) { }

  getTodos():Observable<object> {
    return this.http.get('http://localhost:3000/tasks')
  }

}
