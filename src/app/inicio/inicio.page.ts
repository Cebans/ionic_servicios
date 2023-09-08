import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class startpage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
    

  navigateToStudent() {
    
    this.router.navigate(['/student']);
  }

  navigateToCourse() {
  
    this.router.navigate(['/course']);

   
  }
}
