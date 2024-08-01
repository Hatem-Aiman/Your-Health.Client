import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private apiUrl = 'https://localhost:7239/Doctors/GetDoctors';
  private searchUrl = 'https://localhost:7239/Doctors/GetDoctor/1';

  constructor(private http: HttpClient) { }

  doctor: any;
  result : any;
  getDoctors(id : number ): Observable<any> {
    if(id == 0){
    this.doctor = this.http.get<any>(this.apiUrl);
    console.log("getting all",this.doctor);
    return this.doctor;
    }
    else{
      this.doctor = this.http.get<any>(this.apiUrl).pipe( map((docs: any[]) => docs.find(doc => doc.DocId === id)));;
      console.log("gettign this",id);
      return this.doctor
    }
  }
}
