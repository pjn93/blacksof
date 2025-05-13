import Logo from "../../assets/Layer 1.svg";
import Group from "../../assets/Group.svg";
import { footerLinks } from "./Footer.config";

export const Footer = () => {
  return (
    <footer className="bg-white text-black px-4 py-30 md:px-20  relative">
      <div className="max-w-7xl mx-auto space-y-10 pl-20">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Supreme Group Logo"
            className="w-[226px] h-[63px]"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-sm font-medium">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-4 items-start md:items-center text-sm">
          <p>© 2023. All Rights Reserved.</p>
          <p className="md:text-right pr-50">
            Supreme House: 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>

      {/* Decorative Image */}
      <img
        src={Group}
        alt="Supreme Group Decoration"
        className="absolute bottom-0 right-0 w-[150px] md:w-[300px]"
      />
    </footer>
  );
};
