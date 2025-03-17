

import { useState, useEffect } from "react"
import { RiAuctionFill, RiInstagramFill } from "react-icons/ri"
import { MdLeaderboard, MdDashboard } from "react-icons/md"
import { SiGooglesearchconsole } from "react-icons/si"
import { BsFillInfoSquareFill } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { IoIosCreate } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { FaFileInvoiceDollar } from "react-icons/fa6"
import { FaEye } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/store/slices/userSlice"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { IoMdNotifications } from "react-icons/io";


const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const NavLink = ({ to, icon, label }) => {
    const isActive = activeLink === to;
    return (
      <Link
        to={to}
        onClick={() => {
          setActiveLink(to);
          setShow(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-[#D6482B]/10 to-[#D6482B]/5 text-[#D6482B] font-bold border-l-4 border-[#D6482B]"
            : "hover:bg-[#f0ebe4] text-gray-700 font-medium"
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 z-50 bg-gradient-to-r from-[#D6482B] to-[#e05e43] text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden"
        aria-label="Toggle menu"
      >
        {show ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {show && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setShow(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-[100%] sm:w-[300px] bg-white h-full fixed top-0 z-50 ${
          show ? "left-0" : "-left-full"
        } transition-all duration-300 shadow-2xl lg:shadow-md lg:left-0 overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link to={"/"} className="mb-8">
            <h4 className="text-3xl font-bold">
              Noble<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>

          {/* Main Navigation */}
          <div className="space-y-1.5 mb-6">
            <NavLink to="/auctions" icon={<RiAuctionFill />} label="Auctions" />
            <NavLink
              to="/leaderboard"
              icon={<MdLeaderboard />}
              label="Leaderboard"
            />

            {isAuthenticated && user && user.role === "Bidder" && (
              <>
<NavLink to="/notify" icon={<IoMdNotifications />} label="Notify Me" />
</>
            )}

            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <NavLink
                  to="/submit-commission"
                  icon={<FaFileInvoiceDollar />}
                  label="Submit Commission"
                />
                <NavLink
                  to="/create-auction"
                  icon={<IoIosCreate />}
                  label="Create Auction"
                />
                <NavLink
                  to="/view-my-auctions"
                  icon={<FaEye />}
                  label="View My Auctions"
                />
              </>
            )}

            {isAuthenticated && user && user.role === "Super Admin" && (
              <NavLink
                to="/dashboard"
                icon={<MdDashboard />}
                label="Dashboard"
              />
            )}
          </div>

          {/* Auth Buttons */}
          {!isAuthenticated ? (
            <div className="flex flex-col gap-3 mb-8">
              <Link
                to="/sign-up"
                className="bg-gradient-to-r from-[#D6482B] to-[#e05e43] text-white font-semibold py-2.5 px-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="border-2 border-[#DECCBE] text-[#D6482B] font-semibold py-2.5 px-4 rounded-lg text-center hover:bg-[#f8f4f0] transition-all duration-200"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="mb-8">
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#D6482B] to-[#e05e43] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Logout
              </button>
            </div>
          )}

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

          {/* Secondary Navigation */}
          <div className="space-y-1.5 mb-auto">
            {isAuthenticated && (
              <NavLink to="/me" icon={<FaUserCircle />} label="Profile" />
            )}
            <NavLink
              to="/how-it-works-info"
              icon={<SiGooglesearchconsole />}
              label="How it works"
            />
            <NavLink
              to="/about"
              icon={<BsFillInfoSquareFill />}
              label="About Us"
            />
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6">
            <div className="flex gap-3 mb-4">
              <Link
                to="/"
                className="bg-gray-100 text-[#D6482B] p-2.5 rounded-full hover:bg-gray-200 transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to="/"
                className="bg-gray-100 text-[#D6482B] p-2.5 rounded-full hover:bg-gray-200 transition-all duration-200"
                aria-label="Instagram"
              >
                <RiInstagramFill size={20} />
              </Link>
            </div>

            <Link
              to="/contact"
              className="text-gray-600 font-medium hover:text-[#d6482b] transition-all duration-200 block mb-2"
            >
              Contact Us
            </Link>

            <p className="text-gray-500 text-sm">&copy; NobleBid, LLC.</p>
            <p className="text-gray-500 text-sm mt-1">
              Designed By{" "}
              <Link
                to="/"
                className="font-medium hover:text-[#d6482b] transition-all duration-200"
              >
                Jeevan Kadam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
