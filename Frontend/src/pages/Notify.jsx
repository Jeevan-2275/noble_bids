import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";
import { Navigate } from "react-router-dom";

const Notify = () => {
  const { allAuctions } = useSelector((state) => state.auction);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [notifyItems, setNotifyItems] = useState(() => {
    return JSON.parse(localStorage.getItem("notifyItems")) || [];
  });
  const [newItem, setNewItem] = useState("");
  const [notifiedItems, setNotifiedItems] = useState(() => {
    return new Set(JSON.parse(localStorage.getItem("notifiedItems")) || []);
  });
  const [notificationSupported, setNotificationSupported] = useState(true);
  const [lastCheckedAuctions, setLastCheckedAuctions] = useState([]);

  const userRole = isAuthenticated && user ? user.role : "non-bidder";

  useEffect(() => {
    localStorage.setItem("notifyItems", JSON.stringify(notifyItems));
    localStorage.setItem("notifiedItems", JSON.stringify([...notifiedItems]));
  }, [notifyItems, notifiedItems]);

  useEffect(() => {
    if (!("Notification" in window)) {
      setNotificationSupported(false);
      return;
    }

    Notification.requestPermission().then((permission) => {
      console.log("Notification permission:", permission);
    });

    const interval = setInterval(checkAuctionMatches, 5 * 1000);
    checkAuctionMatches();
    return () => clearInterval(interval);
  }, [allAuctions, notifyItems]);

  const checkAuctionMatches = () => {
    if (!notificationSupported || Notification.permission !== "granted") return;

    if (
      !allAuctions ||
      !Array.isArray(allAuctions) ||
      allAuctions.length === 0
    ) {
      setLastCheckedAuctions([]);
      return;
    }

    const currentAuctionTitles = allAuctions
      .filter((auction) => auction && typeof auction.title === "string")
      .map((auction) => auction.title.toLowerCase());
    const previousAuctionTitles = lastCheckedAuctions
      .filter((auction) => auction && typeof auction.title === "string")
      .map((auction) => auction.title.toLowerCase());

    notifyItems.forEach((item) => {
      const itemLower = item.toLowerCase();
      const isInCurrent = currentAuctionTitles.some((title) =>
        title.includes(itemLower)
      );
      const wasInPrevious = previousAuctionTitles.some((title) =>
        title.includes(itemLower)
      );

      if (isInCurrent && !wasInPrevious && !notifiedItems.has(item)) {
        const matchedAuction = allAuctions.find(
          (auction) =>
            auction &&
            typeof auction.title === "string" &&
            auction.title.toLowerCase().includes(itemLower)
        );
        if (matchedAuction) {
          try {
            const notification = new Notification("Auction Alert", {
              body: `${item} is now available in the auction: "${matchedAuction.title}"!`,
              icon: "https://img.freepik.com/free-vector/auction-online-concept_23-2148514040.jpg",
              tag: `auction-${item}`,
            });
            setNotifiedItems((prev) => new Set(prev).add(item));
            setTimeout(() => notification.close(), 5000);
          } catch (error) {
            console.error("Error sending notification:", error);
          }
        }
      }
    });

    setLastCheckedAuctions(allAuctions);
  };

  const handleAddNotifyItem = (e) => {
    e.preventDefault();
    if (newItem.trim() && !notifyItems.includes(newItem.trim())) {
      setNotifyItems([...notifyItems, newItem.trim()]);
      setNotifiedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(newItem.trim());
        return newSet;
      });
      setNewItem("");
    }
  };

  const handleRemoveNotifyItem = (item) => {
    setNotifyItems(notifyItems.filter((i) => i !== item));
    setNotifiedItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(item);
      return newSet;
    });
  };

  if (userRole !== "Bidder") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-orange-600 flex items-center justify-center">
            <IoMdNotifications className="h-10 w-10 text-orange-600 mr-2" />
            Notification Preferences
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Get real-time alerts when your tracked items appear in auctions
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <form onSubmit={handleAddNotifyItem} className="flex gap-2 mb-6">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item name (e.g., Laptop, Painting)"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Add Item
            </button>
          </form>

          <div className="space-y-2">
            {notifyItems.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-gray-500 text-sm">
                  No items being tracked yet
                </p>
              </div>
            ) : (
              notifyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-gray-50 rounded-md px-4 py-3"
                >
                  <span className="font-medium text-gray-700">{item}</span>
                  <button
                    onClick={() => handleRemoveNotifyItem(item)}
                    className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
