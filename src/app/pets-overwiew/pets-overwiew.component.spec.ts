import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsOverwiewComponent } from './pets-overwiew.component';

describe('PetsOverwiewComponent', () => {
  let component: PetsOverwiewComponent;
  let fixture: ComponentFixture<PetsOverwiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsOverwiewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsOverwiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
