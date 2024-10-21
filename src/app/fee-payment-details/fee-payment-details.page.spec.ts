import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeePaymentDetailsPage } from './fee-payment-details.page';

describe('FeePaymentDetailsPage', () => {
  let component: FeePaymentDetailsPage;
  let fixture: ComponentFixture<FeePaymentDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePaymentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
