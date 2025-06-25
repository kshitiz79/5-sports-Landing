'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative bg-gray-100 h-[600px] py-20 w-full">
      {/* Embedded Map */}
      <iframe
        title="5 Sports Health Location"
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0186464764036!2d77.71000531527554!3d12.899429690902843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e502dc1297%3A0xd8a1cbc7ef15dcee!2s5%20Sports%20Health!5e0!3m2!1sen!2sin!4v1718889838489!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Overlay Box */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="bg-white bg-opacity-95 max-w-md w-full p-8 text-black">
          <h3 className="text-3xl font-semibold mb-4 text-center">Contact Details</h3>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>93535 55855</span>
              <span>93535 55755</span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>fivesportshospital@gmail.com</span>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 mt-1" />
              <span>
                Site No 40 & 41, 1st Floor, MPS Building,<br />
                Ambedkar Nagar, Mullur, Sarjapur Road,<br />
                Carmelram, Bangalore 560035
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
