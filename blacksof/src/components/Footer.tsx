import React from "react";
import Logo from "../assets/Layer 1.svg";


export const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <img
          src={Logo} // Replace with actual logo path
          alt="Supreme Group Logo"
          className="h-10 mb-6 md:mb-0"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm w-full md:w-auto">
          <div>
            <h4 className="font-semibold mb-2">APPLICATIONS</h4>
            <ul className="space-y-1">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">MORE</h4>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>©2023. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071</p>
      </div>
    </footer>
  );
};

