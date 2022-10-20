import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationtestComponent } from './integrationtest.component';

describe('IntegrationtestComponent', () => {
  let component: IntegrationtestComponent;
  let fixture: ComponentFixture<IntegrationtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationtestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 2 - Integration test - Testing both logic component and template html
  it('Integration Test - should render title', () => {
    const fixture = TestBed.createComponent(IntegrationtestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // TODO: Fix the issue 
    expect(compiled.querySelector('.content span')?.textContent).toContain('app is running!');
  });
});
