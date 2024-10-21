import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service'; 

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  studentId: string | null = null;  
  attendance: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    if (this.studentId) {  
      this.fetchAttendance();
    } else {
      console.error('Student ID is null');
      
    }
  }

  fetchAttendance() {
    if (this.studentId) {  
      this.studentService.getAttendance(this.studentId).subscribe(data => {
        this.attendance = data;
      });
    }
  }
}
