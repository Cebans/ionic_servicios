import { Student } from "../student.model";
export class CourseWithStudents {
  code: string;
  name: string;
  students: Student[];

  constructor(code: string, name: string, students: Student[]) {
    this.code = code;
    this.name = name;
    this.students = students;
  }
}
