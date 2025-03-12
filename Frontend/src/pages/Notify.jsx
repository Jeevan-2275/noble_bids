"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";
import { Navigate } from "react-router-dom";
import "./NotifyPage.css";

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

  // Debug logs
  console.log("Notify Page - isAuthenticated:", isAuthenticated);
  console.log("Notify Page - user:", user);
  console.log("Notify Page - userRole:", userRole);
  console.log("Notify Page - notifyItems:", notifyItems);
  console.log("Notify Page - allAuctions:", allAuctions);

  if (userRole !== "Bidder") {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    localStorage.setItem("notifyItems", JSON.stringify(notifyItems));
    localStorage.setItem("notifiedItems", JSON.stringify([...notifiedItems]));
  }, [notifyItems, notifiedItems]);

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications");
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
    if (!notificationSupported || Notification.permission !== "granted") {
      console.log("Notifications not supported or permitted");
      return;
    }

    if (!allAuctions || !Array.isArray(allAuctions) || allAuctions.length === 0) {
      console.log("No valid auctions to check");
      setLastCheckedAuctions([]);
      return;
    }

    // Filter out invalid auctions and map to titles
    const currentAuctionTitles = allAuctions
      .filter((auction) => auction && typeof auction.title === "string")
      .map((auction) => auction.title.toLowerCase());
    const previousAuctionTitles = lastCheckedAuctions
      .filter((auction) => auction && typeof auction.title === "string")
      .map((auction) => auction.title.toLowerCase());

    console.log("Current Auction Titles:", currentAuctionTitles);
    console.log("Previous Auction Titles:", previousAuctionTitles);

    notifyItems.forEach((item) => {
      const itemLower = item.toLowerCase();
      const isInCurrent = currentAuctionTitles.some((title) => title.includes(itemLower));
      const wasInPrevious = previousAuctionTitles.some((title) => title.includes(itemLower));

      if (isInCurrent && !wasInPrevious && !notifiedItems.has(item)) {
        const matchedAuction = allAuctions.find(
          (auction) => auction && typeof auction.title === "string" && auction.title.toLowerCase().includes(itemLower)
        );
        if (matchedAuction) {
          try {
            const notification = new Notification("Auction Alert", {
              body: `${item} is now available in the auction: "${matchedAuction.title}"!`,
              icon: "https://img.freepik.com/free-vector/auction-online-concept_23-2148514040.jpg",
              tag: `auction-${item}`,
            });
            setNotifiedItems((prev) => new Set(prev).add(item));
            console.log(`Notification sent for: ${item}`);
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

  return (
    <div className="notify-page-container">
      <h1 className="notify-page-title">
        <IoMdNotifications className="inline-block mr-2 text-orange-600" />
        Notification Preferences
      </h1>
      <p className="notify-page-subtitle">Get alerted when your items are up for auction!</p>

      <div className="notify-section">
        {!notificationSupported ? (
          <p className="notify-warning">
            Notifications are not supported in this browser.
          </p>
        ) : Notification.permission !== "granted" ? (
          <p className="notify-warning">
            Please enable browser notifications for this feature to work.
          </p>
        ) : null}

        <form onSubmit={handleAddNotifyItem} className="notify-form">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="e.g., Laptop, Car"
            className="notify-input"
          />
          <button type="submit" className="notify-button">
            Add Item
          </button>
        </form>

        <div className="notify-items-list">
          {notifyItems.length === 0 ? (
            <p className="no-items">No items added yet.</p>
          ) : (
            notifyItems.map((item) => (
              <div key={item} className="notify-item">
                <span>{item}</span>
                <button
                  onClick={() => handleRemoveNotifyItem(item)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notify;