import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  constructor() {}

  getStudentFees(studentId: string): Observable<any> {
    const studentFees = [
      {
        id: '1',
        name: 'Disha',
        feesPaid: [
          { date: '01-10-2024', amount: 1500 },
          { date: '01-11-2024', amount: 1000 }
        ]
      },
      {
        id: '2',
        name: 'Rahul',
        feesPaid: [
          { date: '01-09-2024', amount: 2000 },
          { date: '01-11-2024', amount: 1500 }
        ]
      },
      {
        id: '3',
        name: 'Sneha',
        feesPaid: [
          { date: '01-10-2024', amount: 1200 },
          { date: '01-11-2024', amount: 800 }
        ]
      }
    ];

    
    const student = studentFees.find(s => s.id === studentId);
    return of(student ? student : {});
  }
}
