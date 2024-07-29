import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  private apiUrl = 'https://localhost:7239/Specialities/GetSpecialities';
  private searchUrl = 'https://localhost:7239/Specialities/GetSpeciality/1'; // API endpoint for search

  constructor(private http: HttpClient) { }

  speclist: any;

  getSpecialities(): Observable<any> {
    this.speclist = this.http.get<any>(this.apiUrl);
    return this.speclist;
  }

  searchSpecialities(term: string): Observable<any> {
    this.speclist = this.http.get<any>(`${this.searchUrl}?q=${term}`);
    return this.speclist;
  }
}
