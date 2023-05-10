import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpTextComponent } from './up-text.component';

describe('UpTextComponent', () => {
  let component: UpTextComponent;
  let fixture: ComponentFixture<UpTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
