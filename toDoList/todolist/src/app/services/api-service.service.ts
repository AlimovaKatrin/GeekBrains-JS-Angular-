import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../interfaces/interfaces'

export interface GenericService<T>{
  getAll():Observable<object>;
  // get(): Observable<T>;
  // create(item:T): Observable<T>
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  static endpoint = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getAll(path:string):Observable<object> {
    return this.http.get(`${ApiService.endpoint}/${path}`)
  };

  get(path:string,id:string):Observable<object>{
    return this.http.get(`${ApiService.endpoint}/${path}/${id}`)
  };

  create(path:string,item:object):Observable<object>{
    return this.http.post(`${ApiService.endpoint}/${path}`,item)
  };
}
