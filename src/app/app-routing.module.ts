import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ManagespecialityComponent } from './manage-speciality/manage-speciality.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'specialities', component: SpecialitiesComponent },
  { path:'home', component: HomeComponent},
  { path: 'manage', component: ManageComponent },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'manage-doctor', component: ManageDoctorComponent},
  { path: 'manage-speciality', component: ManagespecialityComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'account', component: AccountComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
