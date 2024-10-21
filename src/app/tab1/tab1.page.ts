import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  showProfile: boolean = false;

  
  students = [
    { name: 'Rahul', class: '10th Grade', phone: '123-456-7890', subjectsCount: 5, feesDue: '$200' },
    { name: 'Disha', class: '10th Grade', phone: '987-654-3210', subjectsCount: 6, feesDue: '$250' },
    { name: 'Sneha', class: '10th Grade', phone: '456-789-0123', subjectsCount: 5, feesDue: '$200' },
    
  ];

 
  studentName: string = '';
  studentClass: string = '';
  studentPhone: string = '';
  subjectsCount: number = 0;
  feesDue: string = '';
  
  invoiceId: string = '12345'; 
  studentId: number; 

  constructor(private menu: MenuController, public router: Router) {
    this.studentId = 2;

    
    if (this.students.length > 0) {
      this.setProfile(this.students[0]);
    }
  }

  ngOnInit() {

  }


  toggleProfile() {
    this.showProfile = !this.showProfile;
  }


  setProfile(student: any) {
    this.studentName = student.name;
    this.studentClass = student.class;
    this.studentPhone = student.phone;
    this.subjectsCount = student.subjectsCount;
    this.feesDue = student.feesDue;
  }

  
  logStudentId() {
    console.log('Student ID:', this.studentId);
  }


  openNotifications() {
    console.log('Notifications clicked!');
    this.router.navigate(['/reminder-notification']);
  }

 
  openMenu() {
    this.menu.open('main-menu');
  }


  openManageStudentFees() {
    this.logStudentId(); 
    this.router.navigate(['/manage-student-fees', this.studentId]);
  }


  goToStudentList() {
    this.router.navigate(['/student-list']);
  }


  logout() {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
