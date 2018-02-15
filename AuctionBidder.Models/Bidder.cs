using System;
using System.Net.Sockets;

namespace LiveAuctionBidder.Models
{
    public class Bidder
    {
        public int BidderNumber;
        public string FirstName;
        public string LastName;
        public string PhoneNumber;
        public string Email;
        public bool DisplayName;
        public Address Address;
    }
}
