import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotellistComponent } from './viewhotellist.component';

describe('ViewhotellistComponent', () => {
  let component: ViewhotellistComponent;
  let fixture: ComponentFixture<ViewhotellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhotellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewhotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
