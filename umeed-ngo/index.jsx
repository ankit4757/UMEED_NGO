import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaHandsHelping, FaDonate, FaPeopleCarry } from "react-icons/fa";
import { motion } from "framer-motion";

const UmeedNGO = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Umeed NGO</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#causes" className="hover:underline">Our Causes</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><Button className="bg-yellow-500 hover:bg-yellow-600">Donate Now</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Empowering Lives, Spreading Hope</h2>
            <p className="text-lg mb-6">
              Join Umeed NGO in making a difference by supporting our initiatives to
              uplift underprivileged communities and spread hope.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Get Involved</Button>
          </div>
          <motion.img 
            src="/hero-image.jpg" 
            alt="Helping Hands" 
            className="md:w-1/2 rounded-lg shadow-lg mt-8 md:mt-0" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* Our Causes Section */}
      <section id="causes" className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Causes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl">
              <CardContent className="flex flex-col items-center">
                <FaHandsHelping className="text-5xl text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Education for All</h4>
                <p className="text-center">
                  Providing quality education to underprivileged children to ensure
                  a brighter future.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl">
              <CardContent className="flex flex-col items-center">
                <FaDonate className="text-5xl text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Healthcare Initiatives</h4>
                <p className="text-center">
                  Ensuring access to essential medical facilities and health camps
                  in rural areas.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl">
              <CardContent className="flex flex-col items-center">
                <FaPeopleCarry className="text-5xl text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Disaster Relief</h4>
                <p className="text-center">
                  Supporting communities affected by natural disasters with relief
                  and recovery programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} Umeed NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UmeedNGO;

