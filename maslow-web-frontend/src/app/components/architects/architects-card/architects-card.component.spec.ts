import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsCardComponent } from './architects-card.component';

describe('ArchitectsCardComponent', () => {
  let component: ArchitectsCardComponent;
  let fixture: ComponentFixture<ArchitectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
