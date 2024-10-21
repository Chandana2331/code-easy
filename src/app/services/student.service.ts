import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://api.yourschool.com/students'; 

  constructor(private http: HttpClient) { }

  getAttendance(studentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${studentId}/attendance`);
  }

  getMarks(studentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/marks/${studentId}`); 
  }
}
