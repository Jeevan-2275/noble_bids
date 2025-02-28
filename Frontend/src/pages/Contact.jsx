// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigateTo = useNavigate();
//   const handleContactForm = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       name,
//       email,
//       phone,
//       subject,
//       message,
//     };

//     emailjs
//       .send(
//         "service_7jf21ry",
//         "template_7980yy8",
//         templateParams,
//         "1ep4SpwjmkSlZUuOw"
//       )
//       .then(() => {
//         toast.success("Thank You! Your message has been sent successfully.");
//         setLoading(false);
//         navigateTo("/");
//       })
//       .catch((err) => {
//         toast.error("Failed to send message.");
//         setLoading(false);
//       });
//   };

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//           <form
//             className="flex flex-col gap-5 w-full"
//             onSubmit={handleContactForm}
//           >
//             <h3
//               className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//             >
//               Contact Us
//             </h3>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Your Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Your Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Your Phone</label>
//               <input
//                 type="number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Subject</label>
//               <input
//                 type="text"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Message</label>
//               <textarea
//                 rows={7}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
//                 required
//               />
//             </div>

//             <button
//               className="bg-[#d6482b] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
//               type="submit"
//             >
//               {loading ? "Sending Message..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleContactForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "YOUR_EMAILJS_SERVICE_ID",
        "YOUR_EMAILJS_TEMPLATE_ID",
        templateParams,
        "YOUR_EMAILJS_PUBLIC_KEY"
      )
      .then(() => {
        toast.success("Thank You! Your message has been sent successfully.");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        toast.error("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-8 justify-start bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white mx-auto w-full max-w-2xl h-auto px-6 py-8 flex flex-col gap-6 items-center justify-center rounded-xl shadow-lg"
      >
        <div className="text-center mb-6">
          <h3 className="text-4xl font-bold text-[#D6482B] mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-600">We'd love to hear from you!</p>
        </div>

        <form className="w-full flex flex-col gap-6" onSubmit={handleContactForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6482B] focus:border-transparent transition-all"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6482B] focus:border-transparent transition-all"
                required
              />
            </motion.div>

            {/* Phone Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6482B] focus:border-transparent transition-all"
                required
              />
            </motion.div>

            {/* Subject Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <FiMessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6482B] focus:border-transparent transition-all"
                required
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D6482B] focus:border-transparent transition-all resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
            disabled={loading}
            className="bg-[#D6482B] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#b8381e] transition-colors flex items-center justify-center gap-2"
            type="submit"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-6 text-center text-gray-600">
          <p>Or reach us directly at<br />
          <a href="mailto:contact@example.com" className="text-[#D6482B] hover:underline">
           jeevankadam443@gmail.com
          </a></p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;