import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../Services/Doctors.service';

@Component({
  selector: 'app-Doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  Doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchTerm: string = '';

  constructor(private DoctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.loadAllDoctors();
  }

  loadAllDoctors(): void {
    if (!this.searchTerm){
      this.DoctorsService.getDoctors().subscribe(
      (data) => {
        this.Doctors = data;
        this.filteredDoctors = data;
      },
      (error) => {
        console.error('Failed to fetch Doctors', error);});
      }
    else{
      this.DoctorsService.searchDoctors(this.searchTerm).subscribe(
        (data) => {this.filteredDoctors = data; },
        (error) => {console.error('Failed to search Doctors', error);}
    )}
  }
}
