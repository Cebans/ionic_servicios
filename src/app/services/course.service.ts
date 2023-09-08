import { Injectable } from '@angular/core';
import { Course } from '../pages/course/course.model';
import { StudentService } from './student.service';
import { Student } from '../pages/student.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    new Course('A001', 'Curso A'),
    new Course('B002', 'Curso B'),
  ];

  constructor(private studentService: StudentService) {
    this.courses.forEach((course) => {
      course.students = this.studentService.getStudentsByCourse(course.code);
    });
  }

  getCourses(): Course[] {
    return this.courses;
  }
}
