import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentAuctionComponent } from './silent-auction.component';

describe('SilentAuctionComponent', () => {
  let component: SilentAuctionComponent;
  let fixture: ComponentFixture<SilentAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilentAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilentAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
