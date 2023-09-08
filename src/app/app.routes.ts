import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'startpage',
    pathMatch: 'full',
  },
  {
    path: 'startpage',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.startpage)
  },
  {
    path: 'student',
    loadComponent: () => import('./pages/student/student.page').then( m => m.StudentPage)
  },
  {
    path: 'course',
    loadComponent: () => import('./pages/course/course.page').then( m => m.CoursePage)
  },
];
