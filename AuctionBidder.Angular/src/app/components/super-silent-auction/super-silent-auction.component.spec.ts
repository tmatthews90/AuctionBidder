import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSilentAuctionComponent } from './super-silent-auction.component';

describe('SuperSilentAuctionComponent', () => {
  let component: SuperSilentAuctionComponent;
  let fixture: ComponentFixture<SuperSilentAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSilentAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSilentAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
