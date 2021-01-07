import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountshellComponent } from './accountshell.component';

describe('AccountshellComponent', () => {
  let component: AccountshellComponent;
  let fixture: ComponentFixture<AccountshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
