export class Bidder {
    constructor(newBidder?: any) {
        this.BidderNumber   = newBidder.BidderNumber || 999;
        this.FirstName      = newBidder.FirstName;
        this.LastName       = newBidder.LastName;
        this.PhoneNumber    = newBidder.PhoneNumber;
        this.Email          = newBidder.Email;
        this.Address        = newBidder.Address;
        this.displayName    = newBidder.displayName || false;
    }

    BidderNumber: number;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Address: Address;
    displayName: boolean;
}

export class Address {
    Street1: string;
    Street2: string;
    City: string;
    State: string;
    ZipCode: string;
}

export const TestBidders = [
    new Bidder({
        FirstName: 'Travis',
        LastName: 'Matthews',
        BidderNumber: 100,
        displayName: true
    }),
    new Bidder({
        FirstName: 'Michael',
        LastName: 'Cantrell',
        BidderNumber: 101,
        displayName: false
    }),
    new Bidder({
        FirstName: 'David',
        LastName: 'Knight',
        BidderNumber: 102,
        displayName: true
    })
];
