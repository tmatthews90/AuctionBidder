import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* PrimeNG */
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputSwitchModule } from 'primeng/inputswitch';

/* Components */
import { AppComponent } from './app.component';
import { LiveAuctionComponent } from './components/live-auction/live-auction.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PackagesComponent } from './components/packages/packages.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { BidderGuard } from './guards/bidder.guard';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { SilentAuctionComponent } from './components/silent-auction/silent-auction.component';
import { SuperSilentAuctionComponent } from './components/super-silent-auction/super-silent-auction.component';
import { MultiSellsComponent } from './components/multi-sells/multi-sells.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LiveAuctionComponent,
    NavbarComponent,
    PackagesComponent,
    LoginComponent,
    ItemDisplayComponent,
    SilentAuctionComponent,
    SuperSilentAuctionComponent,
    MultiSellsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ProgressBarModule,
    ReactiveFormsModule,
    TableModule,
    KeyFilterModule,
    InputSwitchModule,
    DialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, BidderGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
