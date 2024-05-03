import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showIcon', () => {
    component.showIcon();
    expect(component.showIcon).toBeTruthy();
  });

  it('should call getRandomNum', () => {
    component.getRandomNum(0, 524);
    expect(component.getRandomNum).toBeTruthy();
  });
});
