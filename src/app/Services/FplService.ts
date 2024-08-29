import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FplService {
  private apiUrl = 'https://fantasy.premierleague.com/api'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teams`);
  }

  // Add other methods to fetch different data from the API
}