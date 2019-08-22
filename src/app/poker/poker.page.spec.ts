import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerPage } from './poker.page';

describe('PokerPage', () => {
  let component: PokerPage;
  let fixture: ComponentFixture<PokerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
