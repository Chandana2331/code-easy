import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-payment-details',
  templateUrl: './fee-payment-details.page.html',
  styleUrls: ['./fee-payment-details.page.scss'],
})
export class FeePaymentDetailsPage implements OnInit {
  feePayments = [
    { date: '01-10-2024', amount: 1500, transactionId: 'TXN1234567890' },
    { date: '01-11-2024', amount: 800, transactionId: 'TXN0987654321' },
    { date: '01-12-2024', amount: 1000, transactionId: 'TXN5647382910' }
  ];

  constructor() { }

  ngOnInit() { }
}
