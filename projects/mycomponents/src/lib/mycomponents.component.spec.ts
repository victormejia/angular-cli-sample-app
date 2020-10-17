import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentsComponent } from './mycomponents.component';

describe('MycomponentsComponent', () => {
  let component: MycomponentsComponent;
  let fixture: ComponentFixture<MycomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
