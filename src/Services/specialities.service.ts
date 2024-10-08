import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  private apiUrl = 'https://localhost:447/Specialities/GetSpecialities';
  private searchUrl = 'https://localhost:444/Specialities/GetSpeciality/1';

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
