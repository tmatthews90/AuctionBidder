import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSellsComponent } from './multi-sells.component';

describe('MultiSellsComponent', () => {
  let component: MultiSellsComponent;
  let fixture: ComponentFixture<MultiSellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
