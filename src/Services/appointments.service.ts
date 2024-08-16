import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private apiUrl = 'https://localhost:447/Appointment/GetAppointments';
  private searchUrl = 'https://localhost:444/Appointment/GetAppointment/1';

  constructor(private http: HttpClient) { }

  Appointment: any;

  getAppointments(): Observable<any> {
    this.Appointment = this.http.get<any>(this.apiUrl);
    return this.Appointment;
  }

  searchAppointments(term: string): Observable<any> {
    this.Appointment = this.http.get<any>(`${this.searchUrl}?q=${term}`);
    return this.Appointment;
  }
}
