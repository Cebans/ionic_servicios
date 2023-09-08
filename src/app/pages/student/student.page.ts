import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentPage implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.filteredStudents = this.students;
  }

  filterStudents(event: any) {
    const searchText = event.target.value;
    if (!searchText) {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
}
