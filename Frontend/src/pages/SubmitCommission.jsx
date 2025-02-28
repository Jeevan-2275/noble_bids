// import { postCommissionProof } from "@/store/slices/commissionSlice";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const SubmitCommission = () => {
//   const [proof, setProof] = useState("");
//   const [amount, setAmount] = useState("");
//   const [comment, setComment] = useState("");

//   const proofHandler = (e) => {
//     const file = e.target.files[0];
//     setProof(file);
//   };

//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.commission);
//   const handlePaymentProof = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("proof", proof);
//     formData.append("amount", amount);
//     formData.append("comment", comment);
//     dispatch(postCommissionProof(formData));
//   };

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//           <form
//             className="flex flex-col gap-5 w-full"
//             onSubmit={handlePaymentProof}
//           >
//             <h3 className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}>Upload Payment Proof</h3>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Amount</label>
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">
//                 Payment Proof (ScreenShot)
//               </label>
//               <input
//                 type="file"
//                 onChange={proofHandler}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Comment</label>
//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 rows={7}
//                 className="text-[16px] py-2 bg-transparent border-[1px] rounded-md px-1 border-stone-500 focus:outline-none"
//               />
//             </div>
//               <button
//                 className="bg-[#d6482b] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
//                 type="submit"
//               >
//                 {loading ? "Uploading..." : "Upload Payment Proof"}
//               </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SubmitCommission;




import { postCommissionProof } from "@/store/slices/commissionSlice";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const SubmitCommission = () => {
  const [proof, setProof] = useState(null);
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.commission);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setProof(file);
    }
  };

  const proofHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProof(file);
    }
  };

  const handlePaymentProof = (e) => {
    e.preventDefault();
    if (!proof || !amount) return;
    
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start"
    >
      <div className="bg-white mx-auto w-full max-w-2xl h-auto px-6 py-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-[#D6482B] mb-8 text-center">
          Submit Commission Payment
        </h3>

        <form onSubmit={handlePaymentProof} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg">
              Payment proof submitted successfully!
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Amount ($)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30 transition-all"
              placeholder="Enter payment amount"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Payment Proof
            </label>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                ${dragActive ? "border-[#D6482B] bg-[#FFF5F3]" : "border-gray-300 hover:border-gray-400"}
                ${proof ? "border-green-500 bg-green-50" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={proofHandler}
                className="hidden"
                accept="image/*"
              />
              
              <div className="space-y-4">
                <FaCloudUploadAlt className="mx-auto text-4xl text-[#D6482B]" />
                <p className="text-gray-600">
                  {proof ? (
                    <>
                      <span className="font-medium text-green-600">{proof.name}</span>
                      <span className="block text-sm mt-1">Click to change file</span>
                    </>
                  ) : (
                    <>
                      Drag & drop screenshot or{" "}
                      <span className="text-[#D6482B] font-medium">browse files</span>
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  (Supports PNG, JPG, JPEG up to 5MB)
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Additional Comments
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30 transition-all"
              placeholder="Add any additional information..."
              maxLength="500"
            />
            <div className="text-sm text-gray-500 text-right mt-1">
              {comment.length}/500
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#D6482B] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#C23A20] disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Payment Proof"
            )}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default SubmitCommission;