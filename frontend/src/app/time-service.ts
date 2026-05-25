import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from './time.model';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private apiURL='http://localhost:3000/times'

  constructor(private http:HttpClient){}
  getTimes():Observable<Time[]>{
    return this.http.get<Time[]>(this.apiURL);
  }
}
