'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = 'https://5sportshospital.com';

  return (
    <footer className="transition-colors duration-500 py-10 relative border-t bg-gradient-to-b from-white via-gray-200 to-gray-300 text-gray-900 border-gray-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo5.png" alt="5 Sports Health Logo" className="h-20 w-40" />
          <p className="mt-4 max-w-md text-justify mr-8">
            A peak multidisciplinary excellence center for sports medicine, orthopedics,
            posture correction, and injury rehabilitation, including 11 sub-specialties of advanced sports science.
          </p>
          <div className="flex space-x-4 mt-4 text-green-500 text-xl">
            <a href="https://www.facebook.com/share/1BM9NaA5Th/" className="hover:text-yellow-600 transition-all">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/5-sports-health/" className="hover:text-yellow-600 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/5sportshealth?igsh=Y2R3NnZqcnVqdDlx" className="hover:text-yellow-600 transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@5SportsHospital" className="hover:text-yellow-600 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-700 font-bold text-lg">QUICK LINKS</h3>
          <div className="h-1 w-16 bg-green-800 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-gray-800">
            <FooterLink href="/" label="Home" baseUrl={baseUrl} />
            <FooterLink href="/about-page" label="About Us" baseUrl={baseUrl} />
            <FooterLink href="/Atheletes/injury/" label="Services" baseUrl={baseUrl} />
            <FooterLink href="/Atheletes/programmes/" label="Programmes" baseUrl={baseUrl} />
            <FooterLink href="/Orthopedicss/orthobiological&regenerative-therapies/" label="Orthobiology" baseUrl={baseUrl} />
            <FooterLink href="/cosmo-dental" label="Cosmo Dental" baseUrl={baseUrl} />
            <FooterLink href="/news&media/imageGallery/" label="Gallery" baseUrl={baseUrl} />
            <FooterLink href="/contact-us" label="Contact Us" baseUrl={baseUrl} />
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-green-700 font-bold text-lg">PROGRAMS</h3>
          <div className="h-1 w-16 bg-green-800 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-gray-800">
            <FooterLink href="/testing/sports-testing/" label="Basic Exercise" baseUrl={baseUrl} />
            <FooterLink href="/programs/surgical-prehab&rehab/" label="Advanced Exercises" baseUrl={baseUrl} />
            <FooterLink href="/Atheletes/sports-nutrients/" label="Sports Nutrients" baseUrl={baseUrl} />
            <FooterLink href="/Orthopedicss/arthroscopy" label="Arthroscopy" baseUrl={baseUrl} />
            <FooterLink href="/Orthopedicss/fracture-management" label="Fracture Management" baseUrl={baseUrl} />
            <FooterLink href="/Orthopedicss/robotic-knee-replacement" label="Robotics Knee" baseUrl={baseUrl} />
            <FooterLink href="/news&media/blog/" label="Blogs" baseUrl={baseUrl} />
            <FooterLink href="/cosmo-dental/dental-service" label="Dentistry" baseUrl={baseUrl} />
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-green-700 font-bold text-lg">CONTACT US</h3>
          <div className="h-1 w-16 bg-green-800 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-4 max-w-m text-gray-900">
            <ContactItem
              icon={<MdLocationOn />}
              text="Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN"
              type="location"
            />
            <ContactItem
              icon={<MdEmail />}
              text="care@5sportshealth.com"
              type="email"
            />
            <ContactItem
              icon={<MdPhone />}
              phoneNumbers={['9353555755', '9353555855']}
              type="phone"
            />
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-green-800 mb-2 md:mb-0">5 Sports Health. All Rights Reserved.</p>
        <p className="text-gray-900">Copyright © {currentYear}</p>
        <a href="https://rbshstudio.com/" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 mb-2 md:mb-0">
            Powered by <span className="text-gray-900 font-bold">RBSH STUDIO</span>
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ href, label, baseUrl }) => (
  <li>
    <Link href={`${baseUrl}${href}`} className="hover:text-green-500 transition-all text-gray-800">
      {label}
    </Link>
  </li>
);

const ContactItem = ({ icon, text, phoneNumbers, type }) => {
  let content;

  if (type === 'email') {
    content = <a href={`mailto:${text}`} className="text-gray-800 hover:text-green-600">{text}</a>;
  } else if (type === 'phone' && phoneNumbers) {
    content = (
      <div className="flex space-x-2">
        {phoneNumbers.map((number, index) => (
          <a key={index} href={`tel:${number}`} className="text-gray-800 hover:text-green-600">
            {number}
          </a>
        ))}
      </div>
    );
  } else if (type === 'location') {
    content = (
      <a href="https://maps.app.goo.gl/cE8hKHAtN4VsGYSX8" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-600 break-words">
        {text}
      </a>
    );
  } else {
    content = <span className="text-gray-800">{text}</span>;
  }

  return (
    <li className="flex items-start justify-center md:justify-start space-x-2">
      <span className="text-green-800 text-xl">{icon}</span>
      <span>{content}</span>
    </li>
  );
};
