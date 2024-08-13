import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecialitiesService } from '../../Services/specialities.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-manage-speciality',
  templateUrl: './manage-speciality.component.html',
  styleUrl: './manage-speciality.component.css'
})

export class ManagespecialityComponent {

  errorMessage: string = '';
  Message: string = '';
  specialities:any;
  SpecialityForm: FormGroup;
  specs:any;

  constructor(private fb: FormBuilder,private http: HttpClient,private specialitiesService: SpecialitiesService) {
    this.SpecialityForm = this.fb.group({
      SpecialityName: [null, [Validators.required]]
    });
  }

  onSubmit():void {

  this.specs = this.SpecialityForm.value;
      const params = new HttpParams({ fromObject: this.specs });
      this.http.post('https://localhost:8084/specialities/CreateSpeciality', null, { params })
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

}
