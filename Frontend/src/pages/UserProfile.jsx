// import Spinner from "@/custom-components/Spinner";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { user, isAuthenticated, loading } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <>
//             <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//               <img
//                 src={user.profileImage?.url}
//                 alt="/imageHolder.jpg"
//                 className="w-36 h-36 rounded-full"
//               />

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.username}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.email}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       defaultValue={user.phone}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.address}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Role
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.role}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Joined On
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.createdAt?.substring(0, 10)}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                 </div>
//               </div>

//               {user.role === "Auctioneer" && (
//                 <div className="mb-6 w-full">
//                   <h3 className="text-xl font-semibold mb-4">
//                     Payment Details
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Name
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.bankTransfer.bankName}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Account (IBAN)
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountNumber
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         User Name On Bank Account
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountName
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         PhonePeAccountNumber
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods?.phonepe?.honepeAccountNumber 
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Paypal Email
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.paypal.paypalEmail}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Other User Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {user.role === "Auctioneer" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Unpaid Commissions
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.unpaidCommission}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                   {user.role === "Bidder" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Auctions Won
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.auctionsWon}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Money Spent
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.moneySpent}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default UserProfile;




import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiHome, FiAward, FiCalendar } from "react-icons/fi";
import { BiRupee } from "react-icons/bi"; // Import Rupee icon

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <img
                src={user.profileImage?.url || '/default-avatar.png'}
                alt={user.username}
                className="w-32 h-32 rounded-full border-4 border-[#D6482B]/20 object-cover"
                onError={(e) => {
                  e.target.src = '/default-avatar.png';
                }}
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all">
                <FiUser className="text-[#D6482B]" />
              </button>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#D6482B] to-orange-600 bg-clip-text text-transparent">
              {user.username}
            </h1>
            <p className="text-gray-600 mt-2">{user.role}</p>
          </motion.div>

          {/* Personal Details Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-sm p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-[#D6482B]">
              <FiUser className="text-xl" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem icon={<FiMail />} label="Email" value={user.email} />
              <DetailItem icon={<FiPhone />} label="Phone" value={user.phone} />
              <DetailItem icon={<FiHome />} label="Address" value={user.address} />
              <DetailItem 
                icon={<FiCalendar />} 
                label="Joined On" 
                value={new Date(user.createdAt).toLocaleDateString()} 
              />
            </div>
          </motion.div>

          {/* Role-Specific Sections */}
          {user.role === "Auctioneer" && (
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-[#D6482B]">
                <BiRupee className="text-xl" /> {/* Rupee icon */}
                Payment Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailItem
                  label="Bank Name"
                  value={user.paymentMethods?.bankTransfer?.bankName || 'Not provided'}
                />
                <DetailItem
                  label="Bank Account (IBAN)"
                  value={user.paymentMethods?.bankTransfer?.bankAccountNumber || 'Not provided'}
                />
                <DetailItem
                  label="Account Holder"
                  value={user.paymentMethods?.bankTransfer?.bankAccountName || 'Not provided'}
                />
                <DetailItem
                  label="PhonePe Number"
                  value={user.paymentMethods?.phonepe?.phonepeAccountNumber || 'Not provided'}
                />
                <DetailItem
                  label="PayPal Email"
                  value={user.paymentMethods?.paypal?.paypalEmail || 'Not provided'}
                />
              </div>
            </motion.div>
          )}

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-[#D6482B]">
              <FiAward className="text-xl" />
              Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.role === "Auctioneer" && (
                <DetailItem
                  icon={<BiRupee />}
                  label="Unpaid Commissions"
                  value={`₹${user.unpaidCommission?.toLocaleString() || 0}`}
                />
              )}
              {user.role === "Bidder" && (
                <>
                  <DetailItem
                    label="Auctions Won"
                    value={user.auctionsWon || 0}
                  />
                  <DetailItem
                    icon={<BiRupee />}
                    label="Total Spent"
                    value={`₹${user.moneySpent?.toLocaleString() || 0}`}
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
    {icon && <span className="text-[#D6482B] text-xl mt-1">{icon}</span>}
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-gray-800 font-semibold">{value || 'Not available'}</p>
    </div>
  </div>
);

export default UserProfile;
