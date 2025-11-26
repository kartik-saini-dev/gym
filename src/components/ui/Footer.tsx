'use client';

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Footer as FooterType } from "@/types/template";

interface Props {
  footer: FooterType;
}

export default function Footer({ footer }: Props) {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{footer.title}</h2>
          <p className="text-gray-400">{footer.description}</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footer.quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Details */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Address: {footer.contact.address}</li>
            <li>📞 Phone: {footer.contact.phone}</li>
            <li>📧 Email: {footer.contact.email}</li>
            <li>🕒 Hours: {footer.contact.hours}</li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            {footer.social.facebook && (
              <a href={footer.social.facebook} className="text-gray-400 hover:text-white"><FaFacebook /></a>
            )}
            {footer.social.instagram && (
              <a href={footer.social.instagram} className="text-gray-400 hover:text-white"><FaInstagram /></a>
            )}
            {footer.social.whatsapp && (
              <a href={footer.social.whatsapp} className="text-gray-400 hover:text-white"><FaWhatsapp /></a>
            )}
          </div>
        </div>

      </div>

      {/* Bottom area */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} {footer.title}. All Rights Reserved.
      </div>
    </footer>
  );
}
