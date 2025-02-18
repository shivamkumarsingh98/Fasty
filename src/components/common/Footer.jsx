import React from "react";
import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-green-500 text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Popular Searches Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Searches</h4>
            <ul className="space-y-2">
              <li>Products</li>
              <li>Brands</li>
              <li>Categories</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>Fruits & Vegetables</li>
              <li>Baby Food</li>
              <li>Breakfast & Sauces</li>
              <li>Cleaning Essentials</li>
              <li>Homegrown Brands</li>
              <li>Dairy Products</li>
              <li>Frozen Foods</li>
              <li>Beverages</li>
              <li>Snacks & Sweets</li>
              <li>Bakery Products</li>
              <li>Personal Care</li>
              <li>Health & Wellness</li>
              <li>Household Items</li>
              <li>Poultry & Meat</li>
              <li>Seafood</li>
              <li>Organic Products</li>
              <li>Pet Supplies</li>
              <li>Stationery</li>
              <li>Electronics</li>
              <li>Clothing & Accessories</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 cursor-pointer">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/")}>Delivery Areas</li>
              <li onClick={() => navigate("/")}>Careers</li>
              <li onClick={() => navigate("/Support")}>Customer Support</li>
              <li onClick={() => navigate("/TermsAndConditions")}>
                Terms and Conditions
              </li>
              <li onClick={() => navigate("/PrivacyPolicy")}>Privacy Policy</li>
              <li onClick={() => navigate("/return-policy")}>Return Policy</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-3xl hover:text-gray-900 cursor-pointer" />
              <FaTwitter className="text-3xl hover:text-gray-900 cursor-pointer" />
              <FaInstagram className="text-3xl hover:text-gray-900 cursor-pointer" />
              <FaLinkedin className="text-3xl hover:text-gray-900 cursor-pointer" />
            </div>
            <h4 className="font-semibold text-lg mt-8 mb-4">Download App</h4>
            <div className="flex space-x-4">
              <div className="relative group">
                <FaGooglePlay className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Coming Soon
                </span>
              </div>
              <div className="relative group">
                <FaApple className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>© Miilan Helping Hand India Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
