import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage {

  constructor(private router: Router) { }

  viewMarks() {
    // Navigate to marks overview page
    this.router.navigate(['/marks']);
  }

  viewAttendance() {
    // Navigate to attendance overview page
    this.router.navigate(['/attendance']);
  }

  viewFees() {
    // Navigate to manage student fees page
    this.router.navigate(['/manage-student-fees']);
  }

  viewStudentProfiles() {
    // Navigate to student profiles page
    this.router.navigate(['/student-profiles']);
  }

  viewStaffDetails() {
    // Navigate to staff details page
    this.router.navigate(['/staff-details']);
  }

  handleEnquiry() {
    // Navigate to enquiry page
    this.router.navigate(['/enquiry']);
  }
}
