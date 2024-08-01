import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../Services/appointments.service';

@Component({
  selector: 'app-Appointments',
  templateUrl: './Appointments.component.html',
  styleUrls: ['./Appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  Appointments: any[] = [];
  filteredAppointments: any[] = [];
  searchTerm: string = '';

  constructor(private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.loadAllAppointments();
  }

  loadAllAppointments(): void {
    if (!this.searchTerm){
      this.AppointmentsService.getAppointments().subscribe(
      (data) => {
        this.Appointments = data;
        this.filteredAppointments = data;
      },
      (error) => {
        console.error('Failed to fetch Appointments', error);});
      }
    else{
      this.AppointmentsService.searchAppointments(this.searchTerm).subscribe(
        (data) => {this.filteredAppointments = data; },
        (error) => {console.error('Failed to search Appointments', error);}
    )}
  }
}

