import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourceComponent } from './addcource.component';

describe('AddcourceComponent', () => {
  let component: AddcourceComponent;
  let fixture: ComponentFixture<AddcourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
