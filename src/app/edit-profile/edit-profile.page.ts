import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
  studentName: string = 'Manasa'; 
  studentClass: string = '10th Grade'; 
  studentPhone: string = '8792248549'; 
  subjects: string = 'Maths, Science'; 
  Totalfees: number = 2000; 
  date: string = '2024-01-01'; 
  constructor(private router: Router) {}

 
  saveProfile() {
    
    this.router.navigate(['/profile']);  
  }
}
