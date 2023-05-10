import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowcardComponent } from './dowcard.component';

describe('DowcardComponent', () => {
  let component: DowcardComponent;
  let fixture: ComponentFixture<DowcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
