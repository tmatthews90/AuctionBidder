import { Bidder } from './bidder';

export class Package {

    constructor(obj?: any) {
        this.id =               ('id' in obj ? obj.id : '');
        this.name =             ('name' in obj ? obj.name : '');
        this.description =      ('description' in obj ? obj.description : '');
        this.bidIncrement =     ('bidIncrement' in obj ? obj.bidIncrement : '');
        this.currentBid =       ('currentBid' in obj ? obj.currentBid : '');
        this.currentWinner =    ('currentWinner' in obj ? obj.currentWinner : null);
        this.value =            ('value' in obj ? obj.value : '');
        this.minimumBid =       ('minimumBid' in obj ? obj.minimumBid : obj.bidIncrement || 1);
        this.buyNowPrice =      ('buyNowPrice' in obj ? obj.buyNowPrice : '');
        this.packageType =      ('packageType' in obj ? obj.packageType : PackageType.Silent);
        this.totalAvailable =   ('totalAvailable' in obj ? obj.totalAvailable : 1);
        this.available =        ('available' in obj ? obj.available : false);
        this.sold =             ('sold' in obj ? obj.sold : false);
        this.goal =             ('goal' in obj ? obj.goal : -1);
        this.imageUrl =         ('imageUrl' in obj ? obj.imageUrl : null);
        this.categoryID =       ('categoryID' in obj ? obj.categoryID : null);
        this.state =            'inactive';
    }

    id: number;
    name: string;
    description: string;
    bidIncrement: number;
    buyNowPrice: number;
    minimumBid: number;
    value: number;
    currentBid: number;
    currentWinner: Bidder;
    packageType: PackageType;
    totalAvailable: number;
    available: boolean;
    imageUrl: string;
    categoryID: number;
    sold: boolean;
    state: string;
    timeAvailable: string;
    timeEnd: string;
    goal: number;
}

export enum PackageType {
    Live = 'Live',
    Silent = 'Silent',
    MultiSale = 'Multisale'
}

export const TestPackages = [
    new Package({
        id: 100,
        name: 'Flying Solo',
        description: 'One hour private plane flight over the shore or over your house. Take an aerial shot of your home!',
        imageUrl: 'https://disciplesofflight.com/wp-content/uploads/2015/09/Cessna_172_Skyhawk.jpg',
        bidIncrement: 250,
        currentBid: 500,
        currentWinner: null,
        packageType: PackageType.Live,
        available: true,
        goal: 2000
    }),
    new Package({
        id: 200,
        name: 'Tell Me More',
        description: 'Behind-the-scenes tour and taping of a radio program (in this case, it was NPR’s Tell Me More)',
        currentBid: 2000,
        bidIncrement: 500,
        currentWinner: null,
        packageType: PackageType.Live,
        available: true,
        goal: 10000
    }),
    new Package({
        id: 300,
        name: 'Wine and Dine',
        description: 'Bottle of wine and two crystall glasses with movie night popcorn.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        available: true,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 301,
        name: 'Autographed Football',
        description: 'Football signed by Dak Prescott.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        available: true,
        categoryID: 1002,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 302,
        name: 'Backyard BBQ',
        description: 'Grill mats, grilling utensils, BBQ sauces and a grill apron.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        categoryID: 1001,
        available: true,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 303,
        name: 'Kids Painting',
        description: 'Painting from 5th grade class.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        available: true,
        categoryID: 1004,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 304,
        name: 'Apple iPad',
        description: 'Brand new iPad with smart case.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        available: true,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 305,
        name: 'Dog Basket',
        description: 'Assorted toys and dog treats for pet.',
        currentBid: 8,
        bidIncrement: 2,
        currentWinner: null,
        categoryID: 1001,
        available: true,
        packageType: PackageType.Silent
    }),
    new Package({
        id: 400,
        name: 'Shhhhh. Super Silent Item here.',
        description: 'So silent we can\'t event tell you what it is.',
        currentBid: 82,
        bidIncrement: 2,
        buyNowPrice: 200,
        available: true,
        currentWinner: null,
        categoryID: 1005
    }),
    new Package({
        id: 500,
        name: 'Couples Wine Retreat',
        description: 'Five days / four nights for two couples in Bordeaux chateaus with behind-the-scene tours and VIP wine tastings',
        currentBid: 0,
        bidIncrement: 2500,
        currentWinner: null,
        available: false,
        packageType: PackageType.Live,
        goal: 20000
    }),
    new Package({
        id: 600,
        name: 'Wine Pull',
        buyNowPrice: 20,
        totalAvailable: 35,
        available: true,
        packageType: PackageType.MultiSale
    }),
    new Package({
        id: 700,
        name: 'Whiskey Pull',
        buyNowPrice: 40,
        available: true,
        totalAvailable: 19,
        packageType: PackageType.MultiSale
    }),
    new Package({
        id: 800,
        name: 'Gift Card Pull',
        buyNowPrice: 25,
        available: true,
        totalAvailable: 0,
        packageType: PackageType.MultiSale
    })
];
