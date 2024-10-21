import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = 'http://localhost/code_easy_api';

  constructor(private http: HttpClient) {}

  getInvoiceDetails(invoiceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getInvoice.php?invoiceId=${invoiceId}`);
  }
}
