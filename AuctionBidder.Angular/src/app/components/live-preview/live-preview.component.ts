import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubConnection } from '@aspnet/signalr-client';
import { TestPackages } from '../../classes/package';
import { environment } from '../../../environments/environment';
import { Bidder } from '../../classes/bidder';

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.css']
})
export class LivePreviewComponent implements OnInit, OnDestroy {

  itemID: number;
  item: any;
  private subscription: any;
  private bidConnetion: HubConnection;
  connection: Boolean;
  packages = TestPackages;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.itemID = +params['id']; // (+) converts to int
    this.item = this.packages.find(p => p.id === this.itemID);
    this.establishConnection();
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateItem(bid, bidder) {
      this.item.currentBid = bid;
      this.item.currentWinner = bidder;
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
      if (itemID === this.itemID) {
        this.updateItem(currentBid, bidder);
      }
    });
}
