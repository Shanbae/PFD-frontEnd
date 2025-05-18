import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-transparent pt-12 pb-8 text-white sm:px-10">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h2 class="mb-3 text-2xl font-bold text-amber-400">FinanceDash</h2>
            <p class="mb-4 text-sm text-gray-300">
              A smart personal finance dashboard to manage your income,
              expenses, and savings — all in one place.
            </p>
            <div class="mt-2 flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-amber-400">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-amber-400">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-amber-400">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-amber-400">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Navigation</h3>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" class="hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" class="hover:text-amber-400">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/reports" class="hover:text-amber-400">
                  Reports
                </a>
              </li>
              <li>
                <a href="/transactions" class="hover:text-amber-400">
                  Transactions
                </a>
              </li>
              <li>
                <a href="/goals" class="hover:text-amber-400">
                  Goals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Support</h3>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/faq" class="hover:text-amber-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-amber-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" class="hover:text-amber-400">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy" class="hover:text-amber-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/help" class="hover:text-amber-400">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p class="mb-3 text-sm text-gray-300">
              Subscribe to our newsletter for monthly financial tips & updates.
            </p>
            <form class="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                class="rounded-md px-3 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                class="rounded-md bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; 2025 FinanceDash. Designed with care in Trichy. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
