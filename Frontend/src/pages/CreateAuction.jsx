// import { createAuction } from "@/store/slices/auctionSlice";
// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";

// const CreateAuction = () => {
//   const [image, setImage] = useState("");
//   const [imagePreview, setImagePreview] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [condition, setCondition] = useState("");
//   const [startingBid, setStartingBid] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");

//   const auctionCategories = [
//     "Electronics",
//     "Furniture",
//     "Art & Antiques",
//     "Jewelry & Watches",
//     "Automobiles",
//     "Real Estate",
//     "Collectibles",
//     "Fashion & Accessories",
//     "Sports Memorabilia",
//     "Books & Manuscripts",
//   ];

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setImage(file);
//       setImagePreview(reader.result);
//     };
//   };

//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.auction);

//   const handleCreateAuction = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("condition", condition);
//     formData.append("startingBid", startingBid);
//     formData.append("startTime", startTime);
//     formData.append("endTime", endTime);
//     dispatch(createAuction(formData));
//   };

//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated || user.role !== "Auctioneer") {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);

//   return (
//     <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
//       <h1
//         className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//       >
//         Create Auction
//       </h1>
//       <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//         <form
//           className="flex flex-col gap-5 w-full"
//           onSubmit={handleCreateAuction}
//         >
//           <p className="font-semibold text-xl md:text-2xl">Auction Detail</p>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">Category</label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               >
//                 <option value="">Select Category</option>
//                 {auctionCategories.map((element) => {
//                   return (
//                     <option key={element} value={element}>
//                       {element}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">Condition</label>
//               <select
//                 value={condition}
//                 onChange={(e) => setCondition(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               >
//                 <option value="">Select Condition</option>
//                 <option value="New">New</option>
//                 <option value="Used">Used</option>
//               </select>
//             </div>
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">Starting Bid</label>
//               <input
//                 type="number"
//                 value={startingBid}
//                 onChange={(e) => setStartingBid(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-2 border-stone-500 focus:outline-none px-2 rounded-md"
//                 rows={10}
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">
//                 Auction Starting Time
//               </label>
//               <DatePicker
//                 selected={startTime}
//                 onChange={(date) => setStartTime(date)}
//                 showTimeSelect
//                 timeFormat="HH:mm"
//                 timeIntervals={15}
//                 dateFormat={"MMMM d, yyyy h,mm aa"}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none w-full"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-1">
//               <label className="text-[16px] text-stone-600">
//                 Auction End Time
//               </label>
//               <DatePicker
//                 selected={endTime}
//                 onChange={(date) => setEndTime(date)}
//                 showTimeSelect
//                 timeFormat="HH:mm"
//                 timeIntervals={15}
//                 dateFormat={"MMMM d, yyyy h,mm aa"}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none w-full"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <label className="font-semibold text-xl md:text-2xl">
//               Auction Item Image
//             </label>
//             <div class="flex items-center justify-center w-full">
//               <label
//                 for="dropzone-file"
//                 class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//               >
//                 <div class="flex flex-col items-center justify-center pt-5 pb-6">
//                   {imagePreview ? (
//                     <img src={imagePreview} alt={title} className="w-44 h-auto"/>
//                   ) : (
//                     <>
//                       <svg
//                         class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 20 16"
//                       >
//                         <path
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                         />
//                       </svg>
//                     </>
//                   )}

//                   <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                     <span class="font-semibold">Click to upload</span> or drag
//                     and drop
//                   </p>
//                   <p class="text-xs text-gray-500 dark:text-gray-400">
//                     SVG, PNG, JPG or GIF (MAX. 800x400px)
//                   </p>
//                 </div>
//                 <input id="dropzone-file" type="file" class="hidden" onChange={imageHandler}/>
//               </label>
//             </div>
//           </div>
//           <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white w-[280px] mx-auto lg:w-[640px] my-4">{loading ? "Creating Auction..." : "Create Auction"}</button>
//         </form>
//       </div>
//     </article>
//   );
// };

// export default CreateAuction;






