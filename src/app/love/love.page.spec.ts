import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LovePage } from './love.page';

describe('LovePage', () => {
  let component: LovePage;
  let fixture: ComponentFixture<LovePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
