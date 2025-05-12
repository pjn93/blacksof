import Logo from "../../assets/Layer 1.svg";
import Group from "../../assets/Group.svg";
import { footerLinks } from "./Footer.config";

export const Footer = () => {
  return (
    <footer className="bg-white text-black p-30 md:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-10 pl-15">
        {/* Row 1 - Logo */}
        <div>
          <img
            src={Logo}
            alt="Supreme Group Logo"
            className="w-[226px] h-[63px]"
          />
        </div>

        {/* Row 2 - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left pl-2 pt-5">
        {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-4 text-sm font-medium">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Address */}
        <div className="flex flex-row justify-between pl-2 pr-40">
          <p className="text-sm">©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
      <img
    src={Group}
    alt="Supreme Group Decoration"
    className="absolute bottom-0 right-0 w-[150px] md:w-[350px]" // adjust width as needed
  />
    </footer>
  );
};
