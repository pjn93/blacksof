import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Layer 1.svg";
import Translate from "../assets/translate 1.png";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-[#F9FBFF] py-4 px-30 flex justify-between items-center shadow-sm h-[80px]">
      {/* Left - Logo */}
      <div>
        <img
          src={Logo}
          alt="Supreme Group Logo"
          className="w-[146px] h-[41px]"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center space-x-10">
        <button className="w-fit h-[50px] bg-[#5CD6FF] text-white px-6 border border-[#5CD6FF] rounded-[100px] text-[16px] font-medium hover:bg-[#40cfff] transition">
          Contact Us
        </button>

        <FaLinkedinIn size={14}/>

        {/* Wrap image and text together tightly */}
        <div className="flex items-center">
          <img src={Translate} alt="Translate Icon" className="h-4 mr-1" />
          <span className="text-[12px] text-gray-600">ENG</span>
        </div>
      </div>
    </header>
  );
};
