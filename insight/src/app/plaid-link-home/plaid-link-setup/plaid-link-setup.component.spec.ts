import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaidLinkSetupComponent } from './plaid-link-setup.component';

describe('PlaidLinkSetupComponent', () => {
  let component: PlaidLinkSetupComponent;
  let fixture: ComponentFixture<PlaidLinkSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaidLinkSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaidLinkSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
