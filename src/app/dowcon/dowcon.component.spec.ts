import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowconComponent } from './dowcon.component';

describe('DowconComponent', () => {
  let component: DowconComponent;
  let fixture: ComponentFixture<DowconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
