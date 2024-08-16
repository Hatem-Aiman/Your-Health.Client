import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = 'https://localhost:447/Patients/GetPatients';
  private searchUrl = 'https://localhost:444/Patients/GetPatients/1';

  constructor(private http: HttpClient) {}

  patients : any;

  getPatients(): Observable<any[]> {
    this.patients = this.http.get<any[]>(this.apiUrl);
    return this.patients;
  }

  searchPatients(term: string): Observable<any[]> {
    this.patients= this.http.get<any[]>(`${this.searchUrl}?q=${term}`);
    return this.patients;
  }
}
