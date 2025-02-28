// import React, { useState } from "react";
// import { RiAuctionFill } from "react-icons/ri";
// import { MdLeaderboard, MdDashboard } from "react-icons/md";
// import { SiGooglesearchconsole } from "react-icons/si";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { FaEye } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";


 

// const SideDrawer = () => {
//   const [show, setShow] = useState(false);

//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const handleLogout = () => {
//     dispatch(logout());
//   };
     

//     return (
//       <>
//         <div
//         onClick={() => setShow(!show)}
//         className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
//       >
//         <GiHamburgerMenu />
//       </div>   
//       <div
//         className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
//           show ? "left-0" : "left-[-100%]"
//         } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
//       >
//         <div className="relative">
//           <Link to={"/"}>
//             <h4 className="text-2xl font-semibold mb-4">
//               Noble<span className="text-[#D6482b]">Bid</span>
//             </h4>
//           </Link>
//           <ul className="flex flex-col gap-3">
//             <li>
//               <Link
//                 to={"/auctions"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <RiAuctionFill /> Auctions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/leaderboard"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <MdLeaderboard /> Leaderboard
//               </Link>
//             </li>
//             {isAuthenticated && user && user.role === "Auctioneer" && (
//               <>
//                 <li>
//                   <Link
//                     to={"/submit-commission"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <FaFileInvoiceDollar /> Submit Commission
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/create-auction"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <IoIosCreate /> Create Auction
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/view-my-auctions"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <FaEye /> View My Auctions
//                   </Link>
//                 </li>
//               </>
//             )}
//             {isAuthenticated && user && user.role === "Super Admin" && (
//               <li>
//                 <Link
//                   to={"/dashboard"}
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                 >
//                   <MdDashboard /> Dashboard
//                 </Link>
//               </li>
//             )}
//           </ul>
//           {!isAuthenticated ? (
//             <>
//               <div className="my-4 flex gap-2">
//                 <Link
//                   to={"/sign-up"}
//                   className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to={"/login"}
//                   className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
//                 <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
//                   Logout
//                 </button>
//               </div>
//             </>
//           )}
//           <hr className="mb-4 border-t-[#d6482b]" />
//           <ul className="flex flex-col gap-3">
//             {isAuthenticated && (
//               <li>
//                 <Link
//                   to={"/me"}
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                 >
//                   <FaUserCircle /> Profile
//                 </Link>
//               </li>
//             )}
//             <li>
//               <Link
//                 to={"/how-it-works-info"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <SiGooglesearchconsole /> How it works
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/about"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <BsFillInfoSquareFill /> About Us
//               </Link>
//             </li>
//           </ul>
//           <IoMdCloseCircleOutline
//             onClick={() => setShow(!show)}
//             className="absolute top-0 right-4 text-[28px] sm:hidden"
//           />
//         </div>

//         <div>
//           <div className="flex gap-2 items-center mb-2">
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
//             >
//               <FaFacebook />
//             </Link>
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
//             >
//               <RiInstagramFill />
//             </Link>
//           </div>
//           <Link
//             to={"/contact"}
//             className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//           >
//             Contact Us
//           </Link>
//           <p className="text-stone-400">&copy; NobleBid, LLC.</p>
//           <p className="text-stone-500">
//             Degined By{" "}
//             <Link
//               to={"/"}
//               className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//             >
//                Jeevan Kadam
//             </Link>
//           </p>
//         </div>
//       </div>
//          </>
//     );
//   };
//   export default SideDrawer;


"use client"

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

const SideDrawer = () => {
  const [show, setShow] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  const { isAuthenticated, user } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const NavLink = ({ to, icon, label }) => {
    const isActive = activeLink === to
    return (
      <Link
        to={to}
        onClick={() => {
          setActiveLink(to)
          setShow(false)
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
    )
  }

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
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm" onClick={() => setShow(false)} />
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
            <NavLink to="/leaderboard" icon={<MdLeaderboard />} label="Leaderboard" />

            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <NavLink to="/submit-commission" icon={<FaFileInvoiceDollar />} label="Submit Commission" />
                <NavLink to="/create-auction" icon={<IoIosCreate />} label="Create Auction" />
                <NavLink to="/view-my-auctions" icon={<FaEye />} label="View My Auctions" />
              </>
            )}

            {isAuthenticated && user && user.role === "Super Admin" && (
              <NavLink to="/dashboard" icon={<MdDashboard />} label="Dashboard" />
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
            {isAuthenticated && <NavLink to="/me" icon={<FaUserCircle />} label="Profile" />}
            <NavLink to="/how-it-works-info" icon={<SiGooglesearchconsole />} label="How it works" />
            <NavLink to="/about" icon={<BsFillInfoSquareFill />} label="About Us" />
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
              <Link to="/" className="font-medium hover:text-[#d6482b] transition-all duration-200">
                Jeevan Kadam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideDrawer



