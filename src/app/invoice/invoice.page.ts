import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  invoiceData: any;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    const invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    if (invoiceId) {
      this.loadInvoiceData(invoiceId);
    } else {
      console.error('No invoice ID found in the route parameters.');
    }
  }

  loadInvoiceData(invoiceId: string) {
    this.invoiceService.getInvoiceDetails(invoiceId).subscribe(
      (data) => {
        console.log('Invoice data:', data); 
        this.invoiceData = data;
      },
      (error) => {
        console.error('Error fetching invoice data', error);
      }
    );
  }
}
