import { Component, OnInit, Input } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { Bidder } from '../../classes/bidder';
import { UserService } from '../../services/user.service';
import { TestPackages, Package, PackageTypes } from '../../classes/package';
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
  packageTypes = PackageTypes;
  categories: Category[] = [];
  items: Package[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.establishConnection();
    this.categories = TestCategories;
    this.items = TestPackages.filter(p => p.packageType === this.itemType);
    this.userService._bidder.subscribe(bidder => {
      this.currentBidder = bidder;
      this.displayLogin = false;
    });
  }

  public placeBid(itemID, bidAmount): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('placeBid', itemID, bidAmount, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.displayLogin = true;
    }
  }

  public purchaseItem(itemID): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('purchaseItem', itemID, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.displayLogin = true;
    }
  }

  public buyNow(itemID): void {
    if (this.currentBidder) {
      this.bidConnetion
        .invoke('buyNow', itemID, this.currentBidder)
        .catch(err => this.establishConnection());
    } else {
      this.displayLogin = true;
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

  getGoalPercentage(item) {
    return item.currentBid / item.goal * 100;
  }

  categoryChange(index) {
    if (index !== 0) {
      this.items = TestPackages.filter(item => item.categoryID === this.categories[index - 1].id && item.packageType === this.itemType);
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
