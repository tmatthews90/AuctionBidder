using Microsoft.AspNetCore.SignalR;
using LiveAuctionBidder.Models;

namespace LiveAuctionBidder
{
    public class BidHub : Hub
    {
        public void PlaceBid(int itemID, int bidAmount, Bidder bidder)
        {
            Clients.All.InvokeAsync("sendBidsToAll", itemID, bidAmount, bidder);
        }

        public void PurchaseItem(int itemID, Bidder bidder)
        {
            Clients.All.InvokeAsync("sendPurchaseToAll", itemID, bidder);
        }

        public void BuyNow(int itemID, Bidder bidder)
        {
            Clients.All.InvokeAsync("sendBuyNowToAll", itemID, bidder);
        }
    }
}
