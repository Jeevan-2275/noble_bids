// import { login } from "@/store/slices/userSlice";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated } = useSelector((state) => state.user);

//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, isAuthenticated, loading]);

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] sm:h-[450px]">
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Login
//           </h1>
//           <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <button
//               className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
//               type="submit"
//             >
//               {loading ? "Logging In..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;







import { login } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiLoader } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#d6482b] mb-2">Welcome Back</h1>
          <p className="text-gray-600">Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#d6482b] focus:outline-none focus:ring-2 focus:ring-[#d6482b]/50 transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:border-[#d6482b] focus:outline-none focus:ring-2 focus:ring-[#d6482b]/50 transition-all"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#d6482b] transition-colors"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full bg-[#d6482b] hover:bg-[#b8381e] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {loading ? (
              <FiLoader className="animate-spin h-5 w-5" />
            ) : (
              "Sign In"
            )}
          </button>

          <div className="text-center mt-4">
            <a
              href="/forgot-password"
              className="text-sm text-[#d6482b] hover:text-[#b8381e] transition-colors"
            >
              Forgot Password?
            </a>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-[#d6482b] hover:text-[#b8381e] font-semibold transition-colors"
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;