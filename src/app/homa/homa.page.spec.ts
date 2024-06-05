import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomaPage } from './homa.page';

describe('HomaPage', () => {
  let component: HomaPage;
  let fixture: ComponentFixture<HomaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
