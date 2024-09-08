import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidityIconComponent } from './validity-icon.component';

describe('ValidityIconComponent', () => {
  let component: ValidityIconComponent;
  let fixture: ComponentFixture<ValidityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidityIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
