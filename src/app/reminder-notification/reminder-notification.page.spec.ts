import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderNotificationPage } from './reminder-notification.page';

describe('ReminderNotificationPage', () => {
  let component: ReminderNotificationPage;
  let fixture: ComponentFixture<ReminderNotificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
