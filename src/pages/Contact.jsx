import Header from "@/components/Header";
import { motion } from "framer-motion"; // Framer Motion
import { Mail, MapPin, Phone } from "lucide-react"; // Lucide React Icons
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <section className=" text-white  ">
      <Header />
      <div className="h-full w-full bg-black py-32  bg-grid-white/[0.2] relative flex ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black   [mask-image:radial-gradient(transparent_75%,#a257e6)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 min-h-screen relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-purple-600 mb-6">
                Contact Info
              </h2>

              {[
                // Contact Info Array
                {
                  icon: <MapPin className="text-purple-600 mr-3" size={24} />,
                  title: "Location",
                  description:
                    "Shop No- 856, Above Of Varun Pet Shop, Main 100ft Road, Near Nalanda Public School, Sant Nagar, Burari, Delhi- 110089",
                },
                {
                  icon: <Mail className="text-purple-600 mr-3" size={24} />,
                  title: "Email",
                  description: (
                    <a
                      href="mailto:Contact@mayavistudio.in"
                      className="underline text-purple-600 hover:text-purple-400"
                    >
                      Contact@mayavistudio.in
                    </a>
                  ),
                },
                {
                  icon: <Phone className="text-purple-600 mr-3" size={24} />,
                  title: "Phone",
                  description: (
                    <a
                      href="tel:+911144715135"
                      className="underline text-purple-600 hover:text-purple-400"
                    >
                      +91 1144715135
                    </a>
                  ),
                },
                {
                  icon: (
                    <FaWhatsapp className="text-green-500 mr-3" size={24} />
                  ),
                  title: "WhatsApp",
                  description: (
                    <a
                      href="https://wa.me/911144715135"
                      className="underline text-green-500 hover:text-green-400"
                    >
                      Chat with us on WhatsApp
                    </a>
                  ),
                },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center mb-6"
                >
                  {info.icon}
                  <div>
                    <p className="text-xl font-medium text-gray-200">
                      {info.title}
                    </p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-purple-600 mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                    rows="5"
                    placeholder="Write your message"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center"
                >
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
