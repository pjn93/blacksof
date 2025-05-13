import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Layer 1.svg";
import Translate from "../assets/translate 1.png";
import { Button } from "../ui/Button/Button";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-header-bg shadow-sm h-[80px] px-4 md:px-12 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Supreme Group Logo"
          className="w-[120px] md:w-[146px] h-auto"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
        <Button className="bg-button text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2" type="submit">
          Contact Us
        </Button>

        <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />

        {/* Translate */}
        <div className="flex items-center">
          <img
            src={Translate}
            alt="Translate Icon"
            className="h-[20px] w-[20px] mr-1"
          />
          <span className="text-[11px] sm:text-xs text-secondary font-semibold">ENG</span>
        </div>
      </div>
    </header>
  );
};
