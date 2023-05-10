import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcardComponent } from './upcard.component';

describe('UpcardComponent', () => {
  let component: UpcardComponent;
  let fixture: ComponentFixture<UpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
