import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo of MKE.webp'

const Icon = ({ children }) => (
  <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-600 text-white" aria-hidden="true">{children}</span>
)

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-[#d7e0ea] mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">
                <img src={logo} alt="Moneykrishna Education" className="h-10 w-auto rounded-full" />
              </Link>
            </div>
            <p className="text-gray-300 leading-relaxed">Money Krishna Education is a leading trading institute in Chennai offering expert training in Stock Market, Forex, and Options Trading. We provide both online and offline classes designed for beginners, intermediate traders, and working professionals.</p>

            <ul className="flex gap-3 mt-6" role="list" aria-label="Social links">
              <li>
                <a href="https://www.facebook.com/moneykrishna.education/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded" aria-label="Facebook">
                  <Icon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.35 1.4-3.64 3.55-3.64 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.59l-.41 2.9h-2.18V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                    </svg>
                  </Icon>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/moneykrishnaeducation/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded" aria-label="Instagram">
                  <Icon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 7a5 5 0 100 10 5 5 0 000-10z" />
                    </svg>
                  </Icon>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded" aria-label="Twitter">
                  <Icon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22 5.92c-.66.29-1.37.48-2.12.57a3.7 3.7 0 001.62-2.03 7.28 7.28 0 01-2.33.89 3.64 3.64 0 00-6.2 3.32A10.34 10.34 0 013 4.88a3.64 3.64 0 001.13 4.85c-.56-.02-1.09-.17-1.55-.43v.04c0 1.76 1.25 3.23 2.92 3.57-.52.14-1.06.16-1.6.06a3.66 3.66 0 003.41 2.54A7.3 7.3 0 012 19.54a10.3 10.3 0 005.6 1.64c6.72 0 10.4-5.57 10.4-10.4v-.47c.72-.52 1.34-1.17 1.83-1.9a7.16 7.16 0 01-2.05.56z" />
                    </svg>
                  </Icon>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded" aria-label="GitHub">
                  <Icon>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.71 5.41-5.29 5.69.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                    </svg>
                  </Icon>
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">About Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
              <li><a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">-</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><a href="mailto:moneykrishnaeducation@gmail.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">moneykrishnaeducation@gmail.com</a></li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C9.16 21 3 14.84 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.8z"/></svg><a href="tel:9500074778" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">+91 95000 74778</a></li>
              <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-400 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg><span>3rd floor, I Block, 35th Street, 18th Main Rd, Anna Nagar West, Chennai.</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <div>©2024 - {new Date().getFullYear()} Moneykrishna Education</div>
          <div className="mt-3 md:mt-0">
            <a href="#" className="text-teal-400 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">Terms &amp; Conditions</a>
            <span className="mx-2">·</span>
            <a href="#" className="text-teal-400 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
