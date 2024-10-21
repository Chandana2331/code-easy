import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss'],
})
export class CalendarModalComponent {
  @Input() attendance: string = '';  // Initialize to an empty string
  attendanceArray: string[] = [];  // Initialize to an empty array

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Split attendance into an array when the component initializes
    this.attendanceArray = this.attendance ? this.attendance.split(',') : [];
  }

  closeModal() {
    this.modalController.dismiss(this.attendanceArray.join(',')); // Return updated attendance
  }

  toggleAttendance(index: number) {
    // Toggle attendance status between 'Present' and 'Absent'
    if (this.attendanceArray[index].trim().toLowerCase() === 'absent') {
      this.attendanceArray[index] = 'Present';
    } else {
      this.attendanceArray[index] = 'Absent';
    }
  }
}
