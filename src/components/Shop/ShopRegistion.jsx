// import React, { useState } from "react";

// const ShopRegistion = () => {
//   // State for form data
//   const [formData, setFormData] = useState({
//     shopName: "",
//     ownerName: "",
//     phone: "",
//     address: "",
//   });

//   // State for submission status
//   const [submitted, setSubmitted] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // Replace with your API call
//     console.log("Form submitted:", formData);
//   };

//   // Success message after submission
//   if (submitted) {
//     return (
//       <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
//           <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
//           <p className="text-gray-600">
//             We've received your registration. We'll contact you within 24 hours
//             to complete the setup.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Main page with all sections
//   return (
//     <div className="bg-yellow-100 min-h-screen flex flex-col items-center px-4">
//       {/* Header Section */}
//       <div className="text-center mb-8 w-full max-w-4xl">
//         <h1 className="text-4xl font-bold">
//           <span className="text-green-500">Fas</span>
//           <span className="text-red-500">ty</span>
//         </h1>
//         <p className="text-black text-2xl mt-2">
//           India's Ultra-Fast Delivery App
//         </p>
//         <p className="text-gray-700 mt-2">
//           Join 10,000+ happy shop owners | Increase your sales by 50%
//         </p>
//         <p className="text-red-500 font-bold mt-2">
//           Save your shop from closing with Fasty!
//         </p>
//         <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 mt-4">
//           Register Now
//         </button>
//       </div>

//       {/* Main Section - Testimonials and Tips */}
//       <div className="p-6 bg-white w-full max-w-4xl mb-8">
//         <h2 className="text-3xl font-bold text-center mb-6 text-green-500">
//           Why Join Fasty?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Testimonial Card 1 */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//             <img
//               src="https://via.placeholder.com/300x200"
//               alt="Happy Shop Owner"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <h3 className="text-xl font-semibold mt-4">Ramesh Kumar</h3>
//             <p className="text-gray-600 mt-2">
//               "Quick commerce band karwa raha tha meri dukaan, par Fasty ne
//               mujhe nayi umeed di. Ab main pehle se zyada kama raha hoon!"
//             </p>
//           </div>
//           {/* Testimonial Card 2 */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//             <img
//               src="https://via.placeholder.com/300x200"
//               alt="Happy Shop Owner"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <h3 className="text-xl font-semibold mt-4">Priya Sharma</h3>
//             <p className="text-gray-600 mt-2">
//               "Fasty ne meri dukaan ko quick commerce ka hissa banaya. Ab meri
//               sale double ho gayi hai!"
//             </p>
//           </div>
//           {/* Tip Card 1 */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
//             <div className="text-5xl text-green-500 mb-4">⏰</div>
//             <p className="text-gray-700 text-center">
//               Minutes mein delivery karo, ghanto mein nahi.
//             </p>
//           </div>
//           {/* Tip Card 2 */}
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
//             <div className="text-5xl text-green-500 mb-4">😊</div>
//             <p className="text-gray-700 text-center">
//               Tez service se customers ko khush rakho.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Registration Section */}
//       <div className="bg-green-100 p-6 w-full max-w-4xl flex flex-col md:flex-row items-center rounded-lg shadow-md mb-8">
//         {/* Form */}
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-3xl font-bold text-red-500 mb-4">
//             Join Fasty Today!
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Quick commerce se dukaan band hone se bachaayein. Fasty ke saath
//             judiye aur kamaai ka naya mauka paiye!
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-1">🏪 Shop Name</label>
//               <input
//                 type="text"
//                 name="shopName"
//                 value={formData.shopName}
//                 onChange={handleChange}
//                 className="w-full p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Apni dukaan ka naam"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">👤 Owner Name</label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 className="w-full p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Apna naam"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">
//                 📞 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Apna phone number"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">
//                 📍 Shop Address
//               </label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Dukaan ka pata"
//                 rows="3"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
//             >
//               Abhi Register Karein
//             </button>
//           </form>
//         </div>
//         {/* Image */}
//         <div className="md:w-1/2 p-4">
//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="Shop Owner with Fasty Delivery"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//           <p className="text-center text-gray-600 mt-2">
//             (Imagine: Ek khush shop owner Fasty delivery person ke saath)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopRegistion;
