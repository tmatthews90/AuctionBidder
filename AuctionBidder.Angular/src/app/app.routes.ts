import { Routes } from '@angular/router';

import { LiveAuctionComponent } from './components/live-auction/live-auction.component';
import { PackagesComponent } from './components/packages/packages.component';
import { BidderGuard } from './guards/bidder.guard';
import { SilentAuctionComponent } from './components/silent-auction/silent-auction.component';
import { MultiSellsComponent } from './components/multi-sells/multi-sells.component';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'live', component: LiveAuctionComponent },
    { path: 'live/:id', component: LivePreviewComponent },
    { path: 'silent', component: SilentAuctionComponent },
    { path: 'multisell', component: MultiSellsComponent },
    { path: 'packages', component: PackagesComponent },
];
