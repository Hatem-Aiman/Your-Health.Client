import { Component, OnInit } from '@angular/core';
import { SpecialitiesService } from '../../Services/specialities.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  specialities: any[] = [];
  filteredSpecialities: any[] = [];
  searchTerm: string = '';

  constructor(private specialitiesService: SpecialitiesService) { }

  ngOnInit(): void {
    this.loadAllSpecialities();
  }

  loadAllSpecialities(): void {
    if (!this.searchTerm){
      this.specialitiesService.getSpecialities().subscribe(
      (data) => {
        this.specialities = data;
        this.filteredSpecialities = data;
      },
      (error) => {
        console.error('Failed to fetch specialities', error);});
      }
    else{
      this.specialitiesService.searchSpecialities(this.searchTerm).subscribe(
        (data) => {this.filteredSpecialities = data; },
        (error) => {console.error('Failed to search specialities', error);}
    )}
  }
}

