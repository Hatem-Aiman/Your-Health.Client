import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { CommonModule } from '@angular/common';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { FooterComponent } from './footer/footer.component';
import { ManagespecialityComponent } from './manage-speciality/manage-speciality.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { MegaMenu, MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DoctorsComponent,
    PatientsComponent,
    AppointmentsComponent,
    SpecialitiesComponent,
    ManageDoctorComponent,
    FooterComponent,
    ManagespecialityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    FloatLabelModule,
    CardModule,
    MegaMenuModule,
    AvatarModule,
    DividerModule,
    CheckboxModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
