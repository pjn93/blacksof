// src/config/footerLinks.ts

export interface FooterLinkSection {
    title: string;
    links: string[];
  }
  
  export const footerLinks: FooterLinkSection[] = [
    {
      title: "APPLICATIONS",
      links: ["Apparel", "Automotive", "Filtration", "Customised Solutions"],
    },
    {
      title: "COMPANY",
      links: ["Innovation", "Global Competency", "About Us", "Contact Us"],
    },
    {
      title: "MORE",
      links: ["Careers", "Privacy Policy", "Terms and Conditions"],
    },
    {
      title: "FOLLOW US",
      links: ["Twitter", "LinkedIn", "Instagram", "Medium"],
    },
  ];
  