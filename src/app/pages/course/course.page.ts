import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSearchbar, IonicModule } from '@ionic/angular';
import { CourseService } from 'src/app/services/course.service';
import { CourseWithStudents } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CoursePage implements OnInit {

  searchTerm: string = '';

  @ViewChild('searchBar') searchBar: IonSearchbar | undefined;
  courses: CourseWithStudents[] = [];
  filteredCourses: CourseWithStudents[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.filteredCourses = [...this.courses];
  }

  onInput(searchBar: IonSearchbar) {
    const searchTerm = searchBar.value;
    if (searchTerm !== null && searchTerm !== undefined) {
      this.filterCourses(searchTerm);
    }
  }
  filterCourses(searchTerm: string) {
    return this.courses.filter((course) => course.name.includes(searchTerm) || course.code.includes(searchTerm));
  }
  }
  
