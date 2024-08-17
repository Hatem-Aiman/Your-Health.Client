import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';


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





// items: MegaMenuItem[] | undefined;
// ngOnInit() {
// this.items = [
//   {
//     label: 'Your-Health',
//     root: true,
//   },
//     {
//         label: 'Dashborad',
//         root: true,
//         items: [
//             [
//             {
//             items: [
//                 { label: 'Doctors', route:'/doctors'},
//                 { label: 'Patients', route:'patients'},
//                 { label: 'Appointments', route:'appointments'},
//                 { label: 'Specialities', route:'specialities'}
//             ]
//             }
//             ],
//         ]
//     },
//     {
//         label: 'Manage',
//         root: true,
//         items: [
//             [
//             {
//             items: [
//                 { label: ' Doctors', route:'/manage-doctor'},
//                 { label: ' Patients', route:'patients'},
//                 { label: ' Appointments', route:'appointments'},
//                 { label: ' Specialities', route:'manage-speciality'}
//             ]
//             }
//             ],
//         ]
//     },
//     {
//         label: 'Contact',
//         root: true
//     },
//     {
//       label: 'Account',
//       root: true,
//       items: [
//           [
//           {
//           items: [
//               { icon: 'pi pi-sign-in',label: ' Login', route:'/login'},
//               { icon: 'pi pi-user-plus',label: ' Register', route:'/register'},
//           ]
//           }
//           ],
//       ]
//   },
// ];}



items: MenuItem[] | undefined;

ngOnInit() {
    this.items = [
        {
            label: 'Your-Health',
            icon: 'pi pi-home',
            route : '/home',
            styling:'bg-primary'
        },
        {
            label: 'DashBoard',
            icon: 'pi pi-star',
            route : '/manage'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            route:null,
            items: [
                {
                    label: 'Doctors',
                    icon: 'pi pi-address-book',
                    shortcut: '',
                    route : '/doctors'
                },
                {
                    label: 'Patients',
                    icon: 'pi pi-heart',
                    shortcut: '',
                    route : '/patients'
                },
                {
                    label: 'Appointments',
                    icon: 'pi pi-map-marker',
                    shortcut: '',
                    route : '/appointments'
                },
                {
                  label: 'Specialities',
                  icon: 'pi pi-shield',
                  shortcut: '',
                  route : '/specialities'
              }
            ]
          },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            badge: '3',
            route : '/contact'
          },
        {
          label: 'Account',
          icon: 'pi pi-user',
          route : '/account',
          items: [
            {
                label: 'Login',
                icon: 'pi pi-sign-in',
                shortcut: '',
                route : '/login'
            },
            {
                label: 'Sign Up',
                icon: 'pi pi-user-plus',
                shortcut: '',
                route : '/register'
            },
            {
              label: 'Manage',
              icon: 'pi pi-cog',
              shortcut: '',
              route:'account'
            }
        ]
      }
    ];
  }
}

