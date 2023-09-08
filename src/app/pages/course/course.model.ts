import { Student } from "../student.model";

export class Course {
    students: Student[] = []; 
  
    constructor(public code: string, public name: string) {}
  }