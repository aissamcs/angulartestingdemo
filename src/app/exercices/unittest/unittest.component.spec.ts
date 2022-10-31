import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnittestComponent } from './unittest.component';

describe('UnittestComponent', () => {
  let component: UnittestComponent;
  let fixture: ComponentFixture<UnittestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnittestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnittestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // 1 - Unit test 
   it(`Unit Test - should have as title 'Angular' on load`, () => {
    const fixture = TestBed.createComponent(UnittestComponent);
    const component = fixture.componentInstance;
    // TODO: Fix the issue 
    expect(component.getLanguage()).toEqual('Angular');
  });

});
