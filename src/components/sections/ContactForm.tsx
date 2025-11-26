'use client';

import { Button } from '@/components/ui/Button';
import { HiPhone, HiChat } from 'react-icons/hi';
import { Contact as ContactType } from '@/types/template';

interface Props {
  contact: ContactType;
}

const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <section id ="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            {contact.title}
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800 text-gray-800 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800 text-gray-800 dark:text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800 text-gray-800 dark:text-white"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>

          {/* WhatsApp & Phone Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <HiChat className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <HiPhone className="w-6 h-6" />
              Call Us
            </a>
          </div>
        </div>

        {/* Contact Info + Map */}
        <div className="flex flex-col gap-6">
          {/* Address */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">{contact.address}</p>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Opening Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mon - Sat: {contact.hours.mondayToSaturday}<br/>
              Sun: {contact.hours.sunday}
            </p>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe
              src={contact.mapEmbed}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
