import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { GiHammerDrop } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  const [copiedId, setCopiedId] = useState(null);
  const [shareMenuId, setShareMenuId] = useState(null); // Track which auction’s menu is open

  const baseUrl = window.location.origin || "http://localhost:3000";

  const handleShare = (auctionId, e) => {
    e.stopPropagation(); // Prevent card click
    const auctionUrl = `${baseUrl}/auction/item/${auctionId}`;

    if (navigator.share) {
      // Use Web Share API if available
      navigator
        .share({
          title: "Check out this auction!",
          url: auctionUrl,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      // Toggle custom share menu
      setShareMenuId(shareMenuId === auctionId ? null : auctionId);
    }
  };

  const handleCopyLink = (auctionId) => {
    const auctionUrl = `${baseUrl}/auction/item/${auctionId}`;
    navigator.clipboard.writeText(auctionUrl);
    setCopiedId(auctionId);
    setShareMenuId(null); // Close menu
    setTimeout(() => setCopiedId(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <article className="max-w-7xl mx-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#d6482b] to-orange-600 bg-clip-text text-transparent mb-8"
          >
            <GiHammerDrop className="inline-block mr-4 mb-2" />
            Live Auctions
          </motion.h1>

          {allAuctions.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 text-gray-300">
                <GiHammerDrop className="inline-block" />
              </div>
              <h2 className="text-2xl text-gray-500">No active auctions found</h2>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4"
            >
              {allAuctions.map((auction) => (
                <motion.div
                  key={auction._id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Card
                    title={auction.title}
                    startTime={auction.startTime}
                    endTime={auction.endTime}
                    imgSrc={auction.image?.url}
                    startingBid={auction.startingBid}
                    id={auction._id}
                    currentBid={auction.currentBid}
                    bidsCount={auction.bids.length}
                  />
                  <button
                    onClick={(e) => handleShare(auction._id, e)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    title="Share auction"
                  >
                    <FiShare2 className="text-gray-600" />
                  </button>
                  {copiedId === auction._id && (
                    <span className="absolute top-12 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Link copied!
                    </span>
                  )}
                  {shareMenuId === auction._id && !navigator.share && (
                    <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg p-2 z-10">
                      <button
                        onClick={() => handleCopyLink(auction._id)}
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 w-full text-left"
                      >
                        <FaEnvelope /> Copy Link
                      </button>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(auctionUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 w-full"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(auctionUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 w-full"
                      >
                        <FaTwitter /> Twitter
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(auctionUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 w-full"
                      >
                        <FaFacebook /> Facebook
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </article>
      )}
    </div>
  );
};

export default Auctions;