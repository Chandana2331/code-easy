import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  studentName: string = 'Manasa'; 
  studentClass: string = '10th Grade'; 
  studentPhone: string = '8792248549'; 
  subjects: string = 'Maths, Science'; 
  Totalfees: number = 2000; 
  date: string = '01-01-2024'; 

  constructor(private router: Router) {}

  
  editProfile() {
    this.router.navigate(['/edit-profile']);  
  }
}
