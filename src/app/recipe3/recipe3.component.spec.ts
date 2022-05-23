import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe3Component } from './recipe3.component';

describe('Recipe3Component', () => {
  let component: Recipe3Component;
  let fixture: ComponentFixture<Recipe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recipe3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recipe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
