import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaidLinkHomeComponent } from './plaid-link-home.component';

describe('PlaidLinkHomeComponent', () => {
  let component: PlaidLinkHomeComponent;
  let fixture: ComponentFixture<PlaidLinkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaidLinkHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaidLinkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
