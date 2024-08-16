import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
// items: MegaMenuItem[]|undefined;
// changeComponent() {
//   console.log('changeComponent', this.selected.label);
// }

// manage = [
//   { label: 'Appointments', route: 'manage-appointment' },
//   { label: 'Doctors', route: 'manage-doctor' },
//   { label: 'specialities', route: 'manage-speciality' },
//   { label: 'Patients', route: 'manage-patient' }
// ];
// selected: any;

// constructor(private router: Router) {}

//   onSelect(event: any) {
//     const selectedItem = event.value;
//     if (selectedItem && selectedItem.route) {
//       this.router.navigate([selectedItem.route]);
//     }
//  }
items: MegaMenuItem[] | undefined;


ngOnInit() {
this.items = [
  {
    label: 'Your-Health',
    root: true,
  },
    {
        label: 'Dashborad',
        root: true,
        items: [
            [
            {
            items: [
                { label: 'Doctors', route:'/doctors'},
                { label: 'Patients', route:'patients'},
                { label: 'Appointments', route:'appointments'},
                { label: 'Specialities', route:'specialities'}
            ]
            }
            ],
        ]
    },
    {
        label: 'Manage',
        root: true,
        items: [
            [
            {
            items: [
                { label: ' Doctors', route:'/manage-doctor'},
                { label: ' Patients', route:'patients'},
                { label: ' Appointments', route:'appointments'},
                { label: ' Specialities', route:'manage-speciality'}
            ]
            }
            ],
        ]
    },
    {
        label: 'Contact',
        root: true
    },
    {
      label: 'Account',
      root: true,
      items: [
          [
          {
          items: [
              { icon: 'pi pi-sign-in',label: ' Login', route:'/login'},
              { icon: 'pi pi-user-plus',label: ' Register', route:'/register'},
          ]
          }
          ],
      ]
  },
];


}
}
