import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecialitiesService } from '../../Services/specialities.service';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrl: './manage-doctor.component.css'
})

export class ManageDoctorComponent {

  errorMessage: string = '';
  Message: string = '';
  specialities:any;
  doctorForm: FormGroup;
  docdata:any;

  constructor(private fb: FormBuilder,private http: HttpClient,private specialitiesService: SpecialitiesService) {
    this.doctorForm = this.fb.group({
      DocFirstName: [null, [Validators.required]],
      DocLastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      speciality: [null, [Validators.required]]
    });
  }
  ngOnInit(): void {
 this.getspecs();
  }

  onSubmit():void {

  this.docdata = this.doctorForm.value;
      const params = new HttpParams({ fromObject: this.docdata });
      this.http.post('https://localhost:8084/Doctors/CreateDoctor', null, { params })
        .subscribe(
          response => {
        console.log('Creation successful', response);
        this.Message = 'Creation successful';
          },
          error => {
        console.error('Creation failed', error);
        this.errorMessage = 'Creation failed. Please try again.';
          }
        );

  }
  getspecs(): void {
      this.specialitiesService.getSpecialities().subscribe(
      (data) => {
        this.specialities = data;
      },
      (error) => {
        console.error('Failed to fetch specialities', error);});
  }
}
