import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  constructor() {}

  private studentMarks = [
    { id: '1', name: 'Disha', marks: 85 },
    { id: '2', name: 'Rahul', marks: 78 },
    { id: '3', name: 'Sneha', marks: 92 }
  ];

  getStudentMarks(): Observable<any> {
    return of(this.studentMarks);
  }

  addStudentMark(student: any): Observable<any> {
    this.studentMarks.push(student);
    return of(this.studentMarks);
  }

  updateStudentMark(studentId: string, marks: number): Observable<any> {
    const student = this.studentMarks.find(s => s.id === studentId);
    if (student) {
      student.marks = marks;
    }
    return of(student);
  }

  deleteStudentMark(studentId: string): Observable<any> {
    this.studentMarks = this.studentMarks.filter(s => s.id !== studentId);
    return of(this.studentMarks);
  }
}
