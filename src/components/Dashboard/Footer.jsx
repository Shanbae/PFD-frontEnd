import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between text-sm md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Personal Finance Dashboard. All
          rights reserved.
        </p>

        <div className="mt-2 flex space-x-4 md:mt-0">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
