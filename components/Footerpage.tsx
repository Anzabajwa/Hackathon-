import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 sm:mb-0">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytics</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500">
                Lore imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" text-gray-500 text-sm">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
