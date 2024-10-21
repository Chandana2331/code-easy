import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-marks',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {
  marks: { subject: string; mark: number }[] = [];
  studentId: string | null = null;

  constructor(private route: ActivatedRoute, private menu: MenuController) {} 
  

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    this.fetchMarks(this.studentId); 
    
  }

  fetchMarks(studentId: string | null) {

    if (studentId) {
      this.marks = [
        { subject: 'Mathematics', mark: 85 },
        { subject: 'Science', mark: 90 },
        { subject: 'English', mark: 78 },
      ];
    }
  }

  openMenu() {
    this.menu.open('main-menu');
  }
}
