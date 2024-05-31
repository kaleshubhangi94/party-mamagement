import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = 'http://localhost:3000/api/parties';
  constructor(private http: HttpClient) {}

  getParties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addParty(party: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, party);
  }

  updateParty(id: string, party: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, party);
  }

  deleteParty(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
