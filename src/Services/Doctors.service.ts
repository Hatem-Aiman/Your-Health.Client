import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private apiUrl = 'https://localhost:7239/Doctors/GetDoctors';
  private searchUrl = 'https://localhost:7239/Doctors/GetDoctor/1';

  constructor(private http: HttpClient) { }

  doctor: any;

  getDoctors(): Observable<any> {
    this.doctor = this.http.get<any>(this.apiUrl);
    return this.doctor;
  }

  searchDoctors(term: string): Observable<any> {
    this.doctor = this.http.get<any>(`${this.searchUrl}?q=${term}`);
    return this.doctor;
  }
}
