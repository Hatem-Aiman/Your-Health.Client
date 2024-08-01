import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../Services/Doctors.service';

@Component({
  selector: 'app-Doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  filteredDoctors: any[] = [];
  searchTerm: number = 0;

  constructor(private DoctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.loadAllDoctors();
  }

  loadAllDoctors(): void {
      this.DoctorsService.getDoctors(this.searchTerm).subscribe({
      next : data => this.filteredDoctors = data,
      error : err => console.log("error" , err)
      });
      console.log(this.filteredDoctors)
  }
}
