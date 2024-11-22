import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl = 'http://localhost:8080/api/stats';

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateStats(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }

}