import { createAuction } from "@/store/slices/auctionSlice";
import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const CreateAuction = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null);

  const auctionCategories = [
    "Electronics",
    "Furniture",
    "Art & Antiques",
    "Jewelry & Watches",
    "Automobiles",
    "Real Estate",
    "Collectibles",
    "Fashion & Accessories",
    "Sports Memorabilia",
    "Books & Manuscripts",
  ];

  const imageHandler = (e) => {
    const file = e.target.files?.[0] || e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setFormErrors({ ...formErrors, image: "Please upload an image file" });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFormErrors({ ...formErrors, image: "File size must be less than 10MB" });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
      setFormErrors({ ...formErrors, image: null });
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    imageHandler(e);
  };

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required";
    if (!category) errors.category = "Category is required";
    if (!startingBid || startingBid < 0) errors.startingBid = "Invalid bid amount";
    if (!startTime) errors.startTime = "Start time is required";
    if (!endTime) errors.endTime = "End time is required";
    if (endTime <= startTime) errors.endTime = "End time must be after start time";
    if (!image) errors.image = "Image is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auction);

  const handleCreateAuction = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("condition", condition);
    formData.append("startingBid", startingBid);
    formData.append("startTime", startTime.toISOString());
    formData.append("endTime", endTime.toISOString());
    
    dispatch(createAuction(formData));
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "Auctioneer") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full px-5 pt-20 lg:pl-[320px] min-h-screen py-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#D6482B] mb-8 text-center">
          Create New Auction
        </h1>

        <form onSubmit={handleCreateAuction} className="space-y-8">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Auction Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  formErrors.title ? "border-red-500" : "border-gray-200"
                } focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30`}
                placeholder="Enter auction title"
              />
              {formErrors.title && (
                <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  formErrors.category ? "border-red-500" : "border-gray-200"
                } focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30`}
              >
                <option value="">Select Category</option>
                {auctionCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {formErrors.category && (
                <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Item Condition *
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30"
              >
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Starting Bid ($) *
              </label>
              <input
                type="number"
                value={startingBid}
                onChange={(e) => setStartingBid(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  formErrors.startingBid ? "border-red-500" : "border-gray-200"
                } focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30`}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
              {formErrors.startingBid && (
                <p className="text-red-500 text-sm mt-1">{formErrors.startingBid}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Detailed Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30"
              rows="5"
              placeholder="Describe the item in detail..."
              maxLength="1000"
            />
            <div className="text-sm text-gray-500 text-right mt-1">
              {description.length}/1000
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Auction Start Time *
              </label>
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  formErrors.startTime ? "border-red-500" : "border-gray-200"
                } focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30`}
                minDate={new Date()}
                placeholderText="Select start date/time"
              />
              {formErrors.startTime && (
                <p className="text-red-500 text-sm mt-1">{formErrors.startTime}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Auction End Time *
              </label>
              <DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  formErrors.endTime ? "border-red-500" : "border-gray-200"
                } focus:border-[#D6482B] focus:ring-2 focus:ring-[#D6482B]/30`}
                minDate={startTime || new Date()}
                placeholderText="Select end date/time"
              />
              {formErrors.endTime && (
                <p className="text-red-500 text-sm mt-1">{formErrors.endTime}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Item Image *
            </label>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                ${dragActive ? "border-[#D6482B] bg-[#FFF5F3]" : "border-gray-300"} 
                ${formErrors.image ? "border-red-500" : ""}
                ${imagePreview ? "border-green-500 bg-green-50" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={imageHandler}
                className="hidden"
                accept="image/*"
              />
              
              <div className="space-y-4">
                <FaCloudUploadAlt className="mx-auto text-4xl text-[#D6482B]" />
                {imagePreview ? (
                  <div className="mt-4">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="mx-auto max-h-48 rounded-lg shadow-sm"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Click to change image
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600">
                      Drag & drop images or{" "}
                      <span className="text-[#D6482B] font-medium">browse files</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      (Supports JPEG, PNG, WEBP up to 10MB)
                    </p>
                  </>
                )}
              </div>
            </div>
            {formErrors.image && (
              <p className="text-red-500 text-sm mt-2">{formErrors.image}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#D6482B] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-[#C23A20] disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Creating Auction...
              </>
            ) : (
              "Publish Auction"
            )}
          </motion.button>
        </form>
      </div>
    </motion.article>
  );
};

export default CreateAuction;