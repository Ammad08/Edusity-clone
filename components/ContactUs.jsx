"use client";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";

export default function ContactUs() {
  const [captcha, setCaptcha] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const [isHuman, setIsHuman] = useState(false);

  return (
    <div id="contact" className="flex flex-col justify-center items-center bg-gray-100 p-8 md:p-16">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h6 className="text-[#212EA0] font-semibold text-lg">Contact Us</h6>
        <h3 className="text-3xl font-bold">Get In Touch</h3>
      </div>

      {/* Contact Info & Form Section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl p-6 ">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            Send us a message
            <IoIosMailOpen className="text-[#F6B154] ml-2" />
          </h2>
          <p className="text-gray-700 mb-4 leading-tight">
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            community.
          </p>
          <div className="text-gray-600 space-y-2">
            <p className="flex items-center">
              <IoIosMail className="mr-2 text-[#212EA0]" />
              Contact@GreatStack.dev
            </p>
            <p className="flex items-center">
              <BiSolidPhoneCall className="mr-2 text-[#212EA0]" />
              +1 123-456-7890
            </p>
            <p className="flex items-center">
              <FaLocationDot className="mr-2 text-[#212EA0]" />
              77 Massachusetts Ave, Cambridge,
              <br/>
               MA 02139,United States
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                className="block text-gray-500 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 text-sm text-gray-800 focus:outline-none bg-[#EBECFE] focus:ring-2 focus:ring-indigo-900"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                className="block text-gray-500 text-sm font-medium mb-2"
                htmlFor="phone"
              >
                Phone No
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 text-sm text-gray-800 focus:outline-none bg-[#EBECFE] focus:ring-2 focus:ring-indigo-900"
                placeholder="Enter Your Phone No"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-gray-500 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm text-gray-800 focus:outline-none bg-[#EBECFE] focus:ring-2 focus:ring-indigo-900"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                className="block text-gray-500 text-sm font-medium mb-2"
                htmlFor="message"
              >
                Write Your Message here
              </label>
              <textarea
                id="message"
                className="w-full text-sm text-gray-800 p-3 focus:outline-none bg-[#EBECFE] focus:ring-2 focus:ring-indigo-900"
                placeholder="Enter Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="bg-white flex items-center justify-between  border-2  w-1/2">
              <div className="h-12 flex justify-center items-center px-2 py-8">
              <input
                type="checkbox"
                id="humanCaptcha"
                className="mr-2 w-6 h-8 border border-green-800 border-r-4 rounded focus:ring-2 focus:ring-indigo-900"
                checked={isHuman}
                onChange={(e) => setIsHuman(e.target.checked)}
                required
              />
              <label
                htmlFor="humanCaptcha"
                className="text-gray-600 text-sm "
              >
                I am Human
              </label>
              </div>
              <div>
                <img src="/hCaptcha.jpg" className="h-18 w-28 bg-transparent" alt="captcha" />
                {/* <a href="#" className="text-xs font-thin">privacy-terms</a> */}
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-2/3 md:w-2/5">
              <button className="w-full bg-[#212EA0] text-white p-3 rounded-3xl flex text-nowrap items-center justify-center">
                Submit Now
                <HiArrowLongRight className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
