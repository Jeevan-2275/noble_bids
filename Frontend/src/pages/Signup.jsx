// import { register } from "@/store/slices/userSlice";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [username, setusername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState("");
//   const [password, setPassword] = useState("");
//   const [bankAccountName, setBankAccountName] = useState("");
//   const [bankAccountNumber, setBankAccountNumber] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [PhonePeAccountNumber, setPhonePeAccountNumber] = useState("");
//   const [paypalEmail, setPaypalEmail] = useState("");
//   const [profileImage, setProfileImage] = useState("");
//   const [profileImagePreview, setProfileImagePreview] = useState("");

//   const { loading, isAuthenticated } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("password", password);
//     formData.append("address", address);
//     formData.append("role", role);
//     formData.append("profileImage", profileImage);
//     role === "Auctioneer" &&
//       (formData.append("bankAccountName", bankAccountName),
//       formData.append("bankAccountNumber", bankAccountNumber),
//       formData.append("bankName", bankName),
//       formData.append("PhonePeAccountNumber", PhonePeAccountNumber),
//       formData.append("paypalEmail", paypalEmail));
//     dispatch(register(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, loading, isAuthenticated]);

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setProfileImagePreview(reader.result);
//       setProfileImage(file);
//     };
//   };

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Register
//           </h1>
//           <form
//             className="flex flex-col gap-5 w-full"
//             onSubmit={handleRegister}
//           >
//             <p className="font-semibold text-xl md:text-2xl">
//               Personal Details
//             </p>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Full Name</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setusername(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Phone</label>
//                 <input
//                   type="number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Address</label>
//                 <input
//                   type="text"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Role</label>
//                 <select
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Auctioneer">Auctioneer</option>
//                   <option value="Bidder">Bidder</option>
//                 </select>
//               </div>
//               <div className="flex flex-col sm:flex-1">
//                 <label className="text-[16px] text-stone-600">Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-1 gap-2">
//               <label className="text-[16px] text-stone-600">
//                 Profile Image
//               </label>
//               <div className="flex items-center gap-3">
//                 <img
//                   src={
//                     profileImagePreview
//                       ? profileImagePreview
//                       : "/imageHolder.jpg"
//                   }
//                   alt="profileImagePreview"
//                   className="w-14 h-14 rounded-full"
//                 />
//                 <input type="file" onChange={imageHandler} />
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <label className="font-semibold text-xl md:2xl flex flex-col">
//                 Payment Method Details{" "}
//                 <span className="text-[12px] text-stone-500">
//                   Fill Payment Details Only If you are registering as an
//                   Auctioneer
//                 </span>
//               </label>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[16px] text-stone-500">
//                   Bank Details
//                 </label>
//                 <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
//                   <select
//                     value={bankName}
//                     onChange={(e) => setBankName(e.target.value)}
//                     className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
//                     disabled={role === "Bidder"}
//                   >
//                     <option value="">Select Your Bank</option>
//                     <option value="Reserve Bank">Reserve Bank</option>
//                     <option value="Canara Bank">Canara Bank</option>
//                     <option value="Kotak Bank">Kotak Bank</option>
//                     <option value="Hdfc Bank">Hdfc Bank</option>
//                     <option value="SBI Bank">SBI Bank</option>
//                   </select>
//                   <input
//                     type="text"
//                     value={bankAccountNumber}
//                     placeholder="IBAN / IFSC"
//                     onChange={(e) => setBankAccountNumber(e.target.value)}
//                     className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
//                     disabled={role === "Bidder"}
//                   />
//                   <input
//                     type="text"
//                     value={bankAccountName}
//                     placeholder="Bank Account username"
//                     onChange={(e) => setBankAccountName(e.target.value)}
//                     className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
//                     disabled={role === "Bidder"}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-[16px] text-stone-600 font-semibold">
//                   PhonePe And Paypal Details
//                 </label>
//                 <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
//                   <input
//                     type="number"
//                     value={PhonePeAccountNumber}
//                     placeholder="PhonePe Account Number"
//                     onChange={(e) => setPhonePeAccountNumber(e.target.value)}
//                     className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
//                     disabled={role === "Bidder"}
//                   />
//                   <input
//                     type="email"
//                     value={paypalEmail}
//                     placeholder="Paypal Email"
//                     onChange={(e) => setPaypalEmail(e.target.value)}
//                     className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
//                     disabled={role === "Bidder"}
//                   />
//                 </div>
//               </div>
//             </div>

//             <button
//               className="bg-[#d6482b] w-[420px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto lg:w-[640px] my-4"
//               type="submit"
//               disabled={loading}
//             >
//               {loading && "Registering..."}
//               {!loading && "Register"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;





import { register } from "@/store/slices/userSlice";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiHome, FiLock, FiCreditCard, FiUpload } from "react-icons/fi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    password: "",
    bankAccountName: "",
    bankAccountNumber: "",
    bankName: "",
    PhonePeAccountNumber: "",
    paypalEmail: "",
    profileImage: null,
    profileImagePreview: ""
  });

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value && key !== "profileImagePreview") {
        data.append(key, value);
      }
    });
    dispatch(register(data));
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImagePreview: reader.result,
          profileImage: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#d6482b] to-orange-600 bg-clip-text text-transparent">
          Create Account
        </h1>

        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Profile Upload */}
          <div className="flex flex-col items-center mb-8">
            <label className="relative cursor-pointer group">
              <div className="w-32 h-32 rounded-full border-4 border-[#d6482b]/20 group-hover:border-[#d6482b]/40 transition-all overflow-hidden">
                <img
                  src={formData.profileImagePreview || "/default-avatar.png"}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <FiUpload className="text-[#d6482b] text-lg" />
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </label>
          </div>

          {/* Personal Info Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#d6482b] border-b pb-2 border-[#d6482b]/20">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent appearance-none"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Auctioneer">Auctioneer</option>
                  <option value="Bidder">Bidder</option>
                </select>
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          {formData.role === "Auctioneer" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-[#d6482b] border-b pb-2 border-[#d6482b]/20">
                Payment Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="Reserve Bank">Reserve Bank</option>
                    <option value="Canara Bank">Canara Bank</option>
                    <option value="Kotak Bank">Kotak Bank</option>
                    <option value="Hdfc Bank">HDFC Bank</option>
                    <option value="SBI Bank">SBI Bank</option>
                  </select>
                  <FiCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                  <FiCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="bankAccountNumber"
                    value={formData.bankAccountNumber}
                    onChange={handleInputChange}
                    placeholder="IBAN / IFSC Code"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    name="bankAccountName"
                    value={formData.bankAccountName}
                    onChange={handleInputChange}
                    placeholder="Account Holder Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    name="PhonePeAccountNumber"
                    type="number"
                    value={formData.PhonePeAccountNumber}
                    onChange={handleInputChange}
                    placeholder="PhonePe Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    name="paypalEmail"
                    type="email"
                    value={formData.paypalEmail}
                    onChange={handleInputChange}
                    placeholder="PayPal Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-[#d6482b] to-orange-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating Account...
              </div>
            ) : (
              "Register Now"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default SignUp;
