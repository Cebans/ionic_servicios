import { Injectable } from '@angular/core';
import { StudentPage } from '../pages/student/student.page';
import { Student } from '../pages/student.model';
import { CourseService } from './course.service';
import { Course } from '../pages/course/course.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    new Student('Estudiante 1', 20, ['Curso A', 'Curso B']),
    new Student('Estudiante 2', 22, ['Curso A']),
    new Student('Estudiante 3', 21, ['Curso B']),
];

  constructor() {}

  getStudents(): Student[] {
    return this.students;
  }

  getStudentsByCourse(courseCode: string): Student[] {
    return this.students.filter((student) => student.courses.includes(courseCode));
  }
}
