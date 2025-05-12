import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Layer 1.svg";
import Translate from "../assets/translate 1.png";
import { Button } from "../ui/Button/Button";

export const Header = () => {
  return (
<header className="fixed w-screen z-50 bg-header-bg py-4 px-30 flex justify-between shadow-sm h-[80px]">
      {/* Left - Logo */}
      <div>
        <img
          src={Logo}
          alt="Supreme Group Logo"
          className="w-[146px] h-[41px]"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex space-x-8">
           <Button className="bg-button" type="submit">Contact Us</Button>

        <FaLinkedinIn className="w-[24px] h-[24px] text-secondary mt-3" />


        {/* Wrap image and text together tightly */}
        <div className="flex pt-3" >
          <img src={Translate} alt="Translate Icon" className="h-[22px] w-[22px] mr-1" />
          <span className="text-[12px] text-secondary text-semibold">ENG</span>
        </div>
      </div>
    </header>
  );
};
