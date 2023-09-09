import { Injectable } from '@angular/core';
import { CourseWithStudents } from '../pages/course/course.model';
import { StudentService } from './student.service';
import { Student } from '../pages/student.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: CourseWithStudents[] = [
    { code: 'A101', name: 'eeeee', students: [] },
   { code: 'B202', name: 'cccc', students: [] },
  ];

  constructor() {}

  getCourses(): CourseWithStudents[] {
    return this.courses;
  }
  }
