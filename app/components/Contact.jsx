"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "./Flex";
import { motion } from "framer-motion"; // Import Framer Motion
import { Poppins } from "next/font/google";

// Google Poppins font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const Contact = () => {
  // State to track form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to track button position
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // State to track button color change
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check if all form fields are filled
  const isFormComplete = Object.values(formData).every((field) => field !== "");

  // Function to handle button hover or click
  const handleButtonHover = () => {
    if (!isFormComplete) {
      setIsClicked(true); // Change button color to red if form is incomplete
      // Randomize new button position
      const newX = Math.floor(Math.random() * 200) - 100; // Random X position
      const newY = Math.floor(Math.random() * 200) - 100; // Random Y position
      setButtonPosition({ x: newX, y: newY });
    } else {
      setIsClicked(false); // Reset the click state when form is complete
    }
  };

  return (
    <>
      <Container>
        <div className="bg-[url('/venomfull.jpg')] h-[850px] w-full bg-cover bg-center">
          <Flex className=" xl:flex-row md:flex-col sm:flex-col lg:flex-col">
            <div className="xl:w-[50%] w-full mt-14">
              <div>
                <div className="my-6 mx-auto font-[sans-serif]">
                  <h1 className="text-3xl text-white font-extrabold text-center">
                    Contact
                  </h1>
                  <form className="mt-12 space-y-6">
                    <div>
                      <label className="text-white text-sm block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="xl:w-full w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-gray-500 text-white placeholder:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm block mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="xl:w-full w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-gray-500 text-white placeholder:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="xl:w-full w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-gray-500 text-white placeholder:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm block mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="xl:w-full w-full rounded-md px-4 border text-sm pt-2.5 outline-blue-500 text-white bg-gray-500 placeholder:text-white"
                      ></textarea>
                    </div>
                    <div className="text-center relative">
                      {/* Moving button with Framer Motion */}
                      <motion.button
                        type="button"
                        onMouseEnter={handleButtonHover} // Move button on hover if form is incomplete
                        onClick={handleButtonHover} // Move button on click if form is incomplete
                        animate={{ x: buttonPosition.x, y: buttonPosition.y }} // Animate the button's position
                        className={`${
                          isFormComplete
                            ? "bg-green-500 hover:bg-blue-600"
                            : isClicked
                            ? "bg-red-500" // Change to red when clicked and incomplete
                            : "bg-gray-500"
                        } text-white font-semibold rounded-md text-sm px-6 py-3 w-[90px]`}
                      >
                        Send
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="xl:w-[50%]"></div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Contact;
