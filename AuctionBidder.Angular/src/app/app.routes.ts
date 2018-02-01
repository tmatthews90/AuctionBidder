import { Routes } from '@angular/router';

import { LiveAuctionComponent } from './components/live-auction/live-auction.component';
import { PackagesComponent } from './components/packages/packages.component';
import { BidderGuard } from './guards/bidder.guard';
import { LoginComponent } from './components/login/login.component';
import { SuperSilentAuctionComponent } from './components/super-silent-auction/super-silent-auction.component';
import { SilentAuctionComponent } from './components/silent-auction/silent-auction.component';
import { MultiSellsComponent } from './components/multi-sells/multi-sells.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'live', component: LiveAuctionComponent },
    { path: 'silent', component: SilentAuctionComponent },
    { path: 'super-silent', component: SuperSilentAuctionComponent },
    { path: 'multisell', component: MultiSellsComponent },
    { path: 'packages', component: PackagesComponent },
    { path: 'login', component: LoginComponent }
];
