import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildquizComponent } from './buildquiz.component';

describe('BuildquizComponent', () => {
  let component: BuildquizComponent;
  let fixture: ComponentFixture<BuildquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
