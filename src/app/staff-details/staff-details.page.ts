import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModalComponent } from '../calendar-modal/calendar-modal.component'; // Adjust the import as necessary

interface StaffMember {
  name: string;
  address: string;
  contactNumber: string;
  designation: string;
  attendance: string;
}

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.page.html',
  styleUrls: ['./staff-details.page.scss'],
})
export class StaffDetailsPage {
  staffMembers: StaffMember[] = [];
  
  newStaffMember: StaffMember = {
    name: '',
    address: '',
    contactNumber: '',
    designation: '',
    attendance: '',
  };

  constructor(private modalController: ModalController) { }

  addStaffMember() {
    console.log('Adding staff member:', this.newStaffMember);
    this.staffMembers.push({ ...this.newStaffMember });
    this.clearForm();
  }

  clearForm() {
    this.newStaffMember = {
      name: '',
      address: '',
      contactNumber: '',
      designation: '',
      attendance: '',
    };
  }

  async openCalendar(member: StaffMember) {
    const modal = await this.modalController.create({
      component: CalendarModalComponent,
      componentProps: {
        attendance: member.attendance,
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        member.attendance = result.data; // Update attendance with the new data
      }
    });

    return await modal.present();
  }

  getAttendanceStats(attendanceArray: string[]): { presentCount: number; absentCount: number } {
    let presentCount = 0;
    let absentCount = 0;

    attendanceArray.forEach(status => {
      if (status.trim().toLowerCase() === 'absent') {
        absentCount++;
      } else {
        presentCount++;
      }
    });

    return { presentCount, absentCount };
  }
}
