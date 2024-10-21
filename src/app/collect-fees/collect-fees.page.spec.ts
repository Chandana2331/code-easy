import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectFeesPage } from './collect-fees.page';

describe('CollectFeesPage', () => {
  let component: CollectFeesPage;
  let fixture: ComponentFixture<CollectFeesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
