import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";
// import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Varun Hydraulics
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Reliable forklift and hydraulic repair service — keeping your
            operations running smoothly with fast, honest, and expert support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-yellow-600" />
              <a href="tel:+919998748236" className="hover:text-yellow-600 transition">
                +91 999 874 8236
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-yellow-600" />
              <a href="mailto:varunhydraulics01@gmail.com" className="hover:text-yellow-600 transition">
                info@varunhydraulics.in
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-yellow-600" />
              <span>KK Compound Amar Nagar Chanod Vap, Gujarat</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 dark:border-slate-700 mt-6" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Varun Hydraulics. All rights reserved.</p>

        {/* <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#" className="hover:text-yellow-600 transition" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-600 transition" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-600 transition" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
