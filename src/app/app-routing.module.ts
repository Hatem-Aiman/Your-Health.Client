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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'specialities', component: SpecialitiesComponent },
  {path:'home', component: HomeComponent},
  { path: 'manage', component: ManageComponent },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
