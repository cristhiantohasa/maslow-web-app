import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLastProjectComponent } from './view-last-project.component';

describe('ViewLastProjectComponent', () => {
  let component: ViewLastProjectComponent;
  let fixture: ComponentFixture<ViewLastProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLastProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLastProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
