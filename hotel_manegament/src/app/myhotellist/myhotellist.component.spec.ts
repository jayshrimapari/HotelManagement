import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhotellistComponent } from './myhotellist.component';

describe('MyhotellistComponent', () => {
  let component: MyhotellistComponent;
  let fixture: ComponentFixture<MyhotellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhotellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyhotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
