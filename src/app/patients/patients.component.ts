import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../Services/patients.services';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];
  filteredPatients: any[] = [];
  searchTerm: string = '';

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.loadAllPatients();
  }

  loadAllPatients(): void {
    if (!this.searchTerm) {
      this.patientsService.getPatients().subscribe(
        (data) => {
          this.patients = data;
          this.filteredPatients = data;
        },
        (error) => {
          console.error('Failed to fetch patients', error);
        }
      );
    } else {
      this.patientsService.searchPatients(this.searchTerm).subscribe(
        (data) => {
          this.filteredPatients = data;
        },
        (error) => {
          console.error('Failed to search patients', error);
        }
      );
    }
  }
}
