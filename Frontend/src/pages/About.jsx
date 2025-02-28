// import React from "react";

// const About = () => {
//   const values = [
//     {
//       id: 1,
//       title: "Integrity",
//       description:
//         "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
//     },
//     {
//       id: 2,
//       title: "Innovation",
//       description:
//         "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
//     },
//     {
//       id: 3,
//       title: "Community",
//       description:
//         "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
//     },
//     {
//       id: 4,
//       title: "Customer Focus",
//       description:
//         "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
//     },
//   ];

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
//         <div>
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             About Us
//           </h1>
//           <p className="text-xl text-stone-600">
//             Welcome to NobleBid, the ultimate destination for online auctions
//             and bidding excitement. Founded in 2024, we are dedicated to
//             providing a dynamic and user-friendly platform for buyers and
//             sellers to connect, explore, and transact in a secure and seamless
//             environment.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Mission
//           </h3>
//           <p className="text-xl text-stone-600">
//             At NobleBid, our mission is to revolutionize the way people buy and
//             sell items online. We strive to create an engaging and trustworthy
//             marketplace that empowers individuals and businesses to discover
//             unique products, make informed decisions, and enjoy the thrill of
//             competitive bidding.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Values
//           </h3>
//           <ul className="list-inside">
//             {values.map((element) => {
//               return (
//                 <li className="text-xl text-stone-600 mb-2" key={element.id}>
//                   <span className="text-black font-bold">{element.title}</span>:{" "}
//                   {element.description}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Story
//           </h3>
//           <p className="text-xl text-stone-600">
//             Founded by CodeWithJeevan, NobleBid was born out of a passion for
//             connecting people with unique and valuable items. With years of
//             experience in the auction industry, our team is committed to
//             creating a platform that offers an unparalleled auction experience
//             for users worldwide.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Join Us
//           </h3>
//           <p className="text-xl text-stone-600">
//             Whether you're looking to buy, sell, or simply explore, NobleBid
//             invites you to join our growing community of auction enthusiasts.
//             Discover new opportunities, uncover hidden gems, and experience the
//             thrill of winning your next great find.
//           </p>
//         </div>
//         <div>
//           <p className="text-[#d6482b] text-xl font-bold mb-3">
//             Thank you for choosing NobleBid. We look forward to being a part of
//             your auction journey!
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;



import React from "react";
import { FiHeart, FiShield, FiUsers, FiStar, FiClock, FiAnchor } from "react-icons/fi";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description: "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
      icon: <FiShield className="w-8 h-8 text-[#d6482b]" />,
    },
    {
      id: 2,
      title: "Innovation",
      description: "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
      icon: <FiStar className="w-8 h-8 text-[#d6482b]" />,
    },
    {
      id: 3,
      title: "Community",
      description: "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
      icon: <FiUsers className="w-8 h-8 text-[#d6482b]" />,
    },
    {
      id: 4,
      title: "Customer Focus",
      description: "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
      icon: <FiHeart className="w-8 h-8 text-[#d6482b]" />,
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#d6482b] relative pb-4">
            About Us
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#d6482b]"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to NobleBid, the ultimate destination for online auctions and bidding excitement. 
            Founded in 2024, we are dedicated to providing a dynamic and user-friendly platform for 
            buyers and sellers to connect, explore, and transact in a secure and seamless environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FiAnchor className="text-[#d6482b]" />
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At NobleBid, our mission is to revolutionize the way people buy and sell items online. 
              We strive to create an engaging and trustworthy marketplace that empowers individuals 
              and businesses to discover unique products, make informed decisions, and enjoy the 
              thrill of competitive bidding.
            </p>
          </div>
          <div className="h-64 bg-gradient-to-r from-[#d6482b] to-orange-400 rounded-xl transform rotate-1 shadow-xl"></div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Core Values
            <span className="block w-16 h-1 bg-[#d6482b] mx-auto mt-2"></span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((element) => (
              <div 
                key={element.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">
                  {element.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#d6482b] transition-colors">
                  {element.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-[#d6482b]/10 p-8 rounded-xl space-y-6">
          <h3 className="text-3xl font-bold text-gray-800">
            <span className="border-l-4 border-[#d6482b] pl-3">Our Story</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded by CodeWithJeevan, NobleBid was born out of a passion for connecting people with 
            unique and valuable items. With years of experience in the auction industry, our team is 
            committed to creating a platform that offers an unparalleled auction experience for users 
            worldwide.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 py-12">
          <h3 className="text-3xl font-bold text-gray-800">
            Join Our Community
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to buy, sell, or simply explore, NobleBid invites you to join 
            our growing community of auction enthusiasts. Discover new opportunities, uncover 
            hidden gems, and experience the thrill of winning your next great find.
          </p>
          <div className="mt-6">
            <button className="bg-[#d6482b] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b53a22] transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center border-t-2 border-[#d6482b]/20 pt-12">
          <p className="text-xl font-semibold text-[#d6482b] italic max-w-3xl mx-auto leading-relaxed">
            "Thank you for choosing NobleBid. We look forward to being a part of your auction journey!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;