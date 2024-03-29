import { Component, OnInit, Input } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { Bidder } from '../../classes/bidder';
import { UserService } from '../../services/user.service';
import { TestPackages, Package, PackageType } from '../../classes/package';
import { Category, TestCategories } from '../../classes/category';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css'],
  animations: [
    trigger('increaseState', [
      state('inactive', style({
        color: '#000'
      })),
      state('active', style({
        color: '#16b730'
      })),
      // transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])]
})
export class ItemDisplayComponent implements OnInit {

  @Input() itemType;

  private bidConnetion: HubConnection;
  displayLogin = false;
  currentBidder: Bidder;
  connection: Boolean;
  categoryIndex = 0;
  PackageType = PackageType;
  categories: Category[] = [];
  items: Package[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.items = TestPackages.filter(p => p.packageType === this.itemType);
    this.categories = TestCategories.filter(c => (c.packageType === this.itemType && this.items.find(i => i.categoryID === c.id) || c.id < 0));
    this.userService._bidder.subscribe(bidder => {
      this.currentBidder = bidder;
      this.displayLogin = false;
    });
    this.establishConnection();
  }

  public placeBid(itemID, bidAmount): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('placeBid', itemID, bidAmount, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.userService.displayLogin = true;
    }
  }

  public purchaseItem(itemID): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('purchaseItem', itemID, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.userService.displayLogin = true;
    }
  }

  public buyNow(itemID): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('buyNow', itemID, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.userService.displayLogin = true;
    }
  }

  updateItem(itemID, bid, bidder) {
    const item = this.items.find(i => i.id === itemID);
    if (item) {
      item.currentBid = bid;
      item.currentWinner = bidder;
      item.state = 'active';
      setTimeout(() => item.state = 'inactive', 1000);
    }
  }

  updatePurchaseItem(itemID, bidder) {
    const item = this.items.find(i => i.id === itemID);
    if (item) {
      item.totalAvailable--;
    }
  }

  updateBuyNowItem(itemID, bidder) {
    const item = this.items.find(i => i.id === itemID);
    if (item) {
      item.currentBid = item.buyNowPrice;
      item.currentWinner = bidder;
      item.sold = true;
    }
  }

  categoryChange(index) {
    // if define category ID filter based off of ID. If category id < 0 then is all items category
    this.categoryIndex = index;
    if (this.categories[index].id > 0) {
      this.items = TestPackages.filter(item => item.categoryID === this.categories[index].id && item.packageType === this.itemType);
    } else {
      this.items = TestPackages.filter(item => item.packageType === this.itemType);
    }
  }

  establishConnection() {
    if (this.bidConnetion) {
      this.bidConnetion.stop();
    }

    this.bidConnetion = new HubConnection(environment.signalR.bidConnection);

    this.bidConnetion
      .start()
      .then(() => {
        this.connection = true;
      })
      .catch(err => console.log('Error while establishing connection :('));

    this.bidConnetion.on('sendBidsToAll', (itemID: number, currentBid: number, bidder: Bidder) => {
      this.updateItem(itemID, currentBid, bidder);
    });

    this.bidConnetion.on('sendPurchaseToAll', (itemID: number, bidder: Bidder) => {
      this.updatePurchaseItem(itemID, bidder);
    });

    this.bidConnetion.on('sendBuyNowToAll', (itemID: number, bidder: Bidder) => {
      this.updateBuyNowItem(itemID, bidder);
    });
  }
}
